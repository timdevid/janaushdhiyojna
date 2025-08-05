'use client'
import { useState } from "react";
import { database } from "@/lib/Firebase";
import { ref, get, remove } from "firebase/database";
import { saveAs } from "file-saver";
import dayjs from "dayjs";

export default function GetAdsData() {
  const [loading, setLoading] = useState(false);
  const [deleteCode, setDeleteCode] = useState(""); // State for delete code
  const [downloadCode, setDownloadCode] = useState(""); // State for download code
  const [deleteCodeVerified, setDeleteCodeVerified] = useState(false); // For delete verification
  const [downloadCodeVerified, setDownloadCodeVerified] = useState(false); // For download verification

  const DELETE_CODE = "3496"; // Special code for deleting
  const DOWNLOAD_CODE = "2580"; // Special code for downloading

  // New function to download all data
  const downloadAllData = async () => {
    if (downloadCode !== DOWNLOAD_CODE) {
      return alert("Invalid download code.");
    }

    setLoading(true);
    const snapshot = await get(ref(database, "userjanaushdhidata"));
    const allData = snapshot.val();

    if (!allData) {
      setLoading(false);
      return alert("No data found.");
    }

    const allDataArray = Object.keys(allData).map(key => ({
      id: key,
      ...allData[key],
    }));

    exportToCSV(allDataArray, "allData");
    setLoading(false);
  };

  // Function to delete all data
  const deleteAllData = async () => {
    if (deleteCode !== DELETE_CODE) {
      return alert("Invalid delete code.");
    }

    if (!window.confirm("Are you sure you want to delete all data?")) {
      return;
    }

    setLoading(true);
    const snapshot = await get(ref(database, "userjanaushdhidata"));
    const allData = snapshot.val();

    if (!allData) {
      setLoading(false);
      return alert("No data found.");
    }

    for (const key in allData) {
      await remove(ref(database, `userjanaushdhidata/${key}`));
    }

    alert("All data has been deleted.");
    setLoading(false);
  };

  // Fixed headers including plantType and other expected fields
  const exportToCSV = (data, label) => {
    if (!data.length) return alert("No matching data to export.");

    const headers = [
      
      "name",
      "email",
      "phone",
      "state",
      "address",
      "intrestedin",
      ,
      // Add any other expected fields here
    ];

    const csvContent = [
      headers.join(","), // column headers
      ...data.map(row =>
        headers
          .map(field => JSON.stringify(row[field] ?? ""))
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `userjanaushdhidata-${label}-${dayjs().format("YYYY-MM-DD")}.csv`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Manage Users Data</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* New Button to Download All Data with code prompt */}
        <button
          onClick={() => setDownloadCodeVerified(false)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Download All Data
        </button>

        { !downloadCodeVerified && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter download code"
              className="border p-2"
              value={downloadCode}
              onChange={(e) => setDownloadCode(e.target.value)}
            />
            <button
              onClick={downloadAllData}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Verify and Download
            </button>
          </div>
        )}

        {/* New Button to Delete All Data with code prompt */}
        <button
          onClick={() => setDeleteCodeVerified(false)}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Delete All Data
        </button>

        { !deleteCodeVerified && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter delete code"
              className="border p-2"
              value={deleteCode}
              onChange={(e) => setDeleteCode(e.target.value)}
            />
            <button
              onClick={deleteAllData}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Verify and Delete
            </button>
          </div>
        )}
      </div>

      {loading && <p className="mt-4 text-yellow-500">Processing...</p>}
    </div>
  );
}

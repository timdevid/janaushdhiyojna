import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="w-full p-4">
                <Image
                    src="/assets/image1.png"
                    alt="Descriptive Alt Text"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
            <section>
                <div className="flex mt-8 p-4 flex-col lg:flex-row gap-4 w-full">

                    {/* Left - Carousel Area */}
                    <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative">
                            <Image
                                src="/assets/image3.png" // Replace with your actual image path
                                alt="Modi Speech"
                                width={1000}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 bg-black/60 w-full text-white px-4 py-2 text-sm font-semibold">
                                {/* Hon'ble PM Shri Narendra Modi addressed the gathering in Silvassa on Jan Aushadhi Diwas 7th March 2025. */}
                            </div>
                        </div>

                        {/* Bottom thumbnails */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4">
                            {[4, 5].map((i) => (
                                <div key={i} className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
                                    <Image
                                        src={`/assets/image${i}.png`} // Replace with actual thumbnails
                                        alt={`Thumb ${i}`}
                                        width={300}
                                        height={200}
                                        className="w-full h-auto"
                                    />
                                    <p className="text-xs p-2 font-medium">
                                        {i === 1
                                            ? 'Hon’ble PM Shri Narendra Modi addressed the gathering in Silvassa on Jan Aushadhi Diwas 7th...'
                                            : i === 2
                                                ? 'Visit of Hon’ble Health Minister of Guyana, H.E. Dr. Frank C.S. Anthony at Jan Aushadhi Ke...'
                                                : 'Hon’ble Union Home Minister Shri Amit Shah praised the integration of Primary Agricultural...'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - News Panel */}
                    <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-4 flex flex-col">
                        {/* Tabs */}
                        <div className="flex mb-4">
                            <button className="flex-1 bg-blue-800 text-white font-semibold py-2 rounded-l-full">
                                WHAT'S NEW
                            </button>
                            <button className="flex-1 border border-blue-800 text-blue-800 font-semibold py-2 rounded-r-full">
                                NEWS LETTERS
                            </button>
                        </div>

                        {/* News List */}
                        <div className="flex flex-col gap-4 overflow-y-auto max-h-[420px] pr-2">
                            {[
                                'Cancellation Notice - CEO Post',
                                'Jan Aushadhi Varta - Edition (35), June-2025',
                                'Extension of Last Date for Submission of CEO Application',
                                'Walk-In-Interviews for Consultant',
                                'Corrigendum (1) - CEO Post',
                            ].map((title, idx) => (
                                <div key={idx} className="border-b pb-2">
                                    <p className="text-sm font-medium">{title}:</p>
                                    <div className="flex items-center justify-between mt-1">
                                        <a
                                            href="#"
                                            className="text-blue-600 text-sm hover:underline"
                                        >
                                            Click Here For Details
                                        </a>
                                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                            New
                                        </span>
                                    </div>

                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-white mt-4">
                <div className="p-8 mx-auto flex flex-col md:flex-row gap-8 items-start">

                    <div className="md:w-1/2 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 border-b-4 border-blue-200 inline-block pb-1">
                            Janaushadhi Pariyojana Objectives
                        </h2>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            With an objective of making quality bland drugs accessible at reasonable costs to all,
                            Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) was propelled by the Office of
                            Pharmaceuticals, Service of Chemicals & Fertilizers, Government of India in November 2008.
                            Beneath the conspire, devoted outlets known as Janaushadhi Kendras are opened to supply
                            bland solutions at reasonable costs.
                        </p>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            As on <strong>30.06.2024</strong>, <strong>12616 Janaushadhi Kendras</strong> are utilitarian over
                            the nation. Item bushel of PMBJP comprises <strong>2047 drugs</strong> and <strong>300 surgical things</strong>.
                            The Plot is executed by a society enrolled beneath the Social orders Enlistment Act, viz.,
                            Pharma & Therapeutic Bureau of India (PMBI) [recent Bureau of Pharma PSUs of India (BPPI)].
                        </p>

                        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 mt-4">
                            <li>
                                Guarantee get to to quality medications for all areas of the populace, particularly the destitute and the denied ones.
                            </li>
                            <li>
                                Make mindfulness almost nonexclusive solutions through instruction and exposure to counter the discernment that quality is synonymous with tall cost as it were.
                            </li>
                            <li>
                                Produce work by locks in person business visionaries in opening of PMBJP Kendra.
                            </li>
                        </ul>

                    </div>

                    <div className="md:w-1/2 w-full">
                        <Image
                            src="/assets/image2.png"
                            alt="Janaushadhi Image"
                            width={800}
                            height={600}
                            className="rounded shadow-md w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            <section>
                <section className=" p-8 mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-2">
                        Janaushadhi Pariyojana Salient features
                    </h2>
                    <div className="w-16 h-1 bg-black mb-6"></div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Left: Text Content */}
                        <div className="md:w-1/2 space-y-4 text-gray-700">
                            <p>
                                The Plot is worked by government offices as well as by private business visionaries.
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    The motivation given to the Kendra proprietors has been improved from existing Rs. 2.50 lakh to up to Rs. 5.00 lakh to be given @15% of month to month buys made, subject to a ceiling of Rs. 15,000/- per month.
                                </li>
                                <li>
                                    One-time motivating force of Rs. 2.00 lakh is to be given for furniture & installations and computer & printers to the PMBJP Kendras opened in North-Eastern States, Himalayan regions, Island regions and in reverse ranges specified as optimistic area by NITI Aayog or opened by ladies business person, Divyang, SCs & STs and Ex-servicemen.
                                </li>
                                <li>
                                    Costs of the Jan Aushadhi solutions are 50%-90% less than that of branded drugs costs within the open showcase.
                                </li>
                                <li>
                                    Each group of sedate is tried at research facilities authorize by ‘National Accreditation Board for Testing and Calibration Research facilities (NABL)’ for guaranteeing best quality.
                                </li>
                            </ul>

                        </div>

                        {/* Right: YouTube Video */}
                        <div className="md:w-1/2 w-full">
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/f0-hB4G_mVU"
                                    title="जन औषधि केंद्रों पर क्यों मिलती हैं सस्ती दवाएं, जानें कितनी होती हैं असरदार"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </section>
            </section>

        </div>
    )
}

export default Hero
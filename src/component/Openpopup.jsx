'use client'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ApplyNowComp from '@/component/ApplyNow'

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -100 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, y: -100, transition: { duration: 0.5, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const OpenPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal automatically on component mount
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='w-fit'>
      

      {/* Button to open modal */}
      <div className="">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-[#EC691B] cursor-pointer text-white font-semibold rounded  transition"
        >
          Apply For Kendra
        </button>
      </div>

      

      {/* AnimatePresence for mounting/unmounting animations */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal} // close modal when clicking outside
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // prevent backdrop click closing when clicking inside modal
            >
              <ApplyNowComp closeModal={closeModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OpenPopup;

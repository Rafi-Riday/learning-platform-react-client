import React from 'react';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa';
import { HiX } from "react-icons/hi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const commonThemes = { theme: 'colored', position: "bottom-right", hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, };

const infoToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.info((toastText || 'Success!'), { ...commonThemes, autoClose: toastTime || 3000, icon: <FaCheckCircle />, });
    mainToastFunc();
};

const successToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.success((toastText || 'Success!'), { ...commonThemes, autoClose: toastTime || 3000, icon: <FaTrophy className='text-orange-300' />, });
    mainToastFunc();
};

const errorToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.error((toastText || 'Error!'), { ...commonThemes, autoClose: toastTime || 3000, icon: <HiX />, });
    mainToastFunc();
};

export { infoToast, successToast, errorToast };

/* usage */
// import { infoToast, successToast } from 'utilities/toasts';
// import { ToastContainer } from 'react-toastify';
//
// // toast theming
//   const contextClass = {
//     success: "bg-emerald-600",
//     info: "bg-blue-500",
//   };
//
// infoToast('Done Nicely!', 3000)
//
// {/* toast */}
// <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-3"} />
//
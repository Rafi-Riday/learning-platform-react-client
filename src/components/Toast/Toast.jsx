import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
    // toast theming
    const contextClass = {
        success: "bg-[#00867b]",
        info: "bg-blue-500",
        error: "bg-error",
    };
    return (
        <div>
            {/* toast */}
            <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-1 sm:mt-2 lg:mt-3 mb-2 sm:mb-0"} />
        </div>
    );
};

export default Toast;
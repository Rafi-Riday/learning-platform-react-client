import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaAmazonPay, FaPaypal, FaStripe, FaCreditCard, FaPiggyBank } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UseContext';
import userDemoImg from '../../img/user.jpg';
import loginDemoImg from '../../img/login.jpg';
import { successToast } from '../../utilities/toasts';

const CheckOut = () => {
    document.title = 'Learn CSE | CheckOut';
    const { user } = useContext(AuthContext);
    const [imageNoError, setImageNoError] = useState(true);

    const successPay = () => {
        successToast(<b>Thank You for purchasing the course</b>, 2000);
    };

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Thank You!</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <div className={`avatar flex flex-col justify-center items-center`}>
                                <div className={`w-28 rounded-full`}>
                                    {
                                        (imageNoError && user?.photoURL) ?
                                            <img src={user.photoURL} onError={() => setImageNoError(false)} />
                                            :
                                            (user?.photoURL && !imageNoError) ?
                                                <img src={userDemoImg} alt="user" />
                                                :
                                                <img src={loginDemoImg} alt="login" />
                                    }
                                </div>
                            </div>
                            {
                                user?.displayName && <h3 className='text-center font-extrabold text-2xl'>{user?.displayName}</h3>
                            }
                            <div className='text-center font-semibold'>Total : <span className='text-orange-500'>$50</span></div>
                            <div className='text-center'>Choose Payment Method</div>
                            <button onClick={successPay} className="btn btn-base-content btn-outline"><FaCreditCard className='text-xl text-sky-500' />&nbsp;&nbsp;Credit</button>
                            <button onClick={successPay} className="btn btn-base-content btn-outline"><FaPiggyBank className='text-xl text-yellow-500' />&nbsp;&nbsp;Bank</button>
                            <span className='w-full flex items-center justify-center text-base-content'><span className='-mt-4'>_________</span>&nbsp;<span>Or</span>&nbsp;<span className='-mt-4'>_________</span></span>
                            <button onClick={successPay} className="btn btn-base-content btn-outline"><FcGoogle className='text-xl' />&nbsp;&nbsp;Pay</button>
                            <button onClick={successPay} className="btn btn-base-content btn-outline"><FaAmazonPay className='text-2xl text-orange-600' />&nbsp;&nbsp;Amazon</button>
                            <button onClick={successPay} className="btn btn-base-content btn-outline"><FaPaypal className='text-xl text-indigo-500' />&nbsp;&nbsp;Paypal</button>
                            <button onClick={successPay} className="btn btn-base-content btn-outline"><FaStripe className='text-4xl text-blue-500' />&nbsp;&nbsp;Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
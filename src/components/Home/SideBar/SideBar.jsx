import React, { useState } from 'react';
import { } from "react-icons/fa";
import { HiOutlineLogin, HiOutlineLogout, HiStar } from "react-icons/hi";
import { FcDocument } from "react-icons/fc";
import { HiUserPlus } from "react-icons/hi2";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UseContext';
import userDemoImg from '../../../img/user.jpg';
import { errorToast } from '../../../utilities/toasts';
import { Link } from 'react-router-dom';

const SideBar = () => {
    document.title = 'Learn CSE | Profile';
    const { user, signOutUser } = useContext(AuthContext);
    const [imageNoError, setImageNoError] = useState(true);

    const signOutFunc = () => {
        signOutUser()
            .then(() => { })
            .catch(err => {
                errorToast(<b>{err?.code?.slice(5)}</b>, 5000);
            })
    };


    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <div className={`avatar flex flex-col justify-center items-center`}>
                                <div className={`w-28 rounded-full`}>
                                    {
                                        (imageNoError && user?.photoURL) ?
                                            <img src={user?.photoURL} onError={() => setImageNoError(false)} />
                                            :
                                            <img src={userDemoImg} alt="user" />
                                    }
                                </div>
                            </div>
                            {
                                (user?.uid && user?.displayName) && <h3 className='text-center font-extrabold text-2xl'>{user?.displayName}</h3>
                            }
                            {
                                user?.uid ?
                                    <button onClick={signOutFunc} className="btn btn-base-content btn-outline">Logout&nbsp;&nbsp;<HiOutlineLogout className='text-lg text-red-500' /></button>
                                    :
                                    <>
                                        <Link to='/login' className="btn btn-base-content btn-outline">Log In&nbsp;&nbsp;<HiOutlineLogin className='text-lg text-blue-400' /></Link>
                                        <Link to='/register' className="btn btn-base-content btn-outline">Register&nbsp;<HiUserPlus className='text-lg text-orange-400' /></Link>
                                    </>
                            }
                            <Link to='/checkout' className='btn btn-sm btn-outline'>Get Premium Access&nbsp;&nbsp;<HiStar className='text-lg text-orange-400' /></Link>
                            <Link to='/terms-and-conditions' className='btn btn-sm btn-outline'>Terms & Conditions&nbsp;&nbsp;<FcDocument className='text-lg' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
import React, { useState } from 'react';
import { FaCheckCircle, FaRedoAlt, FaRegTrashAlt, FaArrowRight } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/UseContext';
import userDemoImg from '../../img/user.jpg';
import loginDemoImg from '../../img/login.jpg';
import { errorToast, infoToast } from '../../utilities/toasts';

const Profile = () => {
    document.title = 'Learn CSE | Profile';
    const { user, updateUser, verificationEmailUser, resetPass, deleteAccount, signOutUser } = useContext(AuthContext);
    const [imageNoError, setImageNoError] = useState(true);

    const [updatedUserName, setUpdatedUserName] = useState(user?.displayName || 'User');
    const [updatedUserImg, setUpdatedUserImg] = useState(user?.photoURL || null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = data => {
        const { fullName, imageURL } = data;
        updateUser(fullName, imageURL)
            .then(res => {
                infoToast(<b>Profile Successfully Updated</b>, 2000);
                setUpdatedUserName(user?.displayName);
                setUpdatedUserImg(user?.photoURL);
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };

    const emailVerifyFunc = () => {
        verificationEmailUser()
            .then(res => {
                infoToast(<b>Verification Email Sent.<br />
                    Please Check your inbox, check spam indeed<br />
                    Reload this page after Verification is complete.
                </b>, 3000);
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };

    const passResetFunc = () => {
        resetPass(user?.email)
            .then(res => {
                infoToast(<b>Password Reset Email Sent.<br />Please Check your inbox, check spam indeed</b>, 2000);
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };
    const deleteAccountFunc = () => {
        const deleteCommand = prompt(`Are you sure you want to Delete you account?\nAll of your data will be lost forever and can't be retrieved.\nIf you agree, please type "CONFIRM"`);
        if (deleteCommand === 'CONFIRM') {
            deleteAccount()
                .then(res => {
                    infoToast(<b>Account Has been deleted</b>, 2000);
                })
                .catch(err => {
                    errorToast(<b>{err.code.slice(5)}</b>, 5000);
                })
        } else {
            errorToast(<b>Account is not Deleted</b>, 3000);
        }
    };
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
                        <h1 className="text-4xl font-bold">Profile</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <div className={`avatar flex flex-col justify-center items-center`}>
                                <div className={`w-28 rounded-full`}>
                                    {
                                        (imageNoError && user?.photoURL) ?
                                            <img src={updatedUserImg} onError={() => setImageNoError(false)} />
                                            :
                                            (user?.photoURL && !imageNoError) ?
                                                <img src={userDemoImg} alt="user" />
                                                :
                                                <img src={loginDemoImg} alt="login" />
                                    }
                                </div>
                            </div>
                            <h3 className='text-center font-extrabold text-2xl'>{updatedUserName}</h3>
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div
                                    className="collapse-title font-bold">
                                    Update Profile
                                </div>
                                <div
                                    className="peer-checked:pb-4 px-0 collapse-content md:text-base border-b-2 border-neutral-content">
                                    {/*  */}
                                    <form onSubmit={handleSubmit(data => submitForm(data))}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input className="input input-bordered" type="text" placeholder="full name"  {...register("fullName", { value: user.displayName })} />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Image URL</span>
                                            </label>
                                            <input className="input input-bordered" type="text" placeholder="image url" {...register("imageURL", { value: user.photoURL })} />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type="submit" className="btn btn-base-content btn-outline w-full">Update&nbsp;&nbsp;<FaCheckCircle className='text-xl text-indigo-500' /></button>
                                        </div>
                                    </form>
                                    {/*  */}
                                </div>
                            </div>

                            {
                                user?.emailVerified ? void (0) : <button onClick={emailVerifyFunc} className="btn btn-base-content btn-outline">Verify Email&nbsp;<HiBadgeCheck className='text-2xl text-blue-500' /></button>
                            }
                            <button onClick={passResetFunc} className="btn btn-base-content btn-outline">Reset Pass&nbsp;&nbsp;<FaRedoAlt className='text-lg text-orange-500' /></button>
                            <button onClick={deleteAccountFunc} className="btn btn-base-content btn-outline">Delete Account&nbsp;&nbsp;<FaRegTrashAlt className='text-lg text-red-500' /></button>
                            <button onClick={signOutFunc} className='btn glass bg-error hover:bg-error btn-sm text-xs'>Logout&nbsp;&nbsp;<FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
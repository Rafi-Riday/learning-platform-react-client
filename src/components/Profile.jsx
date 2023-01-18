import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaCheckCircle, FaRedoAlt, FaRegTrashAlt } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { AuthContext } from '../contexts/UseContext';
import loginDemoImg from '../img/login.jpg';
import userDemoImg from '../img/user.jpg';
import { errorToast, infoToast } from '../utilities/toasts';

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
            .then(() => {
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
            .then(() => {
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
            .then(() => {
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
                .then(() => {
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
        <div className='w-full px-5'>
            {/* header */}
            <h1 className="text-center text-4xl font-bold underline underline-offset-8">Profile</h1>
            <br />
            <div className='grid grid-cols-2 w-full'>
                <div className='col-span-2 sm:col-span-1 flex flex-col gap-5 justify-center items-center py-3 mx-5 rounded-lg'>
                    {/* photo */}
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
                    {/* name */}
                    <h3 className='text-center font-extrabold text-2xl'>{updatedUserName}</h3>
                    {/* mail */}
                    {
                        user?.email && <h3 className='text-center text-neutral-content'>{user?.email}</h3>
                    }
                </div>
                <div className='col-span-2 sm:col-span-1'>
                    <div className=''>
                        {/* header */}
                        <div className="pt-5 pb-3 text-xl text-center font-bold underline underline-offset-8">Update Profile</div>
                        {/* form */}
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
                    </div>
                    <hr className='my-8' />
                    <div className=''>
                        <div className='grid grid-cols-1 justify-center gap-3'>
                            {/* verify email */}
                            {
                                user?.emailVerified ? void (0) : <button onClick={emailVerifyFunc} className="btn btn-base-content btn-outline">Verify Email&nbsp;<HiBadgeCheck className='text-2xl text-blue-500' /></button>
                            }
                            {/* options */}
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
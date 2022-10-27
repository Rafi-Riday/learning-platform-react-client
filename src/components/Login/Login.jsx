import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
// ***
import { useForm } from 'react-hook-form';
import { errorToast, infoToast } from '../../utilities/toasts';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signInUser, signInGoogle, signInGithub } = useContext(AuthContext);
    // ***
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [passVisible, setPassVisible] = useState(false);

    const googleSignIn = () => {
        signInGoogle()
            .then(res => {
                const { user } = res;
                console.log(user);
                infoToast(<b>Successfully Logged in</b>, 1000);
                navigate(from, { replace: true });
            })
            .catch(err => {
                errorToast(<b>{err.message}</b>, 5000);
            })
    };

    const githubSignIn = () => {
        signInGithub()
            .then(res => {
                const { user } = res;
                console.log(user);
                infoToast(<b>Successfully Logged in</b>, 1000);
                navigate(from, { replace: true });
            })
            .catch(err => {
                errorToast(<b>{err.message}</b>, 5000);
            })
    };

    const submitForm = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(res => {
                const { user } = res;
                console.log(user);
                infoToast(<b>Successfully Logged in</b>, 1000);
                navigate(from, { replace: true });
            })
            .catch(err => {
                const msg = err.message.includes('Firebase:') ? err.message.split('Firebase:')[1] : void (0);
                errorToast(<b>{msg}</b>, 5000);
            })
    };

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <form onSubmit={handleSubmit(data => submitForm(data))}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input className="input input-bordered" type="email" placeholder="email" {...register("email", { required: true })} />
                                    {
                                        errors.email?.type === 'required' && <p className='text-error px-2 mt-2' role="alert">Email is required</p>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex gap-2'>
                                        <input className="input input-bordered" type={passVisible ? "text" : "password"} placeholder="password" {...register("password", { required: true, minLength: 6 })} />
                                        <div onClick={() => setPassVisible(!passVisible)} className='btn btn-ghost text-lg'>
                                            {passVisible ? <FaEyeSlash /> : <FaEye />}
                                        </div>
                                    </div>
                                    {
                                        errors.password?.type === 'required' && <p className='text-error px-2 mt-2' role="alert">Password is required</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <p className='text-error px-2 mt-2' role="alert">Password length is less than 6 </p>
                                    }
                                    <label className="label">
                                        <Link to='/register' className="label-text-alt link link-hover">No account? <u>Register</u></Link>
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-secondary" type="submit" />
                                </div>
                            </form>
                            <span className='w-full flex items-center justify-center text-base-content'><span className='-mt-4'>_________</span>&nbsp;<span>Or</span>&nbsp;<span className='-mt-4'>_________</span></span>
                            <button onClick={googleSignIn} className="btn btn-base-content btn-outline"><FcGoogle className='text-xl' />&nbsp;&nbsp;&nbsp;Log In with Google</button>
                            <button onClick={githubSignIn} className="btn btn-base-content btn-outline"><FaGithub className='text-xl' />&nbsp;&nbsp;&nbsp;Log In with GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
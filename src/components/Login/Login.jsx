import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
// ***
import { useForm } from 'react-hook-form';
import { errorToast, infoToast } from '../../utilities/toasts';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signInUser, signInGoogle, signInGithub, resetPass } = useContext(AuthContext);
    // ***
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [passVisible, setPassVisible] = useState(false);

    const googleSignIn = () => {
        signInGoogle()
            .then(res => {
                const { user } = res;

                infoToast(<b>Successfully Logged in</b>, 1000);
                navigate(from, { replace: true });
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };

    const githubSignIn = () => {
        signInGithub()
            .then(res => {
                const { user } = res;

                infoToast(<b>Successfully Logged in</b>, 1000);
                navigate(from, { replace: true });
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };

    const submitForm = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(res => {
                const { user } = res;

                infoToast(<b>Successfully Logged in</b>, 1000);
                navigate(from, { replace: true });
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };

    const [userEmail, setUserEmail] = useState('');
    const resetPassFunc = email => {
        resetPass(email)
            .then(() => {
                infoToast(<b>Reset Email sent<br />Please check your inbox & spam</b>, 3000);
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 3000);
            })
    };

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <form onSubmit={handleSubmit(data => submitForm(data))}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onKeyUp={e => setUserEmail(e.target.value)} className="input input-bordered" type="email" placeholder="email" {...register("email", { required: true })} />
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
                                    </label>
                                    {
                                        (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(userEmail) &&
                                        <label className="label">
                                            <Link onClick={() => resetPassFunc(userEmail)} className="label-text-alt link link-hover">Forgot password?<br />Reset password for this email</Link>
                                        </label>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-secondary" type="submit" />
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <button onClick={googleSignIn} className="btn btn-base-content btn-outline"><FcGoogle className='text-xl' />&nbsp;&nbsp;&nbsp;Continue with Google</button>
                            <button onClick={githubSignIn} className="btn btn-base-content btn-outline"><FaGithub className='text-xl' />&nbsp;&nbsp;&nbsp;Continue with GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
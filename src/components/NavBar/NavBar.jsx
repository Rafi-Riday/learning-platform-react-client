import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaArrowRight, FaUserAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { AuthContext, NavBarOpenContext } from '../../contexts/UseContext';
import { errorToast, infoToast } from '../../utilities/toasts';
import userDemoImg from '../../img/user.jpg';
import loginDemoImg from '../../img/login.jpg';

const NavBar = () => {
    const { user, signOutUser, resetPass } = useContext(AuthContext);
    const navigate = useNavigate();
    const signOutFunc = () => {
        signOutUser()
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 5000);
            })
    };
    const resetPassFunc = email => {
        resetPass(email)
            .then(() => {
                infoToast(<b>Reset Email sent<br />Please check your inbox & spam</b>, 3000);
            })
            .catch(err => {
                errorToast(<b>{err.code.slice(5)}</b>, 3000);
            })
    };

    // theme
    const { navBarY, setNavBarY, darkTheme, setDarkTheme, extraThemeVar, } = useContext(NavBarOpenContext);
    // scrolling effects
    const [navLink, setNavLink] = useState(false);
    const [scrollingY, setScrollingY] = useState({ count: window.scrollY, direction: null });
    useEffect(() => {
        scrollingY.direction && (setNavBarY(scrollingY.direction), setNavLink(false));
    }, [scrollingY]);
    window.onscroll = () => {
        scrollingY.count > window.scrollY ? setScrollingY({ count: window.scrollY, direction: 'top-0', }) : setScrollingY({ count: window.scrollY, direction: '-top-24', });
    };
    const activeLink = 'btn btn-sm btn-outline text-neutral-content hover:text-neutral-content hover:bg-neutral hover:border-neutral-content';
    const notActiveLink = 'btn btn-sm';
    // user image
    const [imageNoError, setImageNoError] = useState(true);
    return (
        <div className={`${navBarY} transition-all duration-[400ms] sm:duration-500 z-50 fixed w-full`}>
            <div className='bg-neutral px-6 py-4 flex items-center justify-between'>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-11 h-11' src="/logo.png" alt="logo" />
                    <Link to='/home' className='btn btn-ghost btn-sm text-xl font-bold'>Learn CSE</Link>
                </div>
                <div onMouseEnter={() => setNavLink(true)} onMouseLeave={() => setNavLink(false)} className={`w-44 sm:w-fit bg-neutral sm:bg-transparent p-6 pt-10 sm:p-0 flex flex-col sm:flex-row justify-center items-center gap-5 absolute sm:relative ${navLink ? 'top-14' : '-top-72'} sm:top-0 right-4 sm:right-0 rounded-b-xl transition-all duration-300 -z-10 sm:z-0`}>
                    <NavLink className={({ isActive }) => isActive ? ((document.title = 'Learn CSE | Course'), activeLink) : notActiveLink} to='/course'>Course</NavLink>
                    <NavLink className={({ isActive }) => isActive ? ((document.title = 'Learn CSE | FAQ'), activeLink) : notActiveLink} to='/faq'>FAQ</NavLink>
                    <NavLink className={({ isActive }) => isActive ? ((document.title = 'Learn CSE | Blog'), activeLink) : notActiveLink} to='/blog'>Blog</NavLink>
                    <div className="dropdown dropdown-end">
                        <div className="tooltip tooltip-left tooltip-accent" data-tip={(user?.uid && user?.displayName) ? user?.displayName.split(' ')[0] : 'Login?'}>
                            <label tabIndex={0}>
                                <div className={`avatar ${user?.uid && 'online'}`}>
                                    <div className={`w-9 cursor-pointer rounded-full`}>
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
                            </label>
                        </div>
                        <div tabIndex={0} className="dropdown-content menu p-4 mt-2 border bg-neutral rounded-box w-52 flex flex-col gap-4 items-center">
                            {
                                user?.displayName && <div>{user?.displayName}</div>
                            }
                            <div className='flex flex-col gap-2 w-32'>
                                <label className='btn glass btn-sm' htmlFor="theme">Theme&nbsp;
                                    <label className="swap swap-rotate">
                                        <input onInput={() => setDarkTheme(!darkTheme)} id='theme' type="checkbox" />
                                        <svg className={`${extraThemeVar ? 'swap-on' : 'swap-off'} fill-current w-5 h-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                        <svg className={`${extraThemeVar ? 'swap-off' : 'swap-on'} fill-current w-5 h-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                    </label>
                                </label>
                                {
                                    user?.uid ?
                                        <>
                                            <NavLink className='btn glass btn-sm text-xs' to='/profile'>Profile&nbsp;&nbsp;<FaUserAlt /></NavLink>
                                            <button onClick={signOutFunc} className='btn glass bg-error hover:bg-error btn-sm text-xs'>Logout&nbsp;&nbsp;<FaArrowRight /></button>
                                        </>
                                        :
                                        <>
                                            <NavLink className={({ isActive }) => isActive ? ((document.title = 'Learn CSE | Register'), activeLink) : notActiveLink} to='/register'>Register</NavLink>
                                            <NavLink className={({ isActive }) => isActive ? ((document.title = 'Learn CSE | Login'), activeLink) : notActiveLink} to='/login'>Login</NavLink>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseLeave={() => setNavLink(false)} className='text-2xl text-white sm:hidden'>
                    {
                        navLink ? <HiX className='text-3xl' onClick={() => setNavLink(!navLink)} /> : <FaBars onClick={() => setNavLink(!navLink)} />
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { AuthContext, NavBarOpenContext } from '../../contexts/UseContext';
import { infoToast } from '../../utilities/toasts';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const signOutFunc = () => {
        signOutUser()
            .then(() => {
                infoToast(<b>Signed Out !!</b>, 2000);
            })
            .catch(err => {
                errorToast(<b>{err.message}</b>, 5000);
            })
    };
    const { navBarY, setNavBarY } = useContext(NavBarOpenContext);
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
    return (
        <div className={`${navBarY} transition-all duration-[400ms] sm:duration-500 z-50 fixed w-full`}>
            <div className='bg-neutral px-6 py-4 flex items-center justify-between'>
                <div className='flex items-center justify-center gap-5'>
                    {/* <img className='w-11 h-11' src="/logo.png" alt="logo" /> */}
                    <h3 className='text-lg font-bold'>Edu CSE</h3>
                </div>
                <div onMouseEnter={() => setNavLink(true)} onMouseLeave={() => setNavLink(false)} className={`bg-neutral p-6 pt-10 sm:p-0 flex flex-col sm:flex-row justify-center gap-5 absolute sm:relative ${navLink ? 'top-10' : '-top-40'} sm:top-0 right-4 sm:right-0 rounded-b-xl transition-all duration-300 -z-10 sm:z-0`}>
                    <NavLink className={({ isActive }) => isActive ? activeLink : notActiveLink} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? activeLink : notActiveLink} to='/orders'>Orders</NavLink>
                    {
                        user?.uid ?
                            <button onClick={signOutFunc} className='btn btn-error btn-sm'>Logout</button>
                            :
                            <>
                                <NavLink className={({ isActive }) => isActive ? activeLink : notActiveLink} to='/register'>Register</NavLink>
                                <NavLink className={({ isActive }) => isActive ? activeLink : notActiveLink} to='/login'>Login</NavLink>
                            </>
                    }
                </div>
                <div onMouseLeave={() => setNavLink(false)} className='text-2xl text-white sm:hidden'>
                    {
                        navLink ? <HiX onClick={() => setNavLink(!navLink)} /> : <FaBars onClick={() => setNavLink(!navLink)} />
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import { errorToast } from '../../utilities/toasts';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const signOutFunc = () => {
        signOutUser
            .then(() => {
                console.info('Signed Out');
            })
            .catch(err => {
                errorToast(<b>{err.message}</b>, 5000);
            })
    };
    return (
        <div className='p-3'>
            <nav className="flex w-full component-preview p-4 items-center justify-between gap-2 font-sans bg-slate-600 rounded-xl">
                <div className='flex items-center justify-center gap-2'>
                    <h2 className='text-3xl font-extrabold mx-5 normal-case'>Header</h2>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <NavLink className={({ isActive }) => `btn btn-info ${isActive || 'btn-outline'} btn-sm rounded`} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => `btn btn-info ${isActive || 'btn-outline'} btn-sm rounded`} to='/orders'>Orders</NavLink>
                    {
                        user?.uid ?
                            <button onClick={signOutUser} className='btn btn-error btn-sm rounded'>Logout</button>
                            :
                            <>
                                <NavLink className={({ isActive }) => `btn btn-info ${isActive || 'btn-outline'} btn-sm rounded`} to='/register'>Register</NavLink>
                                <NavLink className={({ isActive }) => `btn btn-info ${isActive || 'btn-outline'} btn-sm rounded`} to='/login'>Login</NavLink>
                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React, { useContext, useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContext';
import { errorToast } from '../utilities/toasts';

const Footer = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch(`https://10-learning-platform-assignment-server.vercel.app/course-minified`)
            .then(res => res.json())
            .then(data => setCourseData(data))
            .catch(err => {
                errorToast(<b>Data Fetching Error</b>, 3000);
            })
    }, []);

    const navigate = useNavigate();
    const signOutFunc = () => {
        signOutUser()
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                errorToast(<b>{err?.code?.slice(5)}</b>, 500);
            })
    };
    return (
        <>
            <footer className="footer p-10 bg-base-300 text-base-content border-t">
                <div>
                    <span className="footer-title">Courses</span>
                    {
                        courseData?.map(c => <Link key={c.course} to={`/course/${c.course}`} className="link link-hover">{c.name}</Link>)
                    }
                </div>
                <div>
                    <span className="footer-title">Site Info</span>
                    <Link to='/home' className="link link-hover">Home</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                    <Link to='/faq' className="link link-hover">FAQ</Link>
                    <Link to='/terms-and-conditions' className="link link-hover">Terms & Conditions</Link>
                </div>
                <div>
                    <span className="footer-title">User</span>
                    {
                        user?.uid ?
                            <>
                                <Link to='/profile' className="link link-hover">Profile</Link>
                                <Link onClick={signOutFunc} className="link link-hover">Log Out</Link>
                            </>
                            :
                            <>
                                <Link to='/login' className="link link-hover">Login</Link>
                                <Link to='/register' className="link link-hover">Register</Link>
                            </>
                    }
                    <Link to='/checkout' className="link link-hover">Checkout</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-300 text-base-content">
                <div className="items-center grid-flow-col">
                    <img className='w-16' src="/logo.png" alt="logo" />
                    <p><span className='text-lg font-bold'>Learn CSE</span><br />Providing reliable tech edu since 2012</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link>
                            <FaTwitter className='text-2xl' />
                        </Link>
                        <Link>
                            <FaYoutube className='text-2xl' />
                        </Link>
                        <Link>
                            <FaFacebookF className='text-2xl' />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

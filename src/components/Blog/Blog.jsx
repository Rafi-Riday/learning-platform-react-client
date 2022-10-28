import React from 'react';

const Blog = () => {

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Blog</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-sm shadow-neutral-content bg-base-200">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            {/*  */}
                            <div className="grid grid-cols-1 gap-4 md:gap-5">
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        What is <span className='text-indigo-500'>cors</span>?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        In <span className='text-sky-500'>ReactJS</span>, <span className='text-indigo-500'>Cross-Origin Resource Sharing (CORS)</span> refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the <u>frontend</u> and <u>backend</u> are at two different domains, we need <span className='text-indigo-500'>CORS</span> there.
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        Why <span className='text-orange-500'>firebase</span>? What options other than <span className='text-orange-500'>firebase</span> to implement authentication?
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        The <span className='text-orange-500'>Firebase</span> Realtime Database lets to build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                                        <hr className='my-4' />
                                        <span className='text-indigo-400'>Supabase</span> is another open source alternative to <span className='text-orange-500'>Firebase</span>, and the main difference is that it is a <span className='text-indigo-400'>SQL</span> database rather than <span className='text-green-500'>NoSQL</span>. Many users love it because it also offers real-time data, authentication for multiple services, file storage, and more.
                                        <hr className='my-4' />
                                        But <span className='text-orange-500'>firebase</span> offers you features such as analytics, databases, communication, crashes notification and etc. It allows you to move and concentrate on your customers. <span className='text-orange-500'>Firebase</span> is designed and scaled on Google resources, even with the largest apps. <span className='text-orange-500'>Firebase</span> products run well with Android and iOS.
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        The <span className='text-slate-500 font-semibold'>private route</span>
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        <span className='text-slate-500 font-semibold'>Private Routes</span> in <span className='text-slate-500 font-semibold'>React Router</span> (also called <span className='text-slate-500 font-semibold'>Protected Routes</span>) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is <span className='text-red-500'>authentication</span> in a <span className='text-slate-500 font-semibold'>React</span> application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). <span className='text-red-500'>Authorization</span> goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" className="peer" />
                                    <div
                                        className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                                        <span className='text-green-600'>Node.js</span>
                                    </div>
                                    <div
                                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                                        <span className='text-green-600'>Node.js</span> is composed of Google's V8 JavaScript engine, the libUV platform abstraction layer, and a core library that is written in JavaScript. Additionally, <span className='text-green-600'>Node.js</span> is based on the open web stack (HTML, CSS, and JS), and operates over the standard port 80.
                                        <hr className='my-4' />
                                        <span className='text-green-600'>Node.js</span> uses non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices. <span className='text-green-600'>Node.js</span> is a platform that fills a particular need, and understanding this is absolutely essential.
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
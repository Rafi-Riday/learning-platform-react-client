import React from 'react';

const TermsAndConditions = () => {
    document.title = 'Learn CSE | Terms and Conditions';

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col p-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Terms and Conditions</h1>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4 p-4 sm:p-8">
                            <span>
                                <span className='text-3xl relative top-3 font-extrabold mr-0.5'>B</span>y using our products, you agree to our Terms and Conditions.
                                <br />
                                <br />
                                The Learn CSE Network is a set of related Internet sites and other applications for questions and answers (also referred to herein as the “Network”), owned and operated by Stack Exchange, Inc. (“Learn CSE”, “we” or “us”), a Delaware corporation. Learn CSE welcomes you to the Network, the largest community of developers in the world, and invites you to participate in the community by sharing knowledge with your peers and colleagues. Like all communities, we ask that you participate in a manner that respects your fellow community members. To that end, we provide you with these terms of service to advise you of the legal obligations you assume when you engage with the Learn CSE community or otherwise access or use the public Network or any services provided on the public Network (collectively, “Services”). These terms govern the use of the public Network (the “Public Network Terms”).
                                <br />
                                <br />
                                To the extent you are accessing or using our other products on behalf of a Company or Team, including without limitation by registering for an account on behalf of a Company or Team, your use of those products (such as Learn CSE for Teams or Learn CSE Business) is governed by their relevant Terms and Conditions.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
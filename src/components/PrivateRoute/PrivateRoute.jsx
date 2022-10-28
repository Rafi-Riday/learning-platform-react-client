import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import { Bars } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <div className="hero h-full bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body flex-row">
                        <Bars
                            height="100"
                            width="100"
                            color="#0088f0"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        <Bars
                            height="100"
                            width="100"
                            color="#0088f0"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
            </div>
        </div>;
    }
    if (user?.uid) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace />
    );
};

export default PrivateRoute;
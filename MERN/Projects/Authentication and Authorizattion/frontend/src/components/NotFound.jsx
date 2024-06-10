// NotFoundPage.js

import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
                <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NotFound;

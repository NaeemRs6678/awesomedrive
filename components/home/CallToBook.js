import React from 'react';

const CallToBook = () => {
    return (
        <section className='relative text-white'>
        <img src='/images/safe-driver-dubai.jpg' className='w-full h-full absolute object-cover left-0 right-0' />
            <div className="container relative mx-auto text-center py-8 px-6">
                <div className='flex flex-col items-center justify-center h-full max-w-lg rounded mx-auto px-10 py-5 bg-[#000000a1]'>
                <h2 className="text-2xl font-bold mb-3">CALL US TO BOOK A SAFE DRIVER</h2>
                <a href="tel:+971528948931" className="text-xl">
                    +971 52 894 8931
                </a>
                <p className="mt-3">The operator will call back immediately and Confirm the booking with the cost of travel</p>
                <a href="/discover-more" className="mt-4 inline-block bg-btn text-white py-2 px-4 rounded transition-colors">
                    Discover More +
                </a>
                </div>
            </div>
        </section>
    );
};

export default CallToBook;

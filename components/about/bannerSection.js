import React from 'react';

const BannerSection = ({ lable, title, text, imageUrl, reverse }) => {
    return (
        <section className='relative h-[450px] overflow-hidden'>
            <img src={imageUrl} alt={title} className="w-full  absolute object-cover" />
            <div class={` ${reverse ? 'right-0 Client-ReviewsC1' : 'left-0 Client-ReviewsC'} w-2/3 h-full Client-ReviewsC absolute`}></div>
            <div className="container relative w-full px-4 mx-auto 2xl:px-20 lg:px-6 py-10">
                <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center py-12`}>
                    <div className="w-1/2 text-white px-4">
                        <h2 className="text-lg font-bold redClr mb-2">{lable}</h2>
                        <h2 className="md:text-3xl text-2xl mb-3">{title}</h2>
                        <p className="text-lg ">{text}</p>
                    </div>
                    <div className="w-1/2">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;

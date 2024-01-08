import AboutBanner from '@/components/common/AboutBanner';
import { termsBanner, termsContent, termsList } from '@/helper/about';
import React from 'react';

const index = () => {
    return (
        <>
            <AboutBanner
                banner={termsBanner.banner}
                title={termsBanner.title}
                Link1={termsBanner.Link1}
                Link2={termsBanner.Link2}
            />
            <section className="relative">
                <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6 py-8 pb-0">
                    <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6 py-10">
                            <h2 className="md:text-3xl lg:text-4xl mb-3 mx-auto text-2xl text-gray-700">
                                {termsContent.heading2}
                            </h2>
                            <p className="text-sm text-gray-900 mb-3">
                                {termsContent.paragrph3}
                                <br />
                                <br />
                                Definitions:
                            </p>
                            <p className="text-sm text-gray-900 mb-3">
                                {termsContent.paragrph4}
                            </p>
                             <p className="text-sm text-gray-900 mb-3">
                                {termsContent.paragrph4}
                                <br />
                                <br />
                                CONDITIONS:
                            </p>
                        <ul className='list-disc pl-5'>
                            {termsList.map((list, key) =>
                                <li key={key} className="leading-relaxed mb-2 text-base">{list.content}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );
};

export default index;

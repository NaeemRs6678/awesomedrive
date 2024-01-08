import BannerSection from '@/components/about/bannerSection'
import AboutBanner from '@/components/common/AboutBanner'
import Faqs from '@/components/common/Faqs'
import { aboutUsBanner, faqsAbout, faqsAboutHeading, sections1, sections2, sections3 } from '@/helper/about'
import { GetOurSober1 } from '@/helper/home'
import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <>
      <AboutBanner
        banner={aboutUsBanner.banner}
        title={aboutUsBanner.title}
        Link1={aboutUsBanner.Link1}
        Link2={aboutUsBanner.Link2}
      />
      <section className="py-10">
        <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6 py-8">
          <div className="w-full flex gap-7">
            <div className="w-3/5">
              <h3 className="text-base font-bold redClr mb-3">
                {GetOurSober1.lable}
              </h3>
              <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                {GetOurSober1.heading1}
              </h2>
              <p className="text-gray-600 mb-3">
                {GetOurSober1.paragrph1}
              </p>
              <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                {GetOurSober1.heading2}
              </h2>
              <p className="text-gray-600 mb-3">
                {GetOurSober1.paragrph2}
              </p>
            </div>
            <div className="w-2/5">
              <img src={GetOurSober1.bannerImag1} alt="images" className='' />
            </div>
          </div>
        </div>
      </section>
      <BannerSection
        imageUrl={sections1.banner}
        title={sections1.subtitle}
        text={sections1.description}
        lable={sections1.title} />
      <BannerSection
        reverse
        imageUrl={sections2.banner}
        title={sections2.subtitle}
        text={sections2.description}
        lable={sections2.title} />
      <BannerSection
        imageUrl={sections3.banner}
        title={sections3.subtitle}
        text={sections3.description}
        lable={sections3.title} />

      <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6 py-8">
        <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-black lg:mb-5 md:mb-3 mb-2">
          {faqsAboutHeading.heading}
        </h1>
        <Faqs icon2="ph:plus-fill" icon1="ph:minus-fill" data={faqsAbout} />
      </div>
    </>
  )
}

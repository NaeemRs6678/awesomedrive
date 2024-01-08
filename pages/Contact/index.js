import AboutBanner from '@/components/common/AboutBanner'
import BookingForm from '@/components/common/BookingForm'
import { conatctUs, conatctUsBanner } from '@/helper/contact'
import { constant } from '@/helper/home'
export default function index() {
  return (
    <>
   <AboutBanner 
  banner={conatctUsBanner.banner} 
  title={conatctUsBanner.title} 
  Link1={conatctUsBanner.Link1} 
  Link2={conatctUsBanner.Link2} 
/>
      <section className="relative">
        <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6 text-center py-8 pb-0">
          <div className="mb-8 lg:max-w-4xl mx-auto">
          <h2 className="md:text-3xl lg:text-4xl mb-3 mx-auto text-center text-2xl text-gray-700">
              {conatctUs.title}
            </h2>
            <p className="text-sm text-gray-900">
              {conatctUs.subtitle}
            </p>
            <p className="text-sm text-gray-900">
              {conatctUs.description}
            </p>
          </div>
        </div>
        <div className="container w-full  px-4 mx-auto 2xl:px-20 lg:px-6 relative pt-5 py-10">
          <div className="w-3/5 mx-auto">
            <div className=" p-6 bg-green shadow-md">
              <h2 className="text-2xl font-semibold redClr mb-3">{constant.booking}</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

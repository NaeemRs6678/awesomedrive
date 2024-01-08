

import CallToBook from "@/components/home/CallToBook";
import ServiceCard from "@/components/home/ServiceCard";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import BookingForm from "@/components/home/HomeBanner";
import WellCome from "@/components/home/wellCome";
function index() {
  return (
    <>
      <BookingForm />
      <WellCome />
      <CallToBook />
      <ServiceCard />
     <Services /> 
      <Testimonials />
     
    </>
  );
}

export default index;

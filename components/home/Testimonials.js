import React from 'react';

const testimon = [
  {
    text: "They offer the best driver service in the town. Professional designated drivers and awesome customer service! I highly recommend their service. Thank you for keeping UAE roads safe.",
    author: "Taimoor Khurshid",
    location: "Dubai, UAE"
  },
  {
    text: "Very professional safe driver service company in Dubai! Always on time, very competitive price and very nice driver. See you soon!!!!",
    author: "Royal Continental Suites",
    location: "Dubai, UAE"
  },
  {
    text: "Mr. Zulficar and his team are really Awesome! The service is World Class. I have used them multiple times. Every time on time and very professional! Highly recommended!",
    author: "Cobus Foster",
    location: "Dubai, UAE"
  }
];


const Testimonials = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimon.map((testimonial, index) => (
            <div key={index} className="text-black p-6 rounded-lg relative">
              <img src='/images/testimonials.png' className='absolute w-36 left-0 top-0' />
              <div className='relative mt-7'>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

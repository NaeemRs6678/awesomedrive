import { servicesCardData } from '@/helper/home';


const Services = () => {
  return (
    <section className="text-white bg-green">
      <div className="container w-full px-4 mx-auto 2xl:px-20 py-10 lg:px-6">
        <h2 className="text-3xl font-bold redClr mb-8">
          HIRE A DRIVER IN DUBAI, CHAUFFEUR SERVICE
          <div className='w-24 bg-btn h-1 rounded-0 mt-2'></div>
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesCardData.map((service, index) => (
            <div key={index} className='bg-[#00000037] lg:p-8 p-5 rounded-md'>
              <div className="flex rounded-lg h-full flex-col">
                <div className="flex flex-col mb-3">
                  <h2 className="text-white md:text-2xl mb-2 text-lg title-font font-medium">{service.category}</h2>
                  <ul className='list-disc pl-4'>
                    <li className="leading-relaxed text-base">{service.items1}</li>
                    <li className="leading-relaxed text-base">{service.items2}</li>
                    <li className="leading-relaxed text-base">{service.items3}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

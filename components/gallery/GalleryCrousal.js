import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

function GalleryCrousal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }
  
    const LogoCarousal = [
        {
          Image: "/images/tvroom.png",
       
        },
        {
          Image: "/images/tiling.png",
       
        },
        {
          Image: "/images/intr_ds.png",
      
        },
        {
          Image: "/images/04.jpg",
         
        },
        {
          Image: "/images/in_ds.jpg",
      
        },
        {
          Image: "/images/in_ds.png",
        
        },
        {
          Image: "/images/07.jpg",
        
        },
        {
          Image: "/images/08.jpg",
          
        },
        {
          Image: "/images/09.jpg",
         
        },
      ];

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    nextArrow: <FontAwesomeIcon icon={faChevronRight} className="w-6 " />,
    prevArrow:  <FontAwesomeIcon icon={faChevronLeft} className="w-6 " />,
  };
 
  return (
    <div>
      {isOpen && (
        <div className="fixed  inset-0 z-[9999] overflow-y-auto bg-[#3a3939f1]">
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="z-50 bg-transparent rounded-lg 2xl:max-w-4xl">
              <div className="container p-4 pb-6 mx-auto modal-body">
                <div className="flex items-center justify-end ">
                  <button
                    className="absolute px-4 py-2 mr-2 text-white bg-transparent rounded top-20 right-20 hover:bg-transparent"
                    onClick={closeModal}
                  >
                 <FontAwesomeIcon icon={faXmark} className="w-6 !z-50" />
                  </button>
                </div>
                <Slider
                  className="grid grid-cols-1 gallery-careosal w-[80%] h-[90vh] mx-auto custom "
                  {...settings}
                >
                  {LogoCarousal.map((LogoCarousal, idx) => {
                    return (
                      <>
                        <div className="p-3 m-3 ">
                          <img
                            alt="logos"
                            className="w-full h-full"
                            src={LogoCarousal.Image}
                          />
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryCrousal;

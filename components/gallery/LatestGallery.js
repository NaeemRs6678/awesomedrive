import React, { useState } from "react";
import GalleryCrousal from "./GalleryCrousal";

export default function LatestGallery() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const cards = [
    {
      img: "/images/tvroom.png",
      name: "Interior Designe",
      status: "Home Maintenance",
    },
    {
      img: "/images/tiling.png",
      name: "Tiles Repair",
      status: "Home Maintenance",
    },
    {
      img: "/images/intr_ds.png",
      name: "Interior Design",
      status: "Home Maintenance",
    },
    {
      img: "/images/04.jpg",
      name: "Flooring, Home Maintenance",
      status: "Drywall Insulation",
    },
    {
      img: "/images/in_ds.jpg",
      name: "Design, Painting",
      status: "Home Maintenance",
    },
    {
      img: "/images/in_ds.png",
      name: "Interior Design",
      status: "Design & Home Maintenance",
    },
    {
      img: "/images/07.jpg",
      name: "Flooring, Home Maintenance",
      status: "Drywall Insulation",
    },
    {
      img: "/images/08.jpg",
      name: "AC, Repairing",
      status: "AC(Air Condition) & Repairing",
    },
    {
      img: "/images/09.jpg",
      name: "Plumbing and Repairing",
      status: "Plumbing & Repairing",
    },
  ];
  return (
    <>
    <section className="py-6 lg:py-20 md:py-10 ">
      <div className="container w-full px-4 mx-auto 2xl:px-20 lg:px-62xl:px-20 lg:px-6">
        <div className="grid grid-cols-1 gap-8 bg-white lg:grid-cols-3 sm:grid-cols-2">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative w-full overflow-hidden md:h-[326px] h-[250px] bg-no-repeat bg-cover group">
                  <img
                    src={cards.img}
                    className="w-full h-full"
                    alt="Louvre"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full h-[80%] opacity-0 group-hover:opacity-100 overflow-hidden text-center p-0  group-hover:p-5 yellow transition duration-300 ease-in-out bg-gradient-to-r bg-[#0000008a] group-hover:h-full"
                    style={{ transition: "all .3s ease-in-out" }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full border-white/[0.3] border">
                      <div className="">
                        <h4 className="txet-[#d8232a]">{cards.name}</h4>
                        <a 
                          onClick={openModal}
                         className="text-2xl font-medium text-white cursor-pointer hover:yellow ">
                          {cards.status}
                        </a>
                        <div className="w-12 pt-4 mx-auto border-b-4 border-[#f98f04]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
      <GalleryCrousal isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
}

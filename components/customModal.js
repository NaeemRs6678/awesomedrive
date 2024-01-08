import Link from "next/link";
import { useState } from "react";
import React from "react";
import { faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Image from "next/image";
function CustomModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }
  const router = useRouter();
  const returnNumber = () => {
    switch (router.locale) {
      case "en":
        return "+971524052485";
      default:
        return "+971524052485";
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3a3939f1]">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative z-50 p-8 bg-white rounded-lg shadow-lg">
              <div className="p-4 pb-6 modal-body">
                <div className="flex items-center justify-end ">
                  <button
                    className="absolute top-0 right-0 px-4 py-2 mr-2 bg-transparent rounded hover:bg-transparent"
                    onClick={closeModal}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="w-4 text-black"
                    />
                  </button>
                </div>

                <div className="relative w-4 h-8 md:w-10 md:h-10">
                  <Link
                    target={"_blank"}
                    href={`https://api.whatsapp.com/send?phone=${returnNumber()}&text=Hello! 👋🏼 What can we do for you?`}
                    className="flex items-center mb-3 text-lg font-medium leading-normal text-gray-800 lg:mb-4 whitespace-nowrap"
                    id="exampleModalSmLabel"
                  >
                    <div className="relative w-4 h-8 md:w-10 md:h-10">
                      <Image
                        className=""
                        alt="whatsapp"
                        width={10}
                        height={10}
                        src="/images/whatsapp.svg"
                      />
                    </div>
                  </Link>
                </div>
                <Link
                  href={`tel:${returnNumber()}`}
                  className="flex items-center text-lg font-medium leading-normal text-gray-800 whitespace-nowrap"
                  id="exampleModalSmLabel"
                >
                  <div className="">
                    <FontAwesomeIcon icon={faPhone} className="w-6" />
                  </div>
                  <span className="ml-6 mr-2 change_direction ">{`  ${returnNumber()}`}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomModal;

"use client";
import { CarCardProp } from "@/types";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { generateCarImageUrl } from "@/Utils";

interface CardDetailsProps {
  car: CarCardProp;
  isOpen: boolean;
  closeModel: () => void;
}

const CardDetails = ({ car, isOpen, closeModel }:CardDetailsProps) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModel}
    >
      <TransitionChild
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-100"
      >
        <div className="fixed inset-0 z-10  overflow-y-auto bg-black bg-opacity-25   ">
          <div className="flex min-h-full items-center justify-center p-4 text-center  ">
            <DialogPanel
              transition
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5"
            >
              <button
                type="button"
                onClick={closeModel}
                className=" absolute top-2 right-2 z-10 w-fit p-2  bg-primary-blue-100 rounded-full"
              >
                <Image
                  src="/close.svg"
                  alt="close"
                  width={20}
                  height={20}
                  className=" object-contain"
                />
              </button>

              <div className="flex-1 flex flex-col gap-3">
                <div className=" relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className=" object-contain"
                  />
                </div>

                <div className="flex gap-3">
                  <div className="flex-1 relative bg-primary-blue-100 w-full h-24 rounded-lg ">
                    <Image
                      src="/hero.png"
                      alt="car model"
                      fill
                      priority
                      className=" object-contain"
                    />
                  </div>
                  <div className="flex-1 relative bg-primary-blue-100 w-full h-24 rounded-lg ">
                    <Image
                      src="/hero.png"
                      alt="car model"
                      fill
                      priority
                      className=" object-contain"
                    />
                  </div>
                  <div className="flex-1 relative bg-primary-blue-100 w-full h-24 rounded-lg ">
                    <Image
                      src="/hero.png"
                      alt="car model"
                      fill
                      priority
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make}  {car.model}
                  </h2>

                  <div className=" mt-3 flex flex-wrap gap-4 ">
                    {Object.entries(car).map(([key,value]) => (

                        <div className="flex justify-between gap-5 w-full text-right" key={key}>
                          <h4 className="text-gray capitalize ">{key.split("_").join(" ")}</h4>
                          <p className="text-black-100 font-bold">{value}</p>
                          
                        </div>

                    ))}
                  </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  );
};

export default CardDetails;

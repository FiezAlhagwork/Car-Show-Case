"use client";
import { CustomFilterProps } from "@/types";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { updateSearchParams } from "@/Utils";

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className=" w-fit ">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value)
        }}
      >
        <div className=" relative w-fit z-10">
          <ListboxButton className="custom-filter__btn ">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron  up down"
              width={20}
              height={20}
              className=" object-contain"
            />
          </ListboxButton>

          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              anchor="bottom"
              transition
              className={clsx(`custom-filter__options`)}
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className=" relative  w-full flex cursor-default items-center gap-2 rounded-lg py-2 px-4 select-none data-[focus]:bg-primary-blue data-[focus]:text-white text-gray-900 "
                >
                  <span className="text-sm/6 ">{option.title}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

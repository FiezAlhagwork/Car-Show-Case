"use client";
import { SearchManufacturerProps } from "@/types";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { manufacturers } from "@/constants";
import clsx from "clsx";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");


  const filteredManuFacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox
        value={selected}
        onChange={setSelected}
        onClose={() => setQuery("")}
      >
        <div className="relative w-full">
          <ComboboxButton className=" absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
          />

          <ComboboxOptions
            anchor="bottom"
            transition
            className={clsx(
              "w-[var(--input-width)] bg-white rounded-xl border border-white/5 bg-white/5  p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
              "transition duration-100 ease-in relative z-10 "
            )}
          >
            {filteredManuFacturers.length === 0 && query !== "" ? (
              <ComboboxOption
                value={query}
                className="search-manufacturer__option"
              >
              </ComboboxOption>
            ) : (
              filteredManuFacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className=" relative search-manufacturer__option  data-[focus]:bg-primary-blue data-[focus]:text-white text-gray-900 bg-white "
                >
                  <Image
                    src="/arrow-down.svg"
                    alt="arrow_down"
                    width={10}
                    height={10}
                    className="invisible size-4 fill-white group-data-[selected]:visible"
                  />
                  {item}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;


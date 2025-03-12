"use client";
import { SearchManufacturer } from "./index";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
    />
  </button>
);

const SearchBar = ({setManuFacturer,setModel}:SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [SearchModel, setSearchModel] = useState("");
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(searchManufacturer === "" && SearchModel === "") {
      alert("please fill in the search bar ")
    }
    setManuFacturer(searchManufacturer)
    setModel(SearchModel) 
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
        />

        <input
          type="text"
          name="model"
          value={SearchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;

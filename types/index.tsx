import { Dispatch, MouseEventHandler, SetStateAction } from "react";

type CustomButtonType = "button" | "submit" | "reset";
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: CustomButtonType;
  textStyle?:string
  righIcon?:string
  isDisabled?:boolean
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
  options:OptionsProps[]
  setFilter: Dispatch<SetStateAction<string>>
}

export interface OptionsProps {
  title:string,
  value:string
}

export interface CarCardProp {
  city_mpg: number;
  class : string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps  {
  manufacturer:string
  year:string,
  fuel:string,
  limit:number,
  model:string 
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ShowMoreprops {
  pageNumber:number,
  IsNext:boolean
  setLimit:(limit:number) => void
}


export interface SearchBarProps {
    setManuFacturer:(manuFacturer:string) => void
    setModel:(model:string) => void
  
  }
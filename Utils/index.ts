import { CarCardProp, FilterProps } from "@/types";

const url =
  "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=17";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7fb6472958mshc9683c67597cf87p10f049jsn8ab13812564d",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filter:FilterProps) {
  const {manufacturer ,year ,limit , model ,fuel } = filter
  const headers = {
    "x-rapidapi-key": "7fb6472958mshc9683c67597cf87p10f049jsn8ab13812564d",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type , value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};




export const generateCarImageUrl = (car: CarCardProp, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer',"");
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  if (angle && angle !== 'undefined') {
    url.searchParams.append('angle', angle);
  }

  return `${url}`;
} 

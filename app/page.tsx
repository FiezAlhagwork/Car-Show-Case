"use client";
import { fetchCars } from "@/Utils";
import { Hero, CustomFilter, SearchBar, CarCard } from "../components";
import Image from "next/image";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState<string | unknown>("");

  //search states
  const [manuFacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [fuel, setfuel] = useState("");
  const [year, setYear] = useState("2022");

  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manuFacturer || "",
        year: year || "2022",
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      console.log(allCars)
      console.log(manuFacturer, year, fuel , limit , model);

      setAllCars(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [year, fuel, manuFacturer, limit, model]);

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className=" overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManuFacturer={setManuFacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setfuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: any) => (
                <CarCard key={car.map} car={car} />
              ))}
            </div>

            {loading && (
              <div className=" mt-16 w-full flex-center">
                <Image
                  src="/tube-spinner.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className=" object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              IsNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops , no results</h2>
            {/* <p>{allCars.error}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}

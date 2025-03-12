"use client";

import { ShowMoreprops } from "@/types";
import CustomButton from "./CustomButton";
const ShowMore = ({ pageNumber, IsNext, setLimit }: ShowMoreprops) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!IsNext && (
        <CustomButton
          title="show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;

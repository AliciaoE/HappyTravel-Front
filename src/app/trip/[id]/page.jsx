"use client";
import { useParams } from "next/navigation";
import { getTripsById } from "@/services/";
import { useEffect, useState } from "react";
import SkeletonDetails from "@/components/placeholder/SkeletonDetail";
import ModalCancel from  "@/components/modal/ModalCancelTrip";
import Btn from "@/components/Btn";
export default function TripDetails() {
  const params = useParams();
  const [trip, setTrip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fecthTripId = async () => {
      try {
        const tripData = await getTripsById(params.id);
        setTrip(tripData);
        setIsLoading(false);
      } catch (error) {
        console.error("no hay viajes para el id", error);
      }
    };
    fecthTripId();
  }, []);
  return (
    <>
      {isLoading ? (
        <SkeletonDetails />
      ) : (
        <section className="absolute top-0 lg:static lg:max-w-[65%] lg:mx-auto lg:mt-[6rem]">
          <div className="lg:flex lg:gap-[2.5rem]">
            <div className="relative w-full h-[50vh] bg-[url('/image/IslaEjemplo.jpg')] bg-no-repeat bg-center bg-[length:200%] rounded-b-3xl flex justify-center items-end lg:static lg:bg-cover lg:basis-[85%] lg:h-[28rem] lg:rounded-3xl">
              <div className="lg:hidden absolute bg-tertiary-red  w-[70%]  rounded-2xl p-[1rem] text-center bottom-[-1rem]">
                <h1 className="text-[1.3rem] text-primary-yellow font-bold">
                  {trip.title}
                </h1>
                <p className="text-[1rem] text-primary-yellow">
                  {trip.location}
                </p>
              </div>
            </div>
            <div className="w-[90%] mx-auto mt-[2.4rem] lg:mt-0">
              <div className="hidden h-[8rem] lg:flex lg:h-auto lg:mt-[2rem] lg:justify-between">
                <div className="basis-[80%]">
                  <h1 className="text-[1.5rem] text-tertiary-red font-bold leading-6">
                    {trip.title}
                  </h1>
                  <p className="text-[1.3 rem] text-tertiary-red">
                    {trip.location}
                  </p>
                </div>
                <div className="lg:basis-[20%] gap-[1rem] flex justify-endlg:items-center items-start">
                  <Btn
                    sourceIcon={"/image/Edit-icon.svg"}
                    color={"bg-transparent"}
                    classIcon="w-[2rem] lg:w-[1.8rem]"
                    type="Link"
                    href={"/"}
                  />
                  <Btn
                    sourceIcon={"/image/Delete-icon.svg"}
                    classIcon="w-[1.5rem] lg:w-[1.4rem]"
                    color={"bg-transparent"}
                    // onClick={}
                  />
                </div>
              </div>
              <p className="text-[1rem] text-quaternary-blue lg:text-[1.1rem] lg:mt-[1rem]">
                {trip.description}
              </p>

              <div className="flex gap-[0.5rem] items-start justify-end mt-[1rem] lg:hidden">
                <Btn
                  sourceIcon={"/image/Edit-icon.svg"}
                  color={"bg-transparent"}
                  classIcon="w-[2rem] lg:w-[1.8rem]"
                  type="Link"
                  href={"/"}
                />
                <Btn
                  sourceIcon={"/image/Delete-icon.svg"}
                  classIcon="w-[1.5rem] lg:w-[1.4rem]"
                  color={"bg-transparent"}
                  // onClick={}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

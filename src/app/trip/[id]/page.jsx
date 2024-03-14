"use client";
import { useParams } from "next/navigation";
import { getTripsById } from "@/services/";
import { useEffect, useState } from "react";
import SkeletonDetails from "@/components/placeholder/SkeletonDetail";
import ModalCancel from  "@/components/modal/ModalCancelTrip";
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
                <div>
                  <h1 className="text-[2rem] text-tertiary-red font-bold leading-6">
                    {trip.title}
                  </h1>
                  <p className="text-[1.45rem] text-tertiary-red">
                    {trip.location}
                  </p>
                </div>
                <p>botones</p>
              </div>
              {/* <p className=" text-[1rem] text-quaternary-blue lg:text-[1.1rem] lg:mt-[1rem]">
        Aquí estará la explicación del porque quieres viajar allí y no debe
        pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        In enim justo, rhoncus ut, imperdiet a, venenatis viremtae.
      </p> */}
              <p className="text-[1rem] text-quaternary-blue lg:text-[1.1rem] lg:mt-[1rem]">
                {trip.description}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

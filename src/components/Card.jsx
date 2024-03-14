import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/Btn.jsx";
export default function Card({ trip }) {
  return (
    <div className="bg-primary-yellow w-[70%] rounded-lg mb-[1rem] lg:basis-[18rem] min-[1600px]:basis-[21rem]">
      <div
        className="w-full h-[15rem]  bg-no-repeat bg-center bg-cover rounded-lg flex justify-end"
        style={{
          backgroundImage: `url(http://localhost:8000/${trip.image_path})`,
        }}
      >
        <Image
          src={`http://localhost:8000/${trip.image_path}`}
          alt="imagen del viaje"
          width={150}
          height={100}
        />
        {localStorage.getItem("token") && (
          <Link href={`/trip/${trip.id}`}>
            <div className="mt-[0.5rem] mr-[0.5rem]">
              <Image
                src={"/image/info-icon.svg"}
                alt="icono info"
                width={35}
                height={35}
              />
            </div>
          </Link>
        )}
      </div>
      <div className="mt-[0.5rem] px-[0.8rem] pb-[1rem] flex justify-between ">
        <div className="lg:basis-[70%] basis-[80%] mr-[1rem] lg:mr-0">
          <h1 className="text-quaternary-blue font-bold text-[1.1rem] lg:leading-5">
            {trip.title}
          </h1>
          <p className="text-quaternary-blue text-[1rem] leading-[0.8rem] lg:mt-[0.2rem]">
            {trip.location}
          </p>
        </div>
        <div className="basis-[30%] lg:basis-[20%] flex gap-[0.5rem] justify-between lg:items-center items-start">
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
  );
}

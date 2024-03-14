"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function NavBar() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setModalMessage("Sesion cerrada correctamente");
    setShowModal(true);
    router.refresh();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [localStorage.getItem("token")]);

  return (
    <nav className="flex justify-between fixed bottom-[1rem] rounded-3xl w-[90%] mx-[1rem] py-[0.5rem] shadow-s-green bg-primary-yellow lg:static lg:basis-[10%] lg:bg-white-transparent lg:shadow-sh-transparent lg:py-0 z-[1] lg:justify-end lg:gap-[1rem]">
      {showModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Modal text={modalMessage} onClick={handleCloseModal} />
        </div>
      )}
      <Link href={"/"}>
        <Image
          src="/image/Home-icon.svg"
          alt="Icono home"
          width={30}
          height={30}
        />
      </Link>
      {isAuthenticated && (
        <>
          <Link href={"/create"}>
            <Image
              src="/image/Create-icon.svg"
              alt="Icono create"
              width={30}
              height={30}
            />
          </Link>
          <button onClick={handleLogout}>
            <Image
              src="/image/Logout-icon.svg"
              alt="Icono logout"
              width={35}
              height={35}
            />
          </button>
        </>
      )}
      {!isAuthenticated && (
        <Link href={"/login"}>
          <Image
            src="/image/Avatar-icon.svg"
            alt="Icono avatar"
            width={30}
            height={30}
          />
        </Link>
      )}
    </nav>
  );
}

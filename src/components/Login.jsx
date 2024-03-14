"use client";

import { useState } from "react";
import InputForm from "./InputForm";
import Btn from "./Btn";
import { loginUser } from "@/services/";
import { useRouter } from "next/navigation"; 
import Modal from "./Modal";

export default function Login() {
  const router = useRouter(); 

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleInput = (e) => {
    e.persist();
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(loginInput);
      localStorage.setItem("token", response.access_token);
      setModalMessage('Incicio de sesion correcto')
      setShowModal(true);
      
    } catch (error) {
      console.error("Error ", error);
      alert("error usuario o contraseña erroneos.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col w-[370px] min-h-[360px] gap-6 rounded-2xl border-4 items-center border-primary-yellow ">
      <h2 className="text-xl text-tertiary-red font-bold pt-3">Login</h2>
      <form
        onSubmit={loginSubmit}
        className="border-t-2 border-tertiary-red flex flex-col"
      >
        <label
          htmlFor="email"
          className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
        >
          E-mail
        </label>
        <InputForm
          type="email"
          name="email"
          value={loginInput.email}
          onChange={handleInput}
          placeholder="Escribe tu correo ..."
        />
        <label
          htmlFor="password"
          className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
        >
          Contraseña
        </label>
        <InputForm
          type="password"
          name="password"
          value={loginInput.password}
          onChange={handleInput}
          placeholder="Escribe tu contraseña"
        />
        <div className="flex gap-4 justify-center pt-8"></div>
        <div className="flex gap-4 my-3">
          <Btn
            type="submit"
            text="Aceptar"
            color="bg-secondary-green"
            className="w-28 h-10"
            padding={"px-[1.2rem] py-[0.1rem]"}
          />
          <Btn
            text="Cancelar"
            color="bg-tertiary-red"
            className="w-28 h-10"
            padding={"px-[1.2rem] py-[0.1rem]"}
            type='reset'
          />
        </div>
      </form>
      {showModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          
          <Modal
            text={modalMessage}
            onClick={handleCloseModal} 
          />
          
        </div>
      )}
    </div>
  );
}

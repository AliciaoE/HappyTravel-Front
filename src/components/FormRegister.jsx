"use client";
import React, { useState } from "react";
import InputForm from "./InputForm";
import Btn from "./Btn";
import { registerUser } from "@/services/";
import Modal from "./Modal";
import Link from "next/link";

export default function FormRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      localStorage.setItem("token", response.access_token);
      setModalMessage("Registrado correctamente");
      setShowModal(true);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        setErrors({
          name: errorData.name ? errorData.name : "",
          email: errorData.email ? errorData.email : "",
          password: errorData.password ? errorData.password : "",
        });
      } else {
        console.error("Error al registrar usuario: ", error);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col w-[370px] min-h-[487px] gap-6 rounded-2xl border-4 items-center mt-5 border-primary-yellow pb-14">
      <h2 className="text-xl text-tertiary-red font-bold pt-3">
        Registro de usuario
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border-t-2 border-tertiary-red flex flex-col"
      >
        <label
          htmlFor="name"
          className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
        >
          Nombre
        </label>
        <InputForm
          type="text"
          placeholder="Escribe tu nombre..."
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-tertiary-red font-semibold">{errors.name}</p>
        )}
        <label
          htmlFor="email"
          className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
        >
          Email
        </label>
        <InputForm
          type="email"
          placeholder="Escribe tu correo electrónico..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-tertiary-red font-semibold">{errors.email}</p>
        )}
        <label
          htmlFor="password"
          className="text-quaternary-blue text-xl font-bold pb-1 pt-6"
        >
          Contraseña
        </label>
        <InputForm
          type="password"
          placeholder="Escribe tu contraseña..."
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-tertiary-red font-semibold">{errors.password}</p>
        )}
        <div className="flex gap-4 justify-center pt-8"></div>
        <div className="flex gap-4 my-3">
          <Btn
            text="Aceptar"
            color="bg-secondary-green"
            onSubmit={handleSubmit}
            className="w-28 h-10 "
            padding={"px-[1.2rem] py-[0.1rem]"}
          />
          <Btn
            text="Cancelar"
            color="bg-tertiary-red"
            type="reset"
            onClick={handleCancel}
            className="w-28 h-10"
            padding={"px-[1.2rem] py-[0.1rem]"}
          />
        </div>
        <span className="text-quaternary-blue text-center text-xl font-bold">
          ¿Ya tienes cuenta? Accede{" "}
          <a href="/login" className="text-secondary-green">
            aquí
          </a>
        </span>
      </form>
      {showModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <Modal text={modalMessage} onClick={handleCloseModal} />
          </Link>
        </div>
      )}
    </div>
  );
}

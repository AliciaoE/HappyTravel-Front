"use client";

import Link from "next/link";
import Modal from "./Modal";
import InputForm from './InputForm'
import Btn from './Btn'
import React, { useState } from "react";
import { addTrip } from "@/services/";

export default function AddForm() {
    const [formTrip, setFormTrip] = useState({
        title: "",
        location: "",
        image: "",
        description: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleChange = (e) => {
        setFormTrip({ ...formTrip, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTrip(formTrip);
            setModalMessage("¡Viaje añadido correctamente!");
            setShowModal(true);
        } catch (error) {
            setModalMessage("¡Error al añadir viaje!");
            setShowModal(true);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormTrip({ ...formTrip, image: file });
    };

    const handleCloseModal = () => {
        setShowModal(false);
      };

      const handleCancel = () => {
        setFormData({
            title: "",
            location: "",
            image: "",
            description: ""
        });
      };

    return (
        <section className="flex flex-col justify-center w-[750px] min-h-[487px] gap-6 rounded-2xl border-4 border-primary-yellow mt-[4rem] mb-30 mx-auto px-14">

            <h2 className="text-xl text-tertiary-red font-bold pt-3 inline-block text-center">Crear destino</h2>
            <form  onSubmit={handleSubmit} className="border-t-2 border-tertiary-red flex justify-between mx-8">
                <div className="flex flex-col ">
                   
                    <label htmlFor="title" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        Título
                    </label>
                    <InputForm
                        name="title" 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Escribe el título..." 
                    />

                    <label htmlFor="location" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        Ubicación
                    </label>
                    <InputForm 
                        name="location" 
                        onChange={handleChange} 
                        type="text" 
                        placeholder="Escribe el destino..." 
                        />

                    <label htmlFor="image"  className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        Imagen
                    </label>
                    <div  >
                       
                        <input 
                            type="file"
                            onChange={handleFileChange}
                            name="image" 
                            accept="image/*" 
                            placeholder="Sube una imagen..." 
                            className='pl-8 bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[0.3rem] w-full text-[0.9rem] focus:outline-none'
                        />
                    </div>


                    <div className="flex gap-4 justify-center pt-8">
                    </div>

                    <div className='flex justify-center gap-4 my-3'>
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
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="text-quaternary-blue text-xl font-bold pb-1 pt-6">
                        ¿Por qué quieres viajar allí?
                    </label>

                    <textarea 
                        name="description"
                        onChange={handleChange} 
                        className="resize-none w-full h-full bg-primary-yellow rounded-2xl shadow-inner-top px-[1rem] placeholder:text-quaternary-blue py-[auto] text-[0.9rem] focus:outline-none overflow-auto" 
                        style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
                        placeholder="Aquí estará la explicación del porque quieres viajar allí y no debe pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae." />
                </div>
            </form>
            {showModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <Modal text={modalMessage} onClick={handleCloseModal} />
          </Link>
        </div>
      )}
        </section >
    )
}
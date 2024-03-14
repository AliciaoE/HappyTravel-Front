import React, { useState } from 'react';
import { deleteTrip } from '@/services'; 
import Modal from './Modal'; 

export default function TripDeleteButton({ tripId }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true); 

    try {
      await deleteTrip(tripId); 
      console.log('El viaje se eliminó correctamente');
    } catch (error) {
      console.error('Error al eliminar el viaje:', error);
    } finally {
      setIsDeleting(false); 
      setShowConfirmModal(false); 
  };

  const openConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <button onClick={openConfirmModal} disabled={isDeleting}>
        {isDeleting ? 'Borrando...' : 'Eliminar Viaje'}
      </button>

      {showConfirmModal && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50'>
          <div className='px-12 py-6 bg-primary-yellow border-solid border-2 border-secondary-green rounded-3xl flex flex-col items-center justify-center' onClick={(e) => e.stopPropagation()}>
            <h3 className='text-xl text-quaternary-blue text-center p-4'>¿Estás seguro de que quieres eliminar este viaje?</h3>
            <div className='flex gap-6'>
              <button onClick={handleDelete} disabled={isDeleting} className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'>
                Sí, eliminar
              </button>
              <button onClick={closeConfirmModal} className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg'>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

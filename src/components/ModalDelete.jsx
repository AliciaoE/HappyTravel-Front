import React, { useState } from 'react';
import { deleteTrip } from '@/services'; // Importa la función deleteTrip desde el servicio correspondiente

export default function TripDeleteButton({ tripId }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true); // Establece el estado como borrando

    try {
      await deleteTrip(tripId); // Llama a la función deleteTrip con el ID del viaje
      console.log('El viaje se eliminó correctamente');
    } catch (error) {
      console.error('Error al eliminar el viaje:', error);
    } finally {
      setIsDeleting(false); // Establece el estado de vuelta a su valor original después de la operación
    }
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Borrando...' : 'Eliminar Viaje'}
    </button>
  );
}

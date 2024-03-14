import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;

export const getAllTrips = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTripsByPage = async (currentPage) => {
  const response = await axios.get(`${API_URL}/page?page=${currentPage}`);
  return response.data;
};

export const getSearchTrips = async (searchText) => {
  const response = await axios.get(`${API_URL}/search/?search=${searchText}`);
  return response.data;
};

export const registerUser = async (formData) => {
  try {
    await axios.post(`${API_URL}/register`, formData);
  } catch (error) {
    console.log("Error registering user: ", error);
    throw error;
  }
};

export const getTripsById = async (id) => {
  const response = await axios.get(`${API_URL}/trip/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return response.data;
};

export const loginUser = async (loginInput) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, loginInput);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }

};

export const addTrip = async (formTrip) => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.post(
      `${API_URL}/store`,
      formTrip,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.log("Error al agregar viaje: ", error);
    throw error;
  }
};


export const deleteTrip = async (tripId) => {
  try {
    const response = await axios.delete(`${API_URL}/trip/`,tripid);
    return response.data;
  } catch (error) {
    throw error;
  }
};


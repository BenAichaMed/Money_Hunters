import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/v1/course";
export const getAllCourse = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

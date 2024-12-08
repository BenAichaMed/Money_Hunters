import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/v1/users/login";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Extract the error message from the response
    const errorMessage =
      error.response?.data?.message || "An error occurred during login";
    console.error("Login error details:", {
      status: error.response?.status,
      message: errorMessage,
      data: error.response?.data,
    });

    // Throw an error with the actual message from the backend
    return errorMessage;
  }
};

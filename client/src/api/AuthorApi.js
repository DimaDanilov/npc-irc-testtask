import { axiosInstance } from "api";

export async function loadAuthors() {
  try {
    const response = await axiosInstance.get(`api/author`);
    return response.data;
  } catch (e) {
    console.error(e);
    return {};
  }
}

export async function deleteAuthor(id) {
  try {
    const response = await axiosInstance.delete(`api/author/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    return {};
  }
}

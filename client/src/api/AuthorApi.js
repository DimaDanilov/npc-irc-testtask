import { axiosInstance } from "api";
import { AuthorAdapter } from "./AuthorAdapter";

export async function loadAuthors() {
  try {
    const response = await axiosInstance.get(`api/author`);
    return response.data;
  } catch (e) {
    console.error(e);
    return {};
  }
}

export async function createAuthor(name, surname, birthdate) {
  try {
    const response = await axiosInstance.post(`api/author`, {
      name,
      surname,
      birthdate,
    });
    return AuthorAdapter.transform(response.data);
  } catch (e) {
    alert(e.message);
    console.error(e);
    return {};
  }
}

export async function editAuthor(data) {
  try {
    const response = await axiosInstance.put(`api/author`, {
      ...data,
    });
    return AuthorAdapter.transform(response.data);
  } catch (e) {
    alert(e.message);
    console.error(e);
    return {};
  }
}

export async function deleteAuthor(id) {
  try {
    const response = await axiosInstance.delete(`api/author/${id}`);
    return response.data;
  } catch (e) {
    alert(e.message);
    console.error(e);
    return {};
  }
}

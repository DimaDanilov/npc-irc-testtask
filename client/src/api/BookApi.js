import { axiosInstance } from "api";
import { BookAdapter } from "./BookAdapter";

export async function loadBooks() {
  try {
    const response = await axiosInstance.get(`api/book`);
    return BookAdapter.transformArray(response.data);
  } catch (e) {
    console.error(e);
    return {};
  }
}

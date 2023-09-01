import { axiosInstance } from "api";
import { BookAdapter } from "./BookAdapter";

export async function loadBooks(page, pageLimit) {
  try {
    const response = await axiosInstance.get(`api/book`, {
      params: { page: page, page_limit: pageLimit },
    });
    return BookAdapter.transformArray(response.data);
  } catch (e) {
    console.error(e);
    return {};
  }
}

import { PostReview } from "../interfaces/review";
import axiosConfig from "./axiosConfig";

const reviewApi = {
  getSingleReview: (id: string) => {
    return axiosConfig.get(`/reviews/${id}`);
  },
  getAllReview: () => {
    return axiosConfig.get(`/reviews`);
  },
  postAReview: (body: PostReview) => {
    return axiosConfig.post(`/reviews`, body);
  },
};

export default reviewApi;

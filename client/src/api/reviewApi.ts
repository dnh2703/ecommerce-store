import { PostReview } from "../interfaces/review";
import privateClient from "./client/private.client";
import publicClient from "./client/public.client";

const reviewApi = {
  getSingleReview: (id: string) => {
    return publicClient.get(`/reviews/${id}`);
  },
  getAllReview: () => {
    return publicClient.get(`/reviews`);
  },
  postAReview: (body: PostReview) => {
    return privateClient.post(`/reviews`, body);
  },
};

export default reviewApi;

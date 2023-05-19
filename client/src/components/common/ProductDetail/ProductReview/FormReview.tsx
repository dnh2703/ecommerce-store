import { Box, Rating } from "@mui/material";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { GetReview, PostReview } from "../../../../interfaces/review";
import reviewApi from "../../../../api/reviewApi";

export default function FormReview(props: any) {
  let [rating, setRating] = useState<number>(0);
  let [values, setValues] = useState<GetReview>({
    title: "",
    comment: "",
  });
  let [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let review: PostReview = {
      product: props.product?.id,
      title: values.title,
      comment: values.comment,
      rating: rating,
    };
    setIsLoading(true);
    reviewApi
      .postAReview(review)
      .then((res) => {
        props.closeWriteReview();
        alert("Thanks for your review");
      })
      .catch((e) => alert("Sorry, your review can upload. Try again later."))
      .finally(() => setIsLoading(false));
  };

  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, comment: e.target.value });
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, title: e.target.value });
  };

  return (
    <form
      action=""
      onSubmit={handleOnSubmit}
      className="py-12 border-y border-gray-200"
    >
      <p className="mb-6 text-3xl">Write a review</p>

      <div className="flex gap-8 mb-6">
        <div className="basis-1/2">
          <p className="mb-2">Name</p>
          <input
            className="w-full p-5 outline-none border border-gray-300"
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="basis-1/2">
          <p className="mb-2">Email</p>
          <input
            className="w-full p-5 outline-none border border-gray-300"
            type="email"
            placeholder="john.smith@example.com"
            required
          />
        </div>
      </div>

      <div className={`flex items-center ${rating !== 0 ? " mb-6" : "mb-1"}`}>
        <span className="mr-2">Rating</span>
        <Box
          sx={{ span: { fontSize: 15 }, display: "flex", alignItems: "center" }}
        >
          <Rating
            name="hover-feedback"
            value={rating}
            precision={0.5}
            onChange={(event, value: any) => {
              setRating(value);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
      </div>
      {rating === 0 && <p className="mb-6 text-red-500">Please rate</p>}

      <div className="mb-6">
        <p className="mb-2">Review Title</p>
        <input
          className="w-full p-5 outline-none border border-gray-300"
          type="text"
          placeholder="Give your review a title"
          onChange={handleTitle}
        />
      </div>

      <div className="mb-6">
        <p className="mb-2">Body of Review</p>
        <textarea
          className="w-full p-5 outline-none border border-gray-300"
          name=""
          id=""
          cols={30}
          rows={10}
          maxLength={1500}
          onChange={handleComment}
          placeholder="Write your comments here"
        ></textarea>
      </div>

      <div className="flex mb-6 justify-center">
        {values.comment === "" || values.title === "" || rating === 0 ? (
          <button
            disabled
            type="submit"
            className="uppercase tracking-[2px] text-sm py-5 border border-gray-300 text-gray-500 px-10 "
          >
            Submit review
          </button>
        ) : isLoading ? (
          <button
            type="submit"
            className="uppercase tracking-[2px] text-sm w-[208.38px] h-[61.78px] border border-black px-10 hover:bg-[#6e2f1b] hover:border-[#6e2f1b] hover:text-white"
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="uppercase tracking-[2px] text-sm py-5 border border-black px-10 hover:bg-[#6e2f1b] hover:border-[#6e2f1b] hover:text-white "
          >
            Submit review
          </button>
        )}
      </div>
    </form>
  );
}

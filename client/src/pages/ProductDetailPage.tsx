import { Container, Typography } from "@mui/material";
import * as React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductRoute } from "../components/common/ProductCatalog/ProductCatalogComponent";
import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/product";
import productApi from "../api/productApi";
import ProductDetail from "../components/common/ProductDetail/ProductDetail";
import TermsAndConditions from "../components/common/ProductDetail/TermsAndConditions";
import AskModal from "../components/common/ProductDetail/AskModal";
import DeliveryModal from "../components/common/ProductDetail/DeliveryModal";
import StoreInfo from "../components/common/ProductDetail/StoreInfo";
import ProductReview from "../components/common/ProductDetail/ProductReview/ProductReview";
import { IReview } from "../interfaces/review";
import reviewApi from "../api/reviewApi";
import ProductCarousel from "../components/common/ProductDetail/ProductCarousel";
import BestRatingProducts from "../components/common/ProductDetail/BestRatingProduct";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { getProductsStart } from "../features/slice/productSlice";
import { getReviewsStart } from "../features/slice/reviewSlice";
import LoadingPage from "../components/common/LoadingPage";

interface ShowModal {
  termsAndConditions: boolean;
  ask: boolean;
  delivery: boolean;
  storeInfomation: boolean;
}

export default function ProductDetailPage() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let { products } = useAppSelector((state) => state.product);
  let { reviews, isLoading } = useAppSelector((state) => state.review);
  let [product, setProduct] = useState<IProduct>();
  let [productReviews, setProductReviews] = useState<IReview[]>();
  let [brandProducts, setBrandProducts] = useState<IProduct[]>();
  let [bestRatingProducts, setBestRatingProducts] = useState<IProduct[]>();
  let [isScroll, setIsScroll] = useState<boolean>(false);
  let [isShowModal, setIsShowModal] = useState<ShowModal>({
    termsAndConditions: false,
    ask: false,
    delivery: false,
    storeInfomation: false,
  });

  useEffect(() => {
    productApi.getProductDetail(id).then((res) => setProduct(res.data.product));
    dispatch(getReviewsStart());
    dispatch(getProductsStart());
  }, []);

  useEffect(() => {
    let newProducts: IProduct[];
    let bestRatingP: IProduct[];

    newProducts = [...products];
    newProducts = newProducts.filter(
      (p: IProduct) => p.company === product?.company && p.id !== product.id
    );
    setBrandProducts(newProducts);
    bestRatingP = [...products];
    bestRatingP = bestRatingP
      .sort((a: IProduct, b: IProduct) => b.averageRating - a.averageRating)
      .slice(0, 4);
    setBestRatingProducts(bestRatingP);
  }, [products]);

  useEffect(() => {
    let filterReviews: IReview[] = [];
    if (reviews !== undefined) {
      filterReviews = [...reviews];
    }
    filterReviews = filterReviews.filter(
      (review: IReview) => review.product.id === id
    );
    setProductReviews(filterReviews);
  }, [reviews]);

  return (
    <>
      {!isLoading ? (
        <div className="relative px-8">
          {isScroll && (
            <div
              onClick={() => window.scrollTo(0, 0)}
              className="z-20 fixed rounded-full hover:bg-black hover:text-white duration-500 bg-white text-black border border-black w-[50px] h-[50px] bottom-20 right-8 flex items-center justify-center cursor-pointer"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          )}
          {isShowModal.storeInfomation && (
            <StoreInfo
              isShow={isShowModal.storeInfomation}
              product={product}
              closeModal={() => {
                setIsShowModal({
                  ...isShowModal,
                  storeInfomation: false,
                });
              }}
            />
          )}
          {isShowModal.ask && (
            <AskModal
              product={product}
              closeModal={() => {
                setIsShowModal({
                  ...isShowModal,
                  ask: false,
                });
              }}
            />
          )}
          {isShowModal.delivery && (
            <DeliveryModal
              closeModal={() => {
                setIsShowModal({
                  ...isShowModal,
                  delivery: false,
                });
              }}
            />
          )}
          {isShowModal.termsAndConditions && (
            <TermsAndConditions
              closeModal={() => {
                setIsShowModal({
                  ...isShowModal,
                  termsAndConditions: false,
                });
              }}
            />
          )}
          <Container maxWidth="xl">
            <header className="flex items-center py-5">
              <ProductRoute name="home" />
              <i
                style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
                className="fa-solid fa-angle-right"
              ></i>
              <ProductRoute name="products" />
              <i
                style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
                className="fa-solid fa-angle-right"
              ></i>
              <Typography className="capitalize" sx={{ fontSize: 12 }}>
                {product?.name}
              </Typography>
            </header>

            <div className="flex sm:flex-wrap">
              <div className="sm:mb-10 lg:pr-10 sm:basis-full lg:basis-1/2 relative">
                <img
                  src={product?.image}
                  className={`${
                    product?.inventory === 0 && "grayscale"
                  } w-full`}
                  alt=""
                />
                {product?.inventory === 0 && (
                  <span className="absolute top-2 left-2 bg-gray-100 text-lg px-4">
                    Out of stock
                  </span>
                )}
              </div>

              <ProductDetail
                product={product}
                showTerms={() => {
                  setIsShowModal({ ...isShowModal, termsAndConditions: true });
                }}
                showAsk={() => {
                  setIsShowModal({ ...isShowModal, ask: true });
                }}
                showDelivery={() => {
                  setIsShowModal({ ...isShowModal, delivery: true });
                }}
                showStoreInfo={() => {
                  setIsShowModal({ ...isShowModal, storeInfomation: true });
                }}
              />
            </div>
            <ProductReview product={product} reviews={productReviews} />
            <ProductCarousel brandProducts={brandProducts} />
            <BestRatingProducts products={bestRatingProducts} />
          </Container>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

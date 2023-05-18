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

interface ShowModal {
  termsAndConditions: boolean;
  ask: boolean;
  delivery: boolean;
  storeInfomation: boolean;
}

export default function ProductDetailPage() {
  let { id } = useParams();
  let [product, setProduct] = useState<IProduct>();
  let [isShowModal, setIsShowModal] = useState<ShowModal>({
    termsAndConditions: false,
    ask: false,
    delivery: false,
    storeInfomation: false,
  });

  useEffect(() => {
    productApi.getProductDetail(id).then((res) => setProduct(res.data.product));
  }, []);

  return (
    <div className="relative">
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

        <div className="flex">
          <div className="pr-10 basis-1/2 relative w-full">
            <img
              src={product?.image}
              className={`${product?.inventory === 0 && "grayscale"} w-full`}
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
          ></ProductDetail>
        </div>
      </Container>
    </div>
  );
}

import { Typography } from "@mui/material";
import * as React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductRoute } from "../components/common/ProductCatalogComponent/ProductCatalogComponent";
import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/product";
import productApi from "../api/productApi";
import ProductDetail from "../components/common/ProductDetailComponent/ProductDetail";
import TermsAndConditions from "../components/common/ProductDetailComponent/TermsAndConditions";
import AskModal from "../components/common/ProductDetailComponent/AskModal";
import DeliveryModal from "../components/common/ProductDetailComponent/DeliveryModal";

interface ShowModal {
  termsAndConditions: boolean;
  ask: boolean;
  delivery: boolean;
}

export default function ProductDetailPage() {
  let { id } = useParams();
  let [product, setProduct] = useState<IProduct>();
  let [isShowModal, setIsShowModal] = useState<ShowModal>({
    termsAndConditions: false,
    ask: false,
    delivery: false,
  });

  useEffect(() => {
    productApi.getProductDetail(id).then((res) => setProduct(res.data.product));
  }, []);

  return (
    <div className="relative">
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
      <div className="max-w-7xl mx-auto ">
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
          <Typography sx={{ fontSize: 12 }}>Products</Typography>
        </header>

        <div className="flex">
          <div className="pr-10 basis-1/2">
            <img
              src="https://cdn.shopify.com/s/files/1/0136/8467/0523/products/products-10_1080x1080.jpg?v=1656481580"
              alt=""
            />
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
          ></ProductDetail>
        </div>
      </div>
    </div>
  );
}

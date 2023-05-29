import * as React from "react";
import Container from "@mui/material/Container";

export interface ISkeletonOrderProps {}

export default function SkeletonOrder(props: ISkeletonOrderProps) {
  return (
    <div className="bg-gray-100 animate-pulse mt-[86.8px] py-20">
      <Container maxWidth="md">
        <div className="w-full h-[61.45px] bg-slate-200 mb-5"></div>
        <div className="w-full h-[61.45px] bg-slate-200 mb-5"></div>
        <div className="w-full h-[61.45px] bg-slate-200 mb-5"></div>
        <div className="w-full h-[61.45px] bg-slate-200 mb-5"></div>
      </Container>
    </div>
  );
}

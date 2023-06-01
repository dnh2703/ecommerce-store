import * as React from "react";
import CloseButton from "../CloseButton";

export default function TermsAndConditions(props: any) {
  return (
    <div className="fixed z-50 w-full h-[100vh] top-0 left-0 ">
      <div
        onClick={props.closeModal}
        className="absolute w-full h-[100vh] top-0 left-0 bg-stone-950 opacity-60 "
      ></div>

      <div className="max-sm:w-full max-sm:top-[40%] absolute z-[3] translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-gray-100 w-1/2 p-8 overflow-hidden animate-[modalOpacity_0.5s_linear]  ">
        <div className="border-b-[1px] flex justify-between border-gray-300 mb-8">
          <h2 className="pb-4 text-3xl border-b-2 border-black inline-block">
            Terms & Conditions
          </h2>
          <div>
            <CloseButton closeModal={props.closeModal} />
          </div>
        </div>
        <div className="text-sm">
          <p className="text-[#868686] mb-4">
            Demati supplies products listed on the Demati, and Demati websites,
            and in our stores under the following Terms and Conditions. Please
            read these Terms and Conditions, and our Privacy and Cookie Policies
            carefully before using any of our websites, or ordering from us.
          </p>
          <p className="text-[#868686] mb-4">
            The Terms and Conditions apply to your use of any Demati website and
            to any products you purchase from them; regardless of how you access
            the website, including any technologies or devices where our website
            is available to you at home, on the move or in store
          </p>
          <p className="text-[#868686] mb-4">
            We reserve the right to update these Terms and Conditions at any
            time, and any updates affecting you or your purchases will be
            notified to you, by us in writing (via email), and on this page.
          </p>
          <p className="text-[#868686] mb-4">
            The headings in these Conditions are for convenience only and shall
            not affect their interpretation.
          </p>
          <p className="text-[#868686] mb-4">
            We recommend that you print and keep a copy of these Terms and
            Conditions for your future reference...
          </p>
        </div>
      </div>
    </div>
  );
}

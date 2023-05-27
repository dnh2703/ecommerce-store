import CloseButton from "../CloseButton";

export default function DeliveryModal(props: any) {
  return (
    <div className="fixed z-50 w-full h-[100vh] top-0 left-0 ">
      <div
        onClick={props.closeModal}
        className="absolute w-full h-[100vh] top-0 left-0 bg-stone-950 opacity-60 "
      ></div>
      <div className="absolute z-[3] translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-gray-100 w-1/2 p-8 animate-[modalOpacity_0.5s_linear]  overflow-hidden">
        <div className="border-b-[1px] flex justify-between border-gray-300 mb-8">
          <h2 className="pb-4 text-3xl border-b-2 border-black inline-block">
            Shipping info
          </h2>
          <div>
            <CloseButton closeModal={props.closeModal} />
          </div>
        </div>
        <div className="text-sm">
          <p className="text-[#868686] mb-4">
            <span className="font-bold text-black">Return Policy: </span>We will
            gladly accept returns for any reason within 30 days of receipt of
            delivery.
          </p>
          <p className="text-[#868686] mb-4">
            <span className="font-bold text-black">Availability: </span>Ships
            anywhere in the United States
          </p>
          <p className="text-[#868686] mb-4">
            <span className="font-bold text-black">Processing Time: </span>Allow
            3-4 business days processing time for your order to ship.
          </p>
        </div>
      </div>
    </div>
  );
}

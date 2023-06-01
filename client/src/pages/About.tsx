import { url } from "inspector";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-[86.8px] w-full h-full">
      <div>
        <div className="flex justify-center items-center relative h-96 bg-left bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0136/8467/0523/files/slider-2.jpg?v=1656490833')]">
          <div className="absolute top-0 left-0 w-full h-full bg-stone-500 opacity-60"></div>
          <h1 className="text-5xl text-white z-[1]">About Us</h1>
        </div>
      </div>
      <div className="mx-16">
        <h1 className=" my-14 font-medium text-3xl text-center">
          WELCOME OUR STORE!
        </h1>
        <div className="text-base">
          <p className="mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            hic amet repellendus assumenda voluptatem iste. In exercitationem
            aliquam eligendi sint quidem natus eum aliquid laboriosam id
            adipisci excepturi voluptas, eaque.
          </p>
          <p className="mb-8 leading-7 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            nesciunt alias, commodi mollitia inventore sequi ea eveniet repellat
            ut eius, et architecto reiciendis sapiente, quas pariatur, soluta
            quod fugit id quae excepturi doloribus corporis eligendi cumque
            ipsum! Praesentium cum maxime unde ad repudiandae sed quisquam,
            numquam iusto, odio voluptatem facere. Saepe, ipsam deleniti,
            aliquid sequi nihil nisi dolores obcaecati odit eaque repellendus
            voluptas, minima velit. Quibusdam eos, laboriosam doloremque ut.
          </p>
          <p className="leading-7  mb-28">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            doloremque optio accusantium, hic mollitia, quas ex molestiae,
            explicabo ratione est maiores dignissimos blanditiis quo aut sint id
            rerum ea laudantium placeat veniam maxime reiciendis. Deserunt
            rerum, quibusdam, repellendus mollitia deleniti itaque! Porro
            delectus quod, rem veniam nesciunt expedita distinctio officia optio
            minus officiis qui voluptatem nostrum explicabo quasi rerum quos
            repellat inventore quaerat fugit ad cum excepturi harum itaque.
            Harum, molestias odit dolores quos velit voluptatem dolor architecto
            corrupti vero.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

import React, { memo } from "react";

const Home = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return (
    <section>
      <div className="container">
        <h2 className="text-center text-[30px] mt-[24px] mb-[30px]">
          Products
        </h2>
        <div className="grid grid-cols-4 gap-[16px] ">
          {data?.products?.map((item: any) => (
            <div key={item.id} className="border border-[#3f3f3f] ">
              <img src={item.thumbnail} alt="rasm" />
              <div className="px-[18px] py-[12px]">
                <h3 className="line-clamp-1 text-[22px]" title={item.title}>
                  {item.title}
                </h3>
                <p>{item.category}</p>
                <p className="text-[#c39900]">{item.price} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default memo(Home);

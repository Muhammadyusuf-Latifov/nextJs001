import { memo } from "react";

const Page = async () => {
  const response = await fetch("https://dummyjson.com/comments");
  const data = await response.json();
  console.log(data);

  return (
    <section>
      <div className="container">
        <h2 className="text-center text-[30px] mt-[24px] mb-[30px]">
          Comments
        </h2>
        <div className="grid grid-cols-4 gap-[16px] ">
          {data?.comments?.map((item: any) => (
            <div key={item.id} className="border border-[#3f3f3f] ">
              <div className="flex items-center py-[30px] justify-center ">
                <p className="mx-auto   text-[40px]">•••</p>
              </div>
              <div className="px-[18px] py-[12px]">
                <h3
                  className="line-clamp-1 text-[22px] mb-[12px]"
                  title={item.title}
                >
                  {item.user.fullName}
                </h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Page);

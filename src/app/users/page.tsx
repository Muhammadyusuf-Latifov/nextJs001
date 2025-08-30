import { memo } from 'react';

const Page = async() => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
     
  
  return (
    <section>
      <div className="container">
        <h2 className="text-center text-[30px] mt-[24px] mb-[30px]">Users</h2>
        <div className="grid grid-cols-4 gap-[16px] ">
          {data?.users?.map((item: any) => (
            <div key={item.id} className="border border-[#3f3f3f] ">
              <img className='block mx-auto' src={item.image} alt="rasm" />
              <div className="px-[18px] py-[12px]">
                <h3 className="line-clamp-1 text-[22px]" title={item.title}>
                  {`${item.firstName} ${item.lastName}`}
                </h3>
                <p>{item.phone}</p>
                <p className="text-[#c38f00] line-clamp-1" title={item.email}> {item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Page);
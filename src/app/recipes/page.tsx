import { memo } from 'react';

const About = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  
  return (
    <section>
      <div className="container">
        <h2 className="text-center text-[30px] mt-[24px] mb-[30px]">
          Recipes
        </h2>
        <div className="grid grid-cols-4 gap-[16px] ">
          {data?.recipes?.map((item: any) => (
            <div key={item.id} className="border border-[#3f3f3f] ">
              <img src={item.image} alt="rasm" />
              <div className="px-[18px] py-[12px]">
                <h3 className="line-clamp-1 text-[22px]" title={item.name}>
                  {item.name}
                </h3>
                <p>{item.cuisine}</p>
                <p className='text-[#c38f00]'> { item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(About);
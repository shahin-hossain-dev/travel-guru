import background from "../assets/background.png";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const bgImg = {
    backgroundImage: `url(${background})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const categories = useLoaderData();

  const titleCategory = categories.find(
    (category) => category.title.toLowerCase() === "cox's bazar"
  );

  return (
    <div className="bg min-h-screen " style={bgImg}>
      <div className="bg-[#000000B3] min-h-screen ">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center w-2/3 mx-auto">
            {/* description */}
            <div className="space-y-4">
              <h2 className="text-4xl text-white font-bold">
                {titleCategory.title}
              </h2>
              <p className="text-white">{titleCategory.description}</p>
              <button className="btn btn-warning">Booking</button>
            </div>
          </div>

          <div className="flex justify-center items-center min-h-screen gap-5">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              scrollbar={{ draggable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard category={category}></CategoryCard>
                </SwiperSlide>
              ))}
              {categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard category={category}></CategoryCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

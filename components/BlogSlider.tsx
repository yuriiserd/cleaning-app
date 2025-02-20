import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";
import Link from "next/link";

type BlogItem = {
  title: string;
  content: string;
  image: string;
}

export default function BlogSlider({ blogs }: { blogs: BlogItem[]}) {
  return (
    <div className="container blog">
      <h2 className="title">Blog</h2>
      <div className="slider">
        <Swiper
          slidesPerView={3}
          // onSwiper={(swiper) => console.log(swiper)}
          spaceBetween={50}
          initialSlide={2}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard blogItem={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="#" className="btn btn_border min-w-[240px]">Zeig mehr</Link>
      </div>
    </div>
  )
}
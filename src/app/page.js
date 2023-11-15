'use client';
import Slider from "react-slick";
// import Image from 'next/image';
// import Link from 'next/link';
// import { appRoutes } from '@/utils/globalContants';
// import styles from './page.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <div className="crousel">
        <Slider {...settings}>
          <div>
            <img src="/images/Image Pasted at 2023-10-13 18-44.png" className="card-img-top" alt="Image" />
          </div>
          <div>
            <img src="/images/Image Pasted at 2023-10-13 18-44.png" className="card-img-top" alt="Image" />
          </div>
          <div>
            <img src="/images/Image Pasted at 2023-10-13 18-44.png" className="card-img-top" alt="Image" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
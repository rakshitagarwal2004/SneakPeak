import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative max-container overflow-hidden py-16">
      {/* Bubble background */}
      <div className="bubble-background absolute inset-0 -z-10">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-blue"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>

      <div className="mt-16">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <ReviewCard
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;

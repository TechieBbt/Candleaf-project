import React, { Component } from 'react'
import Slider from "react-slick";
import './testimonials.css';
import Star from '../../Assets/Star 1.png';
import HalfStar from '../../Assets/Star 5.png';
import Luisa from '../../Assets/Luisa.png';
import Edoardo from '../../Assets/Edoardo.png';
import Mart from '../../Assets/Mart.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class testimonials extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 5000,
            cssEase: "linear",
          

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
          ]
        };

  return (
    <div className='testimonials'>
        <div className="innerTest">
            <div className='test-head'>
                <div>Testimonials</div>
                <div>Some quotes from our happy customers</div>
            </div>
            <Slider {...settings} className='test-below'>
                <div className="testcard">
                    <div className="testimony">
                        <div className='person'>
                            <img src={Luisa} alt=""/>
                        </div>
                        <div className='stars'>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={HalfStar} alt=""/>
                        </div>
                        <div className='saying'>“I love it! No more air fresheners”</div>
                        <div className="name">Luisa</div>
                    </div>
                </div>
                <div className="testcard">
                    <div className="testimony">
                        <div className='person'>
                            <img src={Edoardo} alt=""/>
                        </div>
                        <div className='stars'>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                        </div>
                        <div className='saying'>“Recommended for everyone”</div>
                        <div className="name">Edoardo</div>
                    </div>
                </div>
                <div className="testcard">
                    <div className="testimony">
                        <div className='person'>
                            <img src={Mart} alt=""/>
                        </div>
                        <div className='stars'>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={HalfStar} alt=""/>
                        </div>
                        <div className='saying'>“Looks very natural, the smell is awesome”</div>
                        <div className="name">Mart</div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}
}

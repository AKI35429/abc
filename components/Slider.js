// import React, { useEffect } from "react";
// import Swiper from "swiper";
// import "./Slider.css"; // Import the CSS file

// const Slider = () => {
//   useEffect(() => {
//     // Initialize Swiper when the component mounts
//     // Params
//     let mainSliderSelector = '.main-slider',
//     navSliderSelector = '.nav-slider',
//     interleaveOffset = 0.5;

//     // Main Slider
//     let mainSliderOptions = {
//       loop: true,
//       speed: 1000,
//       autoplay: {
//         delay: 3000,
//       },
//       loopAdditionalSlides: 10,
//       grabCursor: true,
//       watchSlidesProgress: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       on: {
//         init: function () {
//           this.autoplay.stop();
//         },
//         imagesReady: function () {
//           this.el.classList.remove('loading');
//           this.autoplay.start();
//         },
//         slideChangeTransitionEnd: function () {
//           let swiper = this,
//             captions = swiper.el.querySelectorAll('.caption');
//           for (let i = 0; i < captions.length; ++i) {
//             captions[i].classList.remove('show');
//           }
//           swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
//         },
//         progress: function () {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             let slideProgress = swiper.slides[i].progress,
//               innerOffset = swiper.width * interleaveOffset,
//               innerTranslate = slideProgress * innerOffset;

//             swiper.slides[i].querySelector(".slide-bgimg").style.transform =
//               "translateX(" + innerTranslate + "px)";
//           }
//         },
//         touchStart: function () {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             swiper.slides[i].style.transition = "";
//           }
//         },
//         setTransition: function (speed) {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             swiper.slides[i].style.transition = speed + "ms";
//             swiper.slides[i].querySelector(".slide-bgimg").style.transition =
//               speed + "ms";
//           }
//         },
//       },
//     };
//     let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

//     // Navigation Slider
//     let navSliderOptions = {
//       loop: true,
//       loopAdditionalSlides: 10,
//       speed: 1000,
//       spaceBetween: 5,
//       slidesPerView: 5,
//       centeredSlides: true,
//       touchRatio: 0.2,
//       slideToClickedSlide: true,
//       direction: 'vertical',
//       on: {
//         imagesReady: function () {
//           this.el.classList.remove('loading');
//         },
//         click: function () {
//           mainSlider.autoplay.stop();
//         },
//       },
//     };
//     let navSlider = new Swiper(navSliderSelector, navSliderOptions);

//     // Matching sliders
//     mainSlider.controller.control = navSlider;
//     navSlider.controller.control = mainSlider;
//   }, []);

//   return (
//     <div className="swiper-container main-slider loading">
//       <div className="swiper-slide">
//         <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1?q=85)' }}>
//           <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1?q=85" className="entity-img" />
//         </figure>
//         <div className="content">
//           <p className="title">Shaun Matthews</p>
//           <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
//         </div>
//       </div>
//       {/* Repeat similar code for other swiper slides */}
//     </div>

//     <div className="swiper-button-prev swiper-button-white"></div>
//     <div className="swiper-button-next swiper-button-white"></div>

//     <div className="swiper-container nav-slider loading">
//       <div className="swiper-wrapper" role="navigation">
//         <div className="swiper-slide">
//           <figure className="slide-bgimg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1?q=85)' }}>
//             <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1?q=85" className="entity-img" />
//           </figure>
//           <div className="content">
//             <p className="title">Shaun Matthews</p>
//           </div>
//         </div>
//         {/* Repeat similar code for other navigation slides */}
//       </div>
//     </div>
//   </div>
// );

// export default Slider;

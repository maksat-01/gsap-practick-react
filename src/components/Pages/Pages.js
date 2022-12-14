import React, {useEffect} from 'react';
import gsap from "gsap"
import modelLeft from "../../assests/img/model-left.jpg"
import modelRight from "../../assests/img/model-right.jpg"
import chefLeft from "../../assests/img/chef-left.jpg"
import chefRight from "../../assests/img/chef-right.jpg"
import hairLeft from "../../assests/img/hair-left.jpg"
import hairRight from "../../assests/img/hair-right.jpg"
import {Link} from "react-router-dom";

const Pages = () => {
    useEffect(() => {

    function init() {
        const slides = document.querySelectorAll(".slide")
        const pages = document.querySelectorAll(".page")
        const backgrounds = ['radial-gradient(#2B3760, #0B1023)', 'radial-gradient(#4E3022, #161616)', 'radial-gradient(#4E4342, #161616)'];
        let current = 0;
        let scrollSlide = 0;


        slides.forEach((slide, index) => {
            slide.addEventListener("click", function () {
                changeDots(this)
                nextSlide(index)
            })
        })

        function changeDots(dot) {
            slides.forEach(slide => {
                slide.classList.remove("active")
            })
            dot.classList.add("active")
        }

        function nextSlide(pageNumber) {
            const nextPage = pages[pageNumber];
            const currentPage = pages[current];
            const nextLeft = nextPage.querySelector(".hero .model-left")
            const nextRight = nextPage.querySelector(".hero .model-right")
            const currentLeft = currentPage.querySelector(".hero .model-left")
            const currentRight = currentPage.querySelector(".hero .model-right")
            const nextText = nextPage.querySelector(".details")
            const portfolio = document.querySelector(".portfolio")

                portfolio.style.backgroundImage = backgrounds[pageNumber]
                gsap.fromTo(currentLeft, 0.3, {y: "-10%"}, {y: "-100%"})
                gsap.fromTo(currentRight, 0.3, {y: "10%"}, {y: "-100%"}, "-=0.2")
                gsap.fromTo(currentPage, 0.3, {opacity: 1, pointerEvents: "all"}, {opacity: 0, pointerEvents: "none"})
                gsap.fromTo(nextPage, 0.3, {opacity: 0, pointerEvents: "none"}, {opacity: 1, pointerEvents: "all"}, "-=0.6")

                gsap.fromTo(nextText, 0.3, {opacity: 0, y: 30}, {opacity: 1, y: 0})

                gsap.set(nextLeft, {clearProps: "all"})
                gsap.set(nextRight, {clearProps: "all"})
                current = pageNumber
        }

        document.addEventListener('wheel', throttle(scrollChange, 1500))
        document.addEventListener('touchmove', throttle(scrollChange, 1500))


        function swichDots(dotNumber) {
            const activeDot = document.querySelectorAll(".slide")[dotNumber]
            slides.forEach(slide => {
                slide.classList.remove("'active'")
            })
            activeDot.classList.add("active")
        }

        function scrollChange(e) {
            if (e.deltaY > 0) {
                scrollSlide += 1
            } else {
                scrollSlide -= 1
            }
            if (scrollSlide > 2) {
                scrollSlide = 0
            }
            if (scrollSlide < 0) {
                scrollSlide = 2
            }
            swichDots(scrollSlide)
            nextSlide(scrollSlide)
            console.log(scrollSlide)
        }
    }

    function throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit)
            }
        };
    }
        init()

    })



    return (
        <div className="portfolio">
            <div className="header">
                <div className="nav">
                    <h3 className="logo">Dimitri Marco</h3>
                    <svg width="43" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.5" x2="43" y2="1.5" stroke="white" stroke-width="3"></line>
                        <line y1="11.5" x2="28" y2="11.5" stroke="white" stroke-width="3"></line>
                        <line y1="21.5" x2="16" y2="21.5" stroke="white" stroke-width="3"></line>
                    </svg>
                </div>
            </div>
            <div className="main">
                <section className="page photographer">
                    <div className="details">
                        <h1>Elena Morell</h1>
                        <h2>Photographer</h2>
                        <p>02/08/2018</p>
                    </div>
                    <div className="hero">
                        <Link to="/Photograph">
                            <img className="model-left" src={modelLeft} alt=""/>
                            <img className="model-right" src={modelRight} alt=""/>
                        </Link>
                    </div>
                </section>
                <section className="page chef">
                    <div className="details">
                        <h1>John Saves</h1>
                        <h2>Pro Chef</h2>
                        <p>02/02.2013</p>
                    </div>
                    <div className="hero">
                        <Link to="/Chef">
                            <img className="model-left" src={chefLeft} alt=""/>
                            <img className="model-right" src={chefRight} alt=""/>
                        </Link>
                    </div>
                </section>
                <section className="page hairstyle">
                    <div className="details">
                        <h1>Jon Mayer</h1>
                        <h2>Pro Hairstyle</h2>
                        <p>02/02/2011</p>
                    </div>
                    <div className="hero">
                        <Link to="/Barber">
                            <img className="model-left" src={hairLeft} alt=""/>
                            <img className="model-right" src={hairRight} alt=""/>
                        </Link>
                    </div>
                </section>
                <div className="pages">
                    <div className="page-1">
                        <h3>01</h3>
                        <svg className="slide active"
                             width="12"
                             height="12"
                             viewBox="0 0 12 12"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"></circle>
                        </svg>
                    </div>
                    <div className="page-2">
                        <h3>02</h3>
                        <svg className="slide"
                             width="12"
                             height="12"
                             viewBox="0 0 12 12"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"></circle>
                        </svg>
                    </div>
                    <div className="page-3">
                        <h3>03</h3>
                        <svg className="slide "
                             width="12"
                             height="12"
                             viewBox="0 0 12 12"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="white"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pages;
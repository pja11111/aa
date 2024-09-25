import React from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss"; 
import HomeInfromBox from "./HomeInfromBox";
import { productData } from "../../components/corousel/data";
import ProductsCarousel from "../../components/corousel/Carousel";
import CarouselItem from "../../components/corousel/CarouselItem";
import ProductCategory from "./ProductCategory";
import FooterLinks from "../../components/footer/FooterLinks";



const  PageHeading = ({heading, btnText}) => {
    return (
        <>
            <div className="--flex-between">
                <h2 className="--fw-thin">{heading}</h2>
                <button className="--btn">
                    {btnText}
                </button>
            </div>
            <div className="--hr"></div>
        
        </>
    )
};

const Home = () => {
    const productss = productData.map((item)=> (
        <div key={item.id}>
            <CarouselItem
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
            />
        </div>
    ))
    return (
        <>
            <Slider/>
            <section>
                <div className="container">
                    <HomeInfromBox />
                    <PageHeading heading={"สินค้าใหม่ล่าสุด"} btnText={"Shop Now>>>"}/>
                    <ProductsCarousel products={productss} />
                </div>
            </section>
            <section className="--bg-grey">
                <div className="container">
                 <h3>Categories</h3>
                   <ProductCategory/> 
                </div>
            </section>

            <section>
                <div className="container">
                    <PageHeading heading={"Manga"} btnText={"Shop Now>>>"}/>
                    <ProductsCarousel products={productss} />
                </div>
            </section>

            <section>
                <div className="container">
                    <PageHeading heading={"Light Novel"} btnText={"Shop Now>>>"}/>
                    <ProductsCarousel products={productss} />
                </div>
            </section>

            <FooterLinks/>

            
        </>
    )
}

export default Home;
import {useEffect, useState} from "react";
import Product from "../components/Product";
import {initMongoose} from "../lib/mongoose";
import {findAllProducts} from "./api/products";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Slider from "../components/Slider.js";


export default function Home({products}) {
  const [phrase,setPhrase] = useState('');

  const categoriesNames = [...new Set(products.map(p => p.category))];

  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase));
  }

  return (
    <Layout>
      <nav class="bg-white border-gray-200 dark:bg-gray-900  ">
    <div
      class="max-w-screen-xl flex flex-wrap justify-between items-center py-4 mx-10  "
    >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Everse</span
        >
      <div
      class="items-center  justify-center hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul
        class="flex flex-row font-medium p-4 md:p-0 space-x-8 "
      >
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            aria-current="page"
            >MEN</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >WOMEN</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >HOME & LIVING</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >BEAUTY</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >ELECTRONICS</a
          >
        </li>
      </ul>
    </div>
    <div
      class="items-center justify-end  hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul
        class="flex flex-row font-medium p-4 md:p-0 space-x-8 "
      >
        <li>
        <input type="text" placeholder="Search for products..." className=" bg-gray-200 w-full px-4 py-1 rounded-xl"/>
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
            >Sign Up</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >Log In</a
          >
        </li>
       
      </ul>
    </div>
    </div>
  </nav>



  <div>
  <div class="swiper-container main-slider loading">
  <div class="swiper-wrapper">
  <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Shaun Matthews</p>
        <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Alexis Berry</p>
        <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Billie	Pierce</p>
        <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Trevor	Copeland</p>
        <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Bernadette	Newman</p>
        <span class="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
      </div>
    </div>
    </div>
  
  <div class="swiper-button-prev swiper-button-white"></div>
  <div class="swiper-button-next swiper-button-white"></div>
</div>
  </div>




<div>
<div class="swiper-container nav-slider loading">
  <div class="swiper-wrapper" role="navigation">
<div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Shaun Matthews</p>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Alexis Berry</p>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1465408953385-7c4627c29435?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Billie	Pierce</p>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTkzNg&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Trevor	Copeland</p>
      </div>
    </div>
    <div class="swiper-slide">
      <figure class="slide-bgimg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85)`}}>
        <img src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTk1OQ&ixlib=rb-1.2.1&q=85" class="entity-img" />
      </figure>
      <div class="content">
        <p class="title">Bernadette	Newman</p>
      </div>
    </div>
    </div>
</div>
</div>



      <div className="mx-10">
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className=" bg-gray-200 w-full py-2 px-5 my-5 rounded-xl"/>
      </div>
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl ml-6 py-5 capitalize">{categoryName}</h2>
                <div className="flex mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </Layout>
  )
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

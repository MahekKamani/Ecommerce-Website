import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image"
            src="https://m.media-amazon.com/images/I/617pSVtbf3L._SX3000_.jpg" alt=""/>

            <div className='home_row'>
              <Product id="01" title="Ikigai" price={19.99} image="Ikigai.jpg" rating={5}/>
              <Product id="02" title="Atomic Habits" price={24.99} image="atomichabits.jpg" rating={5}/>
              <Product id="03" title="Secret" price={29.99} image="secret.jpg" rating={5}/>
            </div>

            <div className='home_row'>
              <Product id="04" title="Apple" price={1099.99} image="apple13promax.jpg" rating={5}/>
              <Product id="05" title="Apple" price={1999.99} image="macbookair.jpg" rating={5}/>
              <Product id="06" title="Sony" price={74.99} image="sonyheadset.jpg" rating={5}/>
            </div>

            <div className='home_row'>
              <Product id="07" brand="Ray Ban" title="Ray Ban" price={19.99} image="sunglasses.webp" rating={5}/>
              <Product id="08" brand="Titen" title="Titen" price={24.99} image="titenwatch.jpg" rating={5}/>
              <Product id="09" brand="Nike" title="Nike" price={29.99} image="nikeshoes.jpg" rating={5}/>
            </div>

        </div>
    </div>
  )
}

export default Home;
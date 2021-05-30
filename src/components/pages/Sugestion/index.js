import React from 'react';
import Carousel from 'react-elastic-carousel';
import ItemCarousel from '../../ItemCarousel';
import './index.css';

const Sugestion = (props) => {

    const breakPoints = [
        {width: 1, itemToShow: 1},
        {width: 550, itemToShow: 2},
        {width: 768, itemToShow: 3},
        {width: 1200, itemToShow: 4}
    ]

    let images = [];

    if(props.objetivo === "0"){
        images = [
            {name: "WHEY PROTEIN",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new.png", alt: "whey", class: "product-size-w", key: "1"},
            {name: "MULTIVITAMÍNICO",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/multivitaminico-84g.webp", alt: "multivitaminico", class: "product-size-m", key: "2"},
            {name: "CREATINA",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/70/creatina.webp", alt: "creatina", class: "product-size-cr", key: "3"},
            {name: "CAFEÍNA",src:"https://www.gsuplementos.com.br/upload/produto/imagem/b_cafe-na-210mg-120-caps-growth-supplements-thermog-nico.jpg", alt: "cafeina", class: "product-size-ca", key: "4"},
        ]
    }
    else if(props.objetivo === "1"){
        images = [
            {name: "WHEY PROTEIN",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new.png", alt: "whey", class: "product-size-w", key: "1"},
            {name: "MULTIVITAMÍNICO",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/multivitaminico-84g.webp", alt: "multivitaminico", class: "product-size-m", key: "2"},
            {name: "CREATINA",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/70/creatina.webp", alt: "creatina", class: "product-size-cr", key: "3"},
        ]
    }
    else{
        images = [
            {name: "WHEY PROTEIN",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new.png", alt: "whey", class: "product-size-w", key: "1"},
            {name: "MULTIVITAMÍNICO",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/multivitaminico-84g.webp", alt: "multivitaminico", class: "product-size-m", key: "2"},
            {name: "CREATINA",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/70/creatina.webp", alt: "creatina", class: "product-size-cr", key: "3"},
            {name: "HIPERCALÓRICO",src:"https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/82/hipercalorico-1kg.webp", alt: "hipercalorico", class: "product-size-h", key: "5"},
        ]
    }


   

    const listItems = images.map((item) => {
        return <ItemCarousel key={item.key}>
            <div className="product-img-text">
                <img src={item.src} alt={item.alt} className={item.class}/>
                <div className="product">
                    <h6>{item.name}</h6>
                </div>
            </div>
        </ItemCarousel>
    });
    
    return (
        <>
            <h2 className="products-recomm-text">Sugestão de suplementos</h2>
            <div className="recommendation-products">
                <Carousel breakPoints={breakPoints}>


                    {listItems}
                    
                    
                </Carousel>
            </div>
        </>
    );
}

export default Sugestion;
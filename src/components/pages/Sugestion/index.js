import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import ItemCarousel from '../../ItemCarousel';
import './index.css';

class Sugestion extends Component{

    breakPoints = [
        {width: 1, itemToShow: 1},
        {width: 550, itemToShow: 2},
        {width: 768, itemToShow: 3},
        {width: 1200, itemToShow: 4},
    ]
    
    render(){
        return (
            <>
                <h2 className="products-recomm-text">Sugestão de suplementos</h2>
                <div className="recommendation-products">
                    <Carousel breakPoints={this.breakPoints}>
                        <ItemCarousel><div className="product-img-text">
                            <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new.png" alt="whey" className="product-size-w"/>
                            <div className="product">
                                <h6>WHEY PROTEIN</h6>
                            </div>
                            
                        </div></ItemCarousel>
                        <ItemCarousel><div className="product-img-text">
                            <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/multivitaminico-84g.webp" alt="multivitaminico" className="product-size-m"/>
                            <div className="product">
                                <h6>MULTIVITAMÍNICO</h6>
                            </div>
                        </div></ItemCarousel>
                        <ItemCarousel><div className="product-img-text">
                            <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/70/creatina.webp" alt="creatina" className="product-size-cr"/>
                            <div className="product">
                                <h6>CREATINA</h6>
                            </div>
                        </div></ItemCarousel>
                        <ItemCarousel><div className="product-img-text">
                            <img src="https://www.gsuplementos.com.br/upload/produto/imagem/b_cafe-na-210mg-120-caps-growth-supplements-thermog-nico.jpg" alt="cafeina" className="product-size-ca"/>
                            <div className="product">
                                <h6>CAFEÍNA</h6>
                            </div>
                        </div></ItemCarousel>
                        <ItemCarousel><div className="product-img-text">
                            <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/82/hipercalorico-1kg.webp" alt="hipercalorico" className="product-size-h"/>
                            <div className="product">
                                <h6>HIPERCALÓRICO</h6>
                            </div>
                        </div></ItemCarousel>
                    </Carousel>
                </div>
            </>
        );
    }
}

export default Sugestion;
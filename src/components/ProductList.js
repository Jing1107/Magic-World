import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
import styled from 'styled-components';

import { render } from 'react-dom';
import BGM from 'react-awesome-snippets-bgm';
import bgmp3 from './img/BGM.mp3';

export default class ProductList extends Component {

  state = {
    products: storeProducts
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Magic" title="World" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map( product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <BGM src={bgmp3}>{({ playing }) => <div className={playing ? 'playing' : 'paused'} />}</BGM>,
        document.getElementById('root')
      </React.Fragment>
    )
  }
}

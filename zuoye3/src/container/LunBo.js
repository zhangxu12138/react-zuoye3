import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'

export default class LunBo extends Component {
  state = {
    data: ['1', '2'],
    imgHeight: 400,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['9.jpg', '9.jpg'],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={false}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%' }}
            >
              {/* 这这这，找不到两个一样大的图，就用一样的了 */}
              <img
                src={`img/${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: '200px' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

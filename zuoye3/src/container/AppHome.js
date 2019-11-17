import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import Carousel from './LunBo'
import GongGe from './GongGe'
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}>住吧家居</NavBar>
                <Carousel/>
                <GongGe/>
                <div style={{height:'100%',width:'100%'}}>
                    <p>热门推荐</p>
                    <img src='img/10.jpg' style={{height:'100%',width:'100%'}} />
                </div>
            </div>
        )
    }
}

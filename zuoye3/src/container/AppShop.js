import React, { Component } from 'react'
import { NavBar,Icon,WingBlank,SearchBar } from 'antd-mobile';
import { WhiteSpace, Grid } from 'antd-mobile';
import Carousel from './LunBo'

var arry = ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类']
const data = Array.from(new Array(10)).map((val,i) => ({
    icon: `img/${i+16}.png`,
    text:`${arry[i]}`,
  }));

  var arry2 = ['Too Art Studio','顺顺工艺欧式风格']
  const data1 = Array.from(new Array(2)).map((val,i) => ({
    icon: `img/${i+26}.jpg`,
    text:`${arry2[i]}`,
  }));
export default class AppShop extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#eeee'}}>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <Icon key='0' type='search' style={{marginRight:'16px'}} />
                ]}
                >商城</NavBar>
                <SearchBar placeholder="输入关键字搜索" maxLength={8} />
                <Carousel />
                <WhiteSpace/>
                    <WingBlank>
                    <Grid data={data} columnNum={5} />
                </WingBlank>
                <WingBlank>
                    <Grid data={data1}
                        columnNum={2}
                        renderItem={dataItem => ( 
                            <div style={{  }}>
                            <img src={dataItem.icon} style={{ width: '97%', height: '97%' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                            </div>
                        )}
                    />
                </WingBlank>
            </div>
        )
    }
}

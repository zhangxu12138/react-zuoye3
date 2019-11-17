import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { WingBlank, WhiteSpace } from 'antd-mobile';

const data = Array.from(new Array(3)).map((val,i) => ({
    icon: `img/${i+11}.jpg`,
  }));
  
  
export default class GongGe extends Component {
    render() {
        return (
            <div>
                <WhiteSpace/>
                    <WingBlank>
                    <Grid data={data}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{position:'absolute',top:'0',width:'100%'}}>
                            <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                        </div>
                    )}
                    />

                </WingBlank>
                
            </div>
        )
    }
}

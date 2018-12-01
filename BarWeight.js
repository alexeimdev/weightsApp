'use strict'
import React, { Component } from 'react';
import CustomImage from './CustomImage';
import {connect} from 'react-redux';

import {
    Image,TouchableOpacity,View,Text,Dimensions,ImageBackground
} from 'react-native';
import {
    Card
} from 'react-native-paper';

class BarWeight extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);

        this.state = {
            weight :{
                wlb: "",
                wkg: "",
                wplate: ""
            }

        };
        this.onChooseWeight = this.onChooseWeight.bind(this);
    }

    onChooseWeight(key) {
        const w_foraction = this.state.weight;
        let wkg,wlb,wpalte = '';




    }



    CalcRow(calc,index) {
        let ind = index;
        let key = calc.wlb;
        switch(key) {
            case 10: {
                return  <View><CustomImage imgkey={key} imageName={require('./img/10lb.png')} bU='1'/></View>
            }
            case 15: {
                return  <View><CustomImage imgkey={key} imageName={require('./img/15lb.png')} bU='1'/></View>
            }
            case 25: {
                return  <View><CustomImage imgkey={key} imageName={require('./img/25lb.png')} bU='1'/></View>
            }
            case 35: {
                return  <View><CustomImage imgkey={key} imageName={require('./img/35lb.png')} bU='1'/></View>
            }
            case 45: {
                return  <View><CustomImage imgkey={key} imageName={require('./img/45lb.png')} bU='1'/></View>

            }
            default: {
                return <View><Text>barweight</Text></View>
            }
        }


    }
     render() {
        return (

        <View style={{ alignItems: 'center', justifyContent: 'center'}}>

                <ImageBackground source={require('./img/bb.png')} style={{width:350, height: 100}}>
                    <View style={styles.view}>
                        {this.props.calcReducer.map(this.CalcRow)}
                    </View>
                </ImageBackground>

        </View>
        );

    }
};
/*
const aa  = {

                    }*/
const styles = {
    view: {
        flexDirection:'row-reverse',
        marginStart:75
    },

    image: {
        width:85
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

        fontSize: 18,
        textAlign: 'center'
    },
    cardStyle : {
        width: Dimensions.get('window').width - 50,
        height:100,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    }
}

function mapStateToProps(state,ownProps) {
    return {
        currWeight:state.currWeight,
        calcReducer: state.calcReducer
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(BarWeight);



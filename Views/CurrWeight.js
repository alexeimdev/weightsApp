
import React, { Component } from 'react';
import CustomImage from './CustomImage';
import {connect} from 'react-redux';

import { Text,View
} from 'react-native';


export default class CurrWeight extends React.Component {
    render () {
        let kg = Number.parseFloat(this.props.curkg) + Number.parseFloat(this.props.brb.barbell);
        let lb = Number.parseFloat((Number.parseFloat(this.props.brb.barbell)*(2.2).toFixed(2)) + Number.parseFloat(this.props.curlb)).toFixed(2);

        return (
            <View style={{ flexDirection:'row-reverse',flex:1}}>
                <View style={styles.currWeightTextViewKG}>
                    <Text style={styles.currWeightText}>{kg} kg</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentsHeaders}>80%</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentsHeaders}>70%</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentsHeaders}>60%</Text></View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercents}>{Number.parseFloat(kg*0.8).toFixed(2)}</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercents}>{Number.parseFloat(kg*0.7).toFixed(2)}</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercents}>{Number.parseFloat(kg*0.6).toFixed(2)}</Text></View>
                    </View>
                </View>
                <View style={styles.currWeightTextView}>
                    <Text style={styles.currWeightText}>{lb} lb</Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentsHeaderskg}>80%</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentsHeaderskg}>70%</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentsHeaderskg}>60%</Text></View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentskg}>{Number.parseFloat(lb*0.8).toFixed(2)}</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentskg}>{Number.parseFloat(lb*0.7).toFixed(2)}</Text></View>
                        <View style={{flex:1,textAlign:'center',alignItems: 'center'}}><Text style={styles.currWeightTextPercentskg}>{Number.parseFloat(lb*0.6).toFixed(2)}</Text></View>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = {

    currWeightTextView : {
        flex:0.5,
        height:100,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor:'#0056b3'
    },
    currWeightText: {
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        height:65
    },
    currWeightTextPercents: {
        color:'#0056b3',
        fontSize:15,
        fontWeight:'bold',    
    },
    currWeightTextPercentsHeaders: {
        color:'red',
        fontWeight:'bold',
        fontSize:15,
    },
    currWeightTextPercentskg: {
        color:'#0cdabf',
        fontSize:15,
        fontWeight:'bold',    
    },
    currWeightTextPercentsHeaderskg: {
        color:'red',
        fontWeight:'bold',
        fontSize:15,
    },
    currWeightTextViewKG: {
        flex:0.5,
        height:100,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor:'#0cdabf'
    }
}

/*
//<editor-fold desc="Old">
'use strict'
import React, { Component } from 'react';
import CustomImage from './CustomImage';
import {connect} from 'react-redux';

import  {View,Text,Dimensions,ImageBackground
} from 'react-native';


class CurrWeight extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);


    }


    render() {
        return (

            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text>

                </Text>
            </View>
        );

    }
};
/!*
const aa  = {

                    }*!/


function mapStateToProps(state,ownProps) {
    return {
        currWeight:state.currWeight,
        calcReducer: state.calcReducer
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(CurrWeight);
//</editor-fold>
*/



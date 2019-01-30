
import React, { Component } from 'react';
import CustomImage from './CustomImage';
import {connect} from 'react-redux';

import { Text,View
} from 'react-native';


export default class CurrWeight extends React.Component {
    render () {
        let kg = Number.parseFloat(this.props.curkg) + Number.parseFloat(this.props.brb.barbell);
        debugger;
        let lb = Number.parseFloat((Number.parseFloat(this.props.brb.barbell)*(2.2).toFixed(2)) + Number.parseFloat(this.props.curlb)).toFixed(2);

        return (
            <View style={{ flexDirection:'row-reverse',flex:1}}>
                <View style={styles.currWeightTextViewKG}>
                    <Text style={styles.currWeightText}>{kg} kg</Text>
                </View>
                <View style={styles.currWeightTextView}>
                    <Text style={styles.currWeightText}>{lb} lb</Text>
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

        backgroundColor:'red'
    },
    currWeightText: {
        color:'white',
        fontWeight:'bold',
        fontSize:25
    },
    currWeightTextViewKG: {
        flex:0.5,
        height:100,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor:'blue'
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



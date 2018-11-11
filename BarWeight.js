'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
    Image,TouchableOpacity,View,Text
} from 'react-native';

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
        switch(key) {
            case '1': {
                wkg = (10/2.2);
                wlb = 10;
                wpalte = '10lb';
                break;
            }
            case '2': {
                wkg = (15/2.2);
                wlb = 15;
                wpalte = '15lb';
                break;
            }
            case '3': {
                wkg = (25/2.2);
                wlb = 25;
                wpalte = '25lb';
                break;
            }
            case '4': {
                wkg = (35/2.2);
                wlb = 35;
                wpalte = '35lb';
                break;
            }
            case '2': {
                wkg = (45/2.2);
                wlb = 45;
                wpalte = '45lb';
                break;
            }
            default: {
                //statements;
                break;
            }
        }
        w_foraction.wkg = wkg;
        w_foraction.wlb = wlb;
        w_foraction.wplate = wpalte;

        this.props.dispatch(calcWeight.CalcWeight(w_foraction));
    }

    CalcRow(calc,index) {

        return <View style={styles.view}><Text key={index} style={styles.headerStyle}>{calc.wplate}</Text><Text key={index} style={styles.headerStyle}>{calc.wplate}</Text></View>


    }

    render() {
        return (
            <View>
                {this.props.weight.map(this.CalcRow)}
            </View>

        );

    }
};


const styles = {
    view: {
        flexDirection:'row'
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
    }
}

function mapStateToProps(state,ownProps) {
    return {
        weight: state.weight
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(BarWeight);



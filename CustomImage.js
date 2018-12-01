'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcWeight from './actions/calcActions';

import {
    Image,TouchableOpacity
} from 'react-native';

class CustomImage extends Component {
    constructor(props, context) {
        super(props, context);
        console.log('props' + props);

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
        switch(String(key)) {
            case '10': {
                wkg = (10/2.2);
                wlb = 10;
                wpalte = '10lb';
                break;
            }
            case '15': {
                wkg = (15/2.2);
                wlb = 15;
                wpalte = '15lb';
                break;
            }
            case '25': {
                wkg = (25/2.2);
                wlb = 25;
                wpalte = '25lb';
                break;
            }
            case '35': {
                wkg = (35/2.2);
                wlb = 35;
                wpalte = '35lb';
                break;
            }
            case '45': {
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
        let w_kg_all = Number.parseFloat(wkg).toFixed(2) == undefined ? '0':(Number.parseFloat(wkg).toFixed(2))*2;
        this.props.dispatch(calcWeight.CalcWeight(w_foraction));
        this.props.dispatch(calcWeight.ReCalc(w_kg_all));
    }

    render() {

        return (

            <TouchableOpacity style={styles.touchable} onPress={() => this.onChooseWeight(this.props.imgkey)}>
                <Image
                    key={this.props.imgkey}
                    source={this.props.imageName}
                   />
            </TouchableOpacity>
        );

    }
};


const styles = {

    view: {
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    image: {
        width:18
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
        currWeight:state.currWeight,
        calcReducer: state.calcReducer
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(CustomImage);



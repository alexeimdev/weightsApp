'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcWeight from '../actions/calcActions';

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

    onChooseWeight(key,isBu) {

        console.log('isBu=' + isBu);
        const w_foraction = this.state.weight;
        if(isBu == 99) {
            let barbell = parseInt(key.substr(0,key.length-2));
            this.props.dispatch(calcWeight.ChangeBarBell(barbell));

        }
        else
        {
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
                case '55': {
                    wkg = (55/2.2);
                    wlb = 55;
                    wpalte = '55lb';
                    break;
                }
                case '2': {
                    wlb = (20*2.2);
                    wkg = 20;
                    wpalte = '2kg';
                    break;
                }
                case '1': {
                    wlb = (10*2.2);
                    wkg = 10;
                    wpalte = '1kg';
                    break;
                }
                case '5': {
                    wlb = (5*2.2);
                    wkg = 5;
                    wpalte = '5kg';
                    break;
                }
                case '11': {
                    wlb = (1.25*2.2);
                    wkg = 1.25;
                    wpalte = '11kg';
                    break;
                }
                case '22': {
                    wlb = (2.5*2.2);
                    wkg = 2.5;
                    wpalte = '22kg';
                    break;
                }
                default: {
                    //statements;
                    break;
                }
            }
            w_foraction.wkg = Number.parseFloat(wkg).toFixed(2);
            w_foraction.wlb = wlb;
            w_foraction.wplate = wpalte;
            let w_kg_all = Number.parseFloat(wkg).toFixed(2) == undefined ? '0':(Number.parseFloat(wkg).toFixed(2))*2;

            if(isBu == '0') {
                console.log('isBuFor=' + isBu)
                this.props.dispatch(calcWeight.CalcWeight(w_foraction));
                this.props.dispatch(calcWeight.ReCalc(w_kg_all));
            }
            else {
                console.log('isBuElse=' + isBu)
                this.props.dispatch(calcWeight.DelWeight(w_foraction));
                this.props.dispatch(calcWeight.ReCalcREM(w_kg_all));
            }
        }

    }

    render() {

        let imgkey = this.props.bU == '99'?parseInt(this.props.imgkey.substr(0,this.props.imgkey.length-2)):99;
        return (

            <TouchableOpacity style={[styles.touchable , [(imgkey == this.props.currBarbell.barbell) ? styles.barbellViewSelected:styles.barbellView]]} onPress={() => this.onChooseWeight(this.props.imgkey,this.props.bU)}>
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
    },
    barbellViewSelected: {

        borderStyle:'solid',
        borderBottomWidth :5,
        borderBottomColor: 'red',
        borderBottomEndRadius:40,
        borderBottomStartRadius:25

    },
    barbellView: {

    },
}

function mapStateToProps(state,ownProps) {
    return {
        currWeight:state.currWeight,
        calcReducer: state.calcReducer,
        currBarbell:state.currBarbell

    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(CustomImage);



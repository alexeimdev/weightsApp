
import React, { Component } from 'react';
import CustomImage from './CustomImage';
import {connect} from 'react-redux';

import { Text,View
} from 'react-native';


export default class CurrWeight extends React.Component {
    render () {
        return (
            <View style={{ flexDirection:'row-reverse'}}>
                <Text>{this.props.curkg} kg</Text>
                <Text>{this.props.curlb} lb</Text>
            </View>
        )
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
export default connect(mapStateToProps)(CurrWeight);
//</editor-fold>
*/



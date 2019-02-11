'use strict'
import React, { Component } from 'react';

import {
    Image,Text,View,TouchableOpacity
} from 'react-native';

export default class Header extends Component {
    constructor(props, context) {
        super(props, context);
        console.log('props' + props);

    }

    render() {


        return (
            <View style={styles.container}>
                <Text style={styles.headerStyle}>EasyWeights</Text>
                <TouchableOpacity style={styles.orange_box} onPress={this.props.openHamburger}>
                    <Image style={styles.imgst} source={require('../../img/hburger.png')} />
                </TouchableOpacity>
            </View>



        );

    }
};


const styles = {
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 15
    },
    orange_box: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    imgst: {
        width:40,
        height:40
    },
    container: {
       paddingTop:10
    }
}


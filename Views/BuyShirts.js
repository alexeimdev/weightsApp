'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcActions from '../actions/calcActions';


import {
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';

class BuyShirts extends Component{
    constructor(props,context){
        super(props,context);

    }

    static navigationOptions = {
        header: null
    };



    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );

    }
};

const styles = {
    container: {
        marginTop: 48,
        flex: 1
    },
}

function mapStateToProps(state,ownProps) {
    return {
        weight: state.weight
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(BuyShirts);
'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './shared/Header';

import {
    StyleSheet,
    View,
    ActivityIndicator,
    Dimensions,TouchableOpacity,Text,Image,
} from 'react-native';

class SavedLifts extends Component{
    constructor(props,context){
        super(props,context);
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {
       
    }
    static navigationOptions = {
        header: null
    };

    showMenu() {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View style={styles.uppcontainer}>
                <Header openHamburger={this.showMenu}/>

            </View>
        );

    }
};

const styles = {
    container: {
        flex: 1,
    },
    uppcontainer: {
        flex:1,
    }
}

function mapStateToProps(state,ownProps) {
    return {
        rounds: state.rounds
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(SavedLifts);

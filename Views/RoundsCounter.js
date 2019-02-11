'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as roundsActions from '../actions/roundsActions';
import Header from './shared/Header';

import {
    StyleSheet,
    View,
    ActivityIndicator,
    Dimensions,TouchableOpacity,Text,Image,
} from 'react-native';

class RoundsCounter extends Component{
    constructor(props,context){
        super(props,context);

        this.addcounter = this.addcounter.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    addcounter() {
       this.props.dispatch(roundsActions.AddRound(this.props.rounds.round));
    }

    showMenu() {
        this.props.navigation.openDrawer();
    }


    render() {
        return (
            <View style={styles.uppcontainer}>
                <Header openHamburger={this.showMenu}/>

                    <View style={styles.container}>
                    <TouchableOpacity onPress={this.addcounter}  style={{flex:1}}>
                        <View style={{position: 'relative', top: 48, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>

                            <Image source = {require('../img/bgpic.png')} key="rounds" style={styles.roundsImage} />
                            <Text style={styles.counterText}>{this.props.rounds.round}</Text>
                        </View>
                    </TouchableOpacity>

                    </View>

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
    },
    counterText: {
        fontSize:300,
        color:'red',
        position:'absolute',


    },
    roundsImage : {
       height:Dimensions.get('window').height
    }
}

function mapStateToProps(state,ownProps) {
    return {
        rounds: state.rounds
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(RoundsCounter);
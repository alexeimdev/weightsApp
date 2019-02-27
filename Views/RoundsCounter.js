'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as roundsActions from '../actions/roundsActions';
import Header from './shared/Header';
import KeepAwake from 'react-native-keep-awake';

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
        this.resetCounter = this.resetCounter.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {
        KeepAwake.activate();
    }
    static navigationOptions = {
        header: null
    };

    addcounter() {
        this.props.dispatch(roundsActions.AddRound(this.props.rounds.round));
    }

    resetCounter() {
        this.props.dispatch(roundsActions.ResetRound(this.props.rounds.round));
    }
    
    showMenu() {
        this.props.navigation.openDrawer();
    }

    changeKeepAwake(shouldBeAwake) {
        if (shouldBeAwake) {
            KeepAwake.activate();
        } else {
            KeepAwake.deactivate();
        }
    }

    render() {
        return (
            <View style={styles.uppcontainer}>
                <Header openHamburger={this.showMenu}/>

                <View style={{flexDirection:'row',height:50}}>
                    <TouchableOpacity onPress={this.resetCounter}  style={{flex:1,backgroundColor:'#0cdabf',justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:30}}>Reset</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.addcounter}  style={{flex:1}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
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
        color:'#0cdabf',
        position:'absolute',


    },
    roundsImage : {
        height:'100%'
    }
}

function mapStateToProps(state,ownProps) {
    return {
        rounds: state.rounds
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(RoundsCounter);

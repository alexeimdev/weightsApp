'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcActions from '../actions/calcActions'
import CustomImage from './CustomImage';
import BarWeight from './BarWeight';
import CurrWeight from './CurrWeight';
import Header from './shared/Header';

import {
    Text,
    StyleSheet,
    Image,
    View,
    ActivityIndicator,
    Button,
    NavigatorIOS,
    Dimensions
} from 'react-native';


class MainPage extends Component{
    constructor(props,context){
        super(props,context);

        this.showMenu = this.showMenu.bind(this);

    }

    static navigationOptions = {
        header: null
    };
    
    showMenu() {
        this.props.navigation.openDrawer();
    }


    render() {

        let curr = this.props.currWeight.currW;
        let brb = this.props.currBarbell;
        let ckg = curr;
        let clb = Number.parseFloat((curr*2.2)).toFixed(2) == undefined ? '0':Number.parseFloat((curr*2.2)).toFixed(2);

         return (
             <View style={styles.uppcontainer}>
                <Header openHamburger={this.showMenu}/>
                <View style={styles.container}>

                <View style = {styles.backgroundContainer}>
                    <Image source = {require('../img/bgpic.png')} resizeMode = 'cover' style = {styles.backdrop} />
                </View>
                <View style = {styles.overlay}>
                    <View style={[{flex: 1}, styles.elementsContainer]}>
                        <View style={{flex:1,justifyContent: "center",alignItems: "center" }}>
                            <CurrWeight curkg={ckg} curlb={clb} brb={brb}/>
                        </View>

                        <View style={{flex:1,justifyContent: "center",alignItems: "center" ,flexDirection:'row'}}>
                            <View style={styles.barbellView}><CustomImage imgkey='20kg' imageName={require('../img/20kgbar.png')} bU='99'/></View>
                            <View style={styles.barbellView}><CustomImage imgkey='15kg' imageName={require('../img/15kgbar.png')} bU='99'/></View>
                            <View style={styles.barbellView}><CustomImage imgkey='10kg' imageName={require('../img/10kgbar.png')} bU='99'/></View>
                            <View style={styles.barbellView}><CustomImage imgkey='5kg' imageName={require('../img/5kgbar.png')} bU='99'/></View>
                        </View>

                        <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                            <BarWeight />
                        </View>

                        <View style={styles.weightsContainer}>
                            <View style={styles.weightsView}><CustomImage imgkey='2' imageName={require('../img/20kg.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='1' imageName={require('../img/10kg.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='5' imageName={require('../img/5kg.png')} bU='0'/></View>
                            <View style={{flexDirection:'column'}}>
                                <View style={styles.weightsView}><CustomImage imgkey='11' imageName={require('../img/1_5kg.png')} bU='0'/></View>
                                <View style={styles.weightsView}><CustomImage imgkey='22' imageName={require('../img/2_5kg.png')} bU='0'/></View>
                            </View>
                        </View>

                        <View style={{flex:1,justifyContent: "center",alignItems: "center" ,flexDirection:'row'}}>
                            <View style={styles.weightsView}><CustomImage imgkey='10' imageName={require('../img/10lb.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='15' imageName={require('../img/15lb.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='25' imageName={require('../img/25lb.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='35' imageName={require('../img/35lb.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='45' imageName={require('../img/45lb.png')} bU='0'/></View>
                            <View style={styles.weightsView}><CustomImage imgkey='55' imageName={require('../img/55lb.png')} bU='0'/></View>
                        </View>

                    </View>
                </View>
            </View>
             </View>
        );

    }
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    uppcontainer: {
        flex:1,
    },
    weightsView: {
        paddingRight:20
    },
    weightsContainer : {
        flex:1,
        justifyContent: "center",
        alignItems: "center" ,
        flexDirection:'row' ,
        width: Dimensions.get('window').width,
        backgroundColor:'#fff'
    },
    barbellView: {
        paddingRight:10
    },
    headerStyle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 5
    },
    MidStyle: {
        fontSize: 36,
        fontWeight: '100',
    },
    elementsContainer: {

        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    overlay: {
        opacity: 1,
    },
    backdrop: {
        flex:1,
        flexDirection: 'column'
    },
    headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
}

function mapStateToProps(state,ownProps) {
    return {
        currWeight:state.currWeight,
        calcReducer: state.calcReducer,
        currBarbell:state.currBarbell
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(MainPage);

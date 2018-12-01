'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcActions from './actions/calcActions';
import CustomImage from './CustomImage';
import BarWeight from './BarWeight';
import CurrWeight from './CurrWeight';

import {
    Text,
    StyleSheet,
    Image,
    View,
    ActivityIndicator,
    Button,
    NavigatorIOS
} from 'react-native';


class MainPage extends Component{
    constructor(props,context){
        super(props,context);

        this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    static navigationOptions = {
        header: null
    };


    onPressLearnMore () {
        console.log(this.props);
        const { navigate } = this.props.navigation;
        navigate('CalcPageRT');
    }


    render() {
        let curr = this.props.currWeight.currW;
        let ckg = curr;
        let clb = Number.parseFloat((curr/2.2)).toFixed(2) == undefined ? '0':Number.parseFloat((curr/2.2)).toFixed(2);
        return (
            <View style={[{flex: 3}, styles.elementsContainer]}>

                <View style={{flex:1,justifyContent: "center",alignItems: "center" , backgroundColor: '#a73232'}}>
                    <CurrWeight curkg={ckg} curlb={clb}/>
                </View>
                <View style={{flex:1,justifyContent: "center",alignItems: "center" , backgroundColor: '#a73232'}}>
                    <BarWeight />
                </View>
              <View style={{flex:1,justifyContent: "center",alignItems: "center" ,flexDirection:'row', backgroundColor: '#a73232'}}>
                   <View style={{paddingRight:30}}><CustomImage imgkey='10' imageName={require('./img/10lb.png')} bU='0'/></View>
                   <View style={{paddingRight:30}}><CustomImage imgkey='15' imageName={require('./img/15lb.png')} bU='0'/></View>
                   <View style={{paddingRight:30}}><CustomImage imgkey='25' imageName={require('./img/25lb.png')} bU='0'/></View>
                   <View style={{paddingRight:30}}><CustomImage imgkey='35' imageName={require('./img/35lb.png')} bU='0'/></View>
                   <View style={{paddingRight:30}}><CustomImage imgkey='45' imageName={require('./img/45lb.png')} bU='0'/></View>
              </View>

            </View>
        );

    }
};

const styles = {
    container: {
        marginTop: 48,
        flex: 1
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
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
}

function mapStateToProps(state,ownProps) {
    return {
        currWeight:state.currWeight,
        calcReducer: state.calcReducer
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(MainPage);

/*
*
*  <View style={{flex:1,justifyContent: "center",alignItems: "center" , backgroundColor: '#FCCDDD'}}>
                <Button style={styles.MidStyle}
                        title="Home" onPress={this.onPressLearnMore}
                />
              </View>
*
* */

'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcActions from './actions/calcActions';
import CustomImage from './CustomImage';
import BarWeight from './BarWeight';

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
        return (
            <View style={[{flex: 3}, styles.elementsContainer]}>
              <View style={{flex:1,justifyContent: "center",alignItems: "center" , backgroundColor: '#FCCDDD'}}>
                <Button style={styles.MidStyle}
                        title="Home" onPress={this.onPressLearnMore}
                />
              </View>
                <View style={{flex:1,justifyContent: "center",alignItems: "center" , backgroundColor: '#FCCDDD'}}>
                    <BarWeight />
                </View>
              <View style={{flex:1,justifyContent: "center",alignItems: "center" ,flexDirection:'row', backgroundColor: '#FAADDD'}}>
                  <CustomImage imgkey='1' imageName={require('./img/10lb.png')}/>
                  <CustomImage imgkey='2' imageName={require('./img/15lb.png')}/>
                  <CustomImage imgkey='3' imageName={require('./img/25lb.png')}/>
                  <CustomImage imgkey='4' imageName={require('./img/35lb.png')}/>
                  <CustomImage imgkey='5' imageName={require('./img/45lb.png')}/>
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
        weight: state.weight
    };
}
//mapDispatchToProps is deleted and dispatch is there by default
export default connect(mapStateToProps)(MainPage);
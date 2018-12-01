'use strict'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as calcActions from './actions/calcActions';


import {
    Text,
    StyleSheet,
    View,
    ActivityIndicator,
    Button,
    NavigatorIOS
} from 'react-native';

class CalcPage extends Component{
    constructor(props,context){
        super(props,context);

        this.onPressLearnMore = this.onPressLearnMore.bind(this);

    }

    static navigationOptions = {
        header: null
    };

    onPressLearnMore () {
        const { navigate } = this.props.navigation;
        navigate('HomeRT');

    }

    CalcRow(calc,index) {

        return <Text key={index} style={styles.headerStyle}>{calc.weightkg} in Kg to {calc.weightlb}</Text>
    }
    render() {
        return (
            <View style={[{flex: 1}, styles.elementsContainer]}>
                <View style={{flex:3,justifyContent: "center",alignItems: "center" , backgroundColor: '#FCCDDD'}}>
                    <Button style={styles.MidStyle}
                            title="Home" onPress={this.onPressLearnMore}
                    />

                    {this.props.weight.map(this.CalcRow)}
                    <Text style={styles.headerStyle}>{this.props.weight.title}</Text>

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
export default connect(mapStateToProps)(CalcPage);
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class CZImagePlaceholder extends Component{

    render() {
        return (
            <View>
                <Text>1111</Text>
                <Image source={require('./images/wechat_icon.png')} style={{width: 50, height: 50}}/>
            </View>
        )
    }
}

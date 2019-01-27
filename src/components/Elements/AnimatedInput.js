import React, { Component } from 'react';
//import { FormInput } from './FormInput';
import { FormInput } from 'react-native-elements';
import { Animated, View } from 'react-native';


class AnimatedInput extends Component {
  constructor(props)   {
    super(props);
    
    this.state = {
      float: false
    };
  }
  
  componentWillMount() {
    this._animateFloat = new Animated.Value(this.props.value === '' ? 0 : 1);
  }
  
  componentDidUpdate() {
    Animated.timing(this._animateFloat, {
      toValue: (this.state.float || this.props.value !== '') ? 1 : 0,
      duration: 500,
    }).start();
  }
  
  render() {
    const defaultLabelStyle = {
      position: 'absolute',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      left: 20,
      top: this._animateFloat.interpolate({ 
        inputRange: [0, 1],
        outputRange: [10, -12]
      }),
      fontSize: this._animateFloat.interpolate({ 
        inputRange: [0, 1],
        outputRange: [22, 16]
      }),
      color: 'darkslategrey'
    };
    const defaultInputStyle = {
        fontSize: 18,
        color: 'darkslategrey',
    };
    const { color, value, label, onChangeText, labelStyle, inputStyle, ...props } = this.props;
    return (
      <View style={{ marginTop: 10, marginBottom: 5 }}>
        <Animated.Text style={{...defaultLabelStyle, ...labelStyle}}>{label}</Animated.Text>
        <FormInput
          inputStyle={{...defaultInputStyle, ...inputStyle }}
          value={value}
          onChangeText={onChangeText}
          onFocus={ () => this.setState({ float: true}) }
          onBlur={ () => !value ? this.setState({ float: false}) : null }
          blurOnSubmit
          {...props}
        />
      </View>
    );
  }
}

export { AnimatedInput };
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

class SwitchToggle extends React.Component {
  static calculateDimensions(size) {
    switch (size) {
      case 'small':
        return {
          width: 50,
          padding: 16,
          circleWidth: 22,
          circleHeight: 22,
          translateX: 28,
        };
      case 'large':
        return {
          width: 100,
          padding: 20,
          circleWidth: 30,
          circleHeight: 30,
          translateX: 38,
        };
      default:
        return {
          width: 60,
          padding: 18,
          circleWidth: 30,
          circleHeight: 30,
          translateX: 34,
        };
    }
  }

  static propTypes = {
    isOn: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onColor: PropTypes.string.isRequired,
    offColor: PropTypes.string.isRequired,
    size: PropTypes.string,
    labelStyle: PropTypes.object,
    onToggle: PropTypes.func.isRequired,
    icon: PropTypes.string,
  };

  static defaultProps = {
    isOn: false,
    onColor: '#634fc9',
    offColor: '#ecf0f1',
    size: 'medium',
    labelStyle: {},
    thumbOnStyle: {},
    thumbOffStyle: {},
    trackOnStyle: {},
    trackOffStyle: {},
    icon: null,
  };

  offsetX = new Animated.Value(0);
  dimensions = SwitchToggle.calculateDimensions(this.props.size);

  createSwitchToggleStyle = () => ({
    justifyContent: 'center',
    width: this.dimensions.width,
    borderRadius: 20,
    padding: this.dimensions.padding,
    backgroundColor: this.props.isOn
      ? this.props.theme.palette.primary.light
      : this.props.theme.palette.secondary.light,
    ...(this.props.isOn ? this.props.trackOnStyle : this.props.trackOffStyle),
  });

  createInsideCircleStyle = () => ({
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    position: 'absolute',
    backgroundColor: 'white',
    transform: [{ translateX: this.offsetX }],
    width: this.dimensions.circleWidth,
    height: this.dimensions.circleHeight,
    borderRadius: this.dimensions.circleWidth / 2,
    ...(this.props.isOn ? this.props.thumbOnStyle : this.props.thumbOffStyle),
  });

  render() {
    const toValue = this.props.isOn ? this.dimensions.width - this.dimensions.translateX : 0;

    Animated.timing(this.offsetX, {
      toValue,
      duration: 300,
    }).start();

    return (
      <View style={styles.container}>
        {this.props.label ? (
          <Text style={[styles.labelStyle, this.props.labelStyle]}>{this.props.label}</Text>
        ) : null}
        <TouchableOpacity
          style={this.createSwitchToggleStyle()}
          activeOpacity={0.8}
          onPress={() => {
            this.props.onToggle(!this.props.isOn);
          }}>
          <Animated.View style={this.createInsideCircleStyle()}>
            <Text>{this.props.icon}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withTheme(SwitchToggle);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    marginHorizontal: 10,
  },
});

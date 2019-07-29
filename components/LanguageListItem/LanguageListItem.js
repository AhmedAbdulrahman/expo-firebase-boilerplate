import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from 'styled-components';
import { Body, Label } from '@components/Text';

class LanguageListItem extends React.Component {
  handleLocaleChange = () => {
    Alert.alert(this.props.t('language_list.change_language'), null, [
      {
        text: this.props.t('language_list.cancel'),
        style: 'cancel',
      },
      {
        text: this.props.t('language_list.ok'),
        onPress: () => this.props.onChangeLocale(this.props.locale),
        style: 'destructive',
      },
    ]);
  };

  render() {
    return (
      <TouchableOpacity style={styles.listItem} onPress={this.handleLocaleChange}>
        <View style={styles.textWrapper}>
          <Body
            style={{
              color: this.props.isActive
                ? this.props.theme.palette.primary.main
                : this.props.theme.palette.text.primary,
            }}>
            {this.props.name}
          </Body>
          {this.props.englishName && (
            <Label style={styles.subtitle}>{this.props.englishName}</Label>
          )}
        </View>
        {this.props.isActive && (
          <Ionicons
            color={this.props.theme.palette.primary.main}
            name="ios-checkmark-circle-outline"
            size={30}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  textWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '90%',
    marginLeft: 10,
  },
  subtitle: {
    color: '#AAAAAA',
  },
});

export default withTheme(LanguageListItem);

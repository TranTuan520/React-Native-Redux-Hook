import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { toggleShow, toggleMemorized } from '../redux/actionsCreator';
export class itemFlatlistComponent extends Component {
  memorized() {
    this.props.toggleMemorized(this.props.item.id);
  }
  render() {
    const {en, vn, memorized} = this.props.item;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const memorizedButtonText = memorized ? 'Forget' : 'Remember';
    return (
      <View
        style={{
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 3,
        }}>
        <Text style={{textDecorationLine}}> {en} </Text>
        <Text> {this.props.item.isShow ? vn : '* * * *'} </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={this.memorized.bind(this)}
            style={{
              borderWidth: 1,
              padding: 2,
              borderRadius: 3,
              width: 100,
              alignItems: 'center',
              marginVertical: 3,
            }}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.toggleShow(this.props.item.id);
            }}
            style={{
              borderWidth: 1,
              padding: 2,
              borderRadius: 3,
              width: 100,
              alignItems: 'center',
              marginVertical: 3,
            }}>
            <Text>show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {myWords: state.arrWords};
}

export default connect(mapStateToProps, {toggleShow, toggleMemorized})(itemFlatlistComponent);

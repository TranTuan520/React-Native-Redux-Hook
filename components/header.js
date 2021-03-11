import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {addWord} from '../redux/actionsCreator';
const header = () => {
  const dispatch = useDispatch();
  const {en, setEn} = useState('');
  const {vn, setVn} = useState('');

  const onAdd = () => {
    const {en, vn} = this.state;
    dispatch(addWord(en, vn));
  };

  return (
    <View
      style={{
        height: 200,
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="en"
        value={en}
        onChangeText={(en) => setEn(en)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 3,
        }}
      />
      <TextInput
        placeholder="vn"
        value={vn}
        onChangeText={(vn) => setVn(vn)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 3,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onAdd();
        }}
        disabled={en === '' || vn === '' ? true : false}
        style={{
          width: '90%',
          height: 50,
          backgroundColor: en === '' || vn === '' ? 'gray' : 'green',
          borderRadius: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Add This Word</Text>
      </TouchableOpacity>
    </View>
  );
};

export default header;

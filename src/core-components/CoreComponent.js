import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  FlatList,
  ScrollView,
  SafeAreaView,
  SectionList,
} from 'react-native';
import React, { useState } from 'react';

const CoreComponents = () => {
  const [name, setName] = useState('');
  return (
    <ScrollView
      onLayout={event => {
        console.log('View size', event.nativeEvent.layout);
      }}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{ width: 100, height: 100, backgroundColor: 'orange' }}
      ></View>
      <Text
        style={{ fontSize: 40, color: 'red', textAlign: 'center', width: 200 }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        Hellof wfwefwefwefewfwefwefwefewfewfefwefwefwefewfwefewfwefewfew
      </Text>
      <Image
        source={require('../images/image.jpg')}
        style={{ width: 400, height: 400, backgroundColor: 'red' }}
      />
      <TextInput
        style={{ width: 300, height: 50, borderWidth: 1 }}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
        secureTextEntry={false}
        editable={true}
        onSubmitEditing={() => {}}
        multiline={true}
        placeholder="Enter Email"
      />
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0}
        onPress={() => {
          Alert.alert('Clicked');
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <Button onPress={() => {}} color="red" title="Sign" />
      <FlatList
        data={[1, 1, 1, 1, 1]}
        pagingEnabled={true}
        ListFooterComponent={() => {
          return (
            <View
              style={{
                width: 300,
                height: 50,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>List End</Text>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                width: 300,
                height: 50,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>List Start</Text>
            </View>
          );
        }}
        keyExtractor={({ item, index }) => 'id' + index}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: 300,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f2f2f2',
                marginTop: 10,
              }}
            >
              <Text>{'Item' + (index + 1)}</Text>
            </View>
          );
        }}
      />
      <SectionList
        sections={[
          { data: [1, 1, 1, 1, 1], title: 'Clotges' },
          { data: [1, 2, 2, 2], title: 'Mobile' },
        ]}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: 300,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f2f2f2',
                marginTop: 10,
              }}
            >
              <Text>{'Item' + (index + 1)}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => {
          return <Text>{title}</Text>;
        }}
      />
    </ScrollView>
  );
};

export default CoreComponents;

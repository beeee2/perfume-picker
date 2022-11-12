import React from 'react';
import {Button, Text, View} from 'react-native';

const CameraPage = ({navigation}) => {
  return (
    <>
      <View>
        <Text>Camera Page</Text>
        <Button
          title="Move Result Page"
          onPress={() => navigation.navigate('ResultPage')}
        />
      </View>
    </>
  );
};

export default CameraPage;

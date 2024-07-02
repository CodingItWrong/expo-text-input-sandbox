import { Image, StyleSheet, TextInput } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useState } from 'react';

export default function HomeScreen() {
  const [text, setText] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <TextInput placeholder="type here" value={text} onChangeText={setText} style={styles.textInput} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }
});

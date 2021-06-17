import React from 'react';
import {Component} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Text>{instructions}</Text>
      </Container>
    );
  }
}

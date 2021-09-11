import React from 'react';
import { FlatList } from 'react-native';
import Hello from '../../components/Hello';
import {Search} from '../../components/SearchBar';
import { data } from '../../utils/data';
import {Container} from './styles';
import {BookProps, Card} from '../../components/Card'
export const Home: React.FC = () => {
  return (
    <Container>
      <Search placeholder="Search Book" />
      <Hello name="Mehmed AI Fatih" />
      <FlatList<BookProps>
      data={data}
      numColumns={3}
      renderItem={({item}) => <Card {...item} />}
    
      />
    </Container>
  );
};

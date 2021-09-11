import React from 'react';
import Hello from '../../components/Hello';
import {Search} from '../../components/SearchBar';
import {Container} from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Search placeholder="Search Book" />
      <Hello name="Mehmed AI Fatih" />
    </Container>
  );
};

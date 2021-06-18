import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  margin-bottom: 36px;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.color.title}; ;
`;

const Name = styled.Text`
  color: ${({theme}) => theme.color.primary};
  font-weight: 600;
`;

export interface Greetings {
  name: string;
}

const Hi: React.FC<Greetings> = ({name}) => (
  <Container>
    <Title>
      Hi, <Name>{name}</Name> 👋
    </Title>
  </Container>
);

export default Hi;

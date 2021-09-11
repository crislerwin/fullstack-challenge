import * as React from 'react';
import {Container, Cover, Title, Author, ImageContainer} from './styles';

export interface BookProps {
  id?: string;
  title: string;
  author: string;
  image?: string;
  createdAt?: string;
  onPress: () => {} | void;
}

export const Card: React.FC<BookProps> = ({image, title, author, onPress}) => {
  return (
    <Container>
      <ImageContainer
        onPress={onPress}
        style={{
          shadowColor: 'rgba(212, 173, 134, 0.4926)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4926,
          shadowRadius: 10,

          elevation: 3,
        }}>
        <Cover source={{uri: image}} />
      </ImageContainer>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Container>
  );
};

import * as React from 'react';
import {TextInputProps} from 'react-native';
import {Container, Image, Input, Bar, searchIcon} from './styles';

export interface SearchProps extends TextInputProps {
  placeholder: string;
}

export const Search: React.FC<SearchProps> = ({
  placeholder,
  onSubmitEditing,
}) => {
  return (
    <Container>
      <Bar>
        <Image source={searchIcon} width={16} height={16} />
        <Input
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          returnKeyType="search"
        />
      </Bar>
    </Container>
  );
};

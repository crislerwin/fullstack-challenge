import styled from 'styled-components/native';

const Container = styled.View`
  margin: 10px 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title}; ;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;
export { Container, Title, Name };

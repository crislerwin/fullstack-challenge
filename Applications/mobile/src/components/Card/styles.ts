import styled from 'styled-components/native'; 

const Container = styled.View`
padding: 30px 0px 20px 22px;
flex-shrink: 1;
  border-radius: 5px;
`;

const Cover = styled.Image`
border-radius: 5px;
  width: 100px;
  height: 140px;
`;

const Title = styled.Text`
  margin: 10px 0px 0px 4px;
  font-weight: 700;
  color: #313131;
  font-size: 14px;
  line-height: 14px;
  flex-shrink: 1;
`;

const Author = styled.Text`
  margin: 5px 14px;
  font-weight: 900;
  font-size: 12px;
  color: #313131;
  line-height: 12px;
  flex-shrink: 1;
`;

const ImageContainer = styled.TouchableOpacity``;


export { Container, Cover, Title, Author, ImageContainer };
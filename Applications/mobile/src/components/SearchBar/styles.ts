import styled from 'styled-components/native';
import searchIcon from '../../assets/Search/search.png'
const Container = styled.View`
flex-direction: row; 
margin: 20px 20px 30px;
`;

const Image = styled.Image`
align-self: center;
margin: 20px 10px;
`;

const Input = styled.TextInput`
color: ${({theme})=> theme.colors.inputText};
margin: 0px;
`;

const Bar = styled.View`
flex: 1;
flex-direction: row;
height: 42px;
border-radius: 8px;
background-color: ${({ theme }) => theme.colors.input};
elevation: 1;
`;


export { Container, Image, Input, searchIcon, Bar}
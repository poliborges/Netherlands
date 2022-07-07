import styled from 'styled-components/native';

export const ContentPageWrapper = styled.View`
  flex: 1;
  background-color: #FDF5E6;
`;

export const Posts = styled.FlatList`
  width: 100%;
  background-color: #FDF5E6;
`

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 75px;
  height: 75px;
  border-radius: 37.5px;
  background-color: #FFE4B5;
  justify-content: center;
  align-items: center;
`;

export const SearchBarWrapper = styled.View`
  flex-direction: row;
  background-color: white;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  border-width: .5px;
`;

export const SearchBar = styled.TextInput`
  padding: 0;
  flex: 1;
`;
 
export const PlusIcon = styled.Image`
  height: 30px;
  width: 30px;
`;
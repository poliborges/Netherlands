import styled from 'styled-components/native';

export const ContentPageWrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #FDF5E6;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
`

export const TitleInputWrapper = styled.View`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-width: .5px;
  border-radius: 8px;
`;

export const TitleInput = styled.TextInput`
  padding: 0px;
`;

export const Description = styled.Text`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const DescriptionInputWrapper = styled.View`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-width: .5px;
  border-radius: 8px;
  text-align-vertical: top;
`;

export const DescriptionInput = styled.TextInput`
  padding: 0;
  text-align-vertical: top;
  flex-grow: 1;
`;

export const ButtonWrapper = styled.View`
  margin-top: 15px;
`;
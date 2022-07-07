import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;
  border-bottom-width: .5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

interface FavoriteWrapperProps {
  color: string;
}
export const FavoriteWrapper = styled.TouchableOpacity<FavoriteWrapperProps>`
  margin-top: 10px;
  height: 20px;
  width: 20px;
  align-self: flex-end;
`;
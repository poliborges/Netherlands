import React, { FC, memo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FavoriteWrapper, Title, Wrapper } from "./PostItem.styled";

export interface PostItemProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  favorite: boolean;
  onPress: () => void;
}

const PostItem: FC<PostItemProps> = ({ title, body, favorite, onPress }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  return (
    <Wrapper>
      <TouchableOpacity onPress={onPress}>
        <Title>{title}</Title>
        <Text>{body}</Text>
      </TouchableOpacity>
      <FavoriteWrapper onPress={() => setIsFavorite(!isFavorite)}>
        { isFavorite ? (
          <Image source={require("../../assets/favourite-check.png")} />
        ) : <Image source={require("../../assets/favourite-uncheck.png")} /> }
      </FavoriteWrapper>
    </Wrapper>
  );
};

export default memo(
  PostItem,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);

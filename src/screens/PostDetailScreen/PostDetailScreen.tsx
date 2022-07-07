import React, { useState } from "react";
import { Alert } from "react-native";
import { Button } from "react-native";
import { store } from "../../store";
import { IPost } from "../../types/IPost";
import {
  ButtonWrapper,
  ContentPageWrapper,
  Description,
  DescriptionInput,
  DescriptionInputWrapper,
  Title,
  TitleInput,
  TitleInputWrapper,
} from "./PostDetailScreen.styled";

export const PostDetailScreen = ({ route, navigation }: any) => {
  const post = route.params?.post || undefined;

  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);

  const addPost = () => {
    const newPost = {
      userId: 1,
      title: title,
      body: body,
    };
    store.dispatch.posts.createPost(newPost);
    navigation.goBack();
  };

  const deletePost = () => {
    Alert.alert('Atenção', 'Mas você está certo disso?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: () => {
        store.dispatch.posts.deletePost(post.id);
        navigation.goBack();
      } },
    ]);
  }

  const editPost = () => {
    const postEdited = {
      ...post,
      title: title,
      body: body,
    };
    store.dispatch.posts.updatePost({ postId: post.id, newPost: postEdited });
    navigation.goBack();
  };

  return (
    <ContentPageWrapper>
      <Title>Título:</Title>
      <TitleInputWrapper>
        <TitleInput autoFocus value={title} onChangeText={setTitle} />
      </TitleInputWrapper>
      <Description>Descrição:</Description>
      <DescriptionInputWrapper>
        <DescriptionInput multiline value={body} onChangeText={setBody} />
      </DescriptionInputWrapper>
      <ButtonWrapper>
        <Button
          title="Salvar"
          onPress={() => (post ? editPost() : addPost())}
        />
      </ButtonWrapper>
      { post && (
        <ButtonWrapper>
          <Button title="Excluir" color="#FC3D39" onPress={deletePost} />
        </ButtonWrapper>
      )}
      
    </ContentPageWrapper>
  );
};

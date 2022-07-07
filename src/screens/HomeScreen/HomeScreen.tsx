import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Image } from "react-native";
import { useSelector } from "react-redux";
import Post from "../../components/PostItem/PostItem";
import { RootState, store } from "../../store";
import { IPost } from "../../types/IPost";
import { ContentPageWrapper, FloatingButton, Posts, PlusIcn, SearchBar, SearchBarWrapper, PlusIcon } from "./HomeScreen.styled";

export const HomeScreen = ({ navigation }: any) => {
  const { loading, posts } = useSelector((state: RootState) => state.posts);
  
  const [text, setText] = useState('');

  const onSearch = (text: string) => {
    store.dispatch.posts.fetchPosts(text);
  };
  
  useEffect(() => {
    onSearch('');
  }, []);

  const renderItem = ({ item }: { item: IPost }) => (
    <Post
      id={item.id}
      title={item.title}
      body={item.body}
      userId={item.userId}
      favorite={item.favorite}
      onPress={() => navigation.navigate("Details", { post: item})}
    />
  );

  return (
    <ContentPageWrapper>
      <SearchBarWrapper>
        <SearchBar onChangeText={setText} autoCapitalize="none" />
        <Button title="Buscar" onPress={() => onSearch(text)} />
      </SearchBarWrapper>
      { loading && <ActivityIndicator /> }
      <Posts
        data={posts}
        refreshing={loading}
        onRefresh={() => onSearch('')}
        renderItem={renderItem}
        keyExtractor={(item: IPost) => `${item.id}`}
      />
      <FloatingButton onPress={() => navigation.navigate("Details")}>
        <PlusIcon source={require("../../assets/plus.png")} /> 
      </FloatingButton>
    </ContentPageWrapper>
  );
};


import { IPost } from "../types/IPost";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async (title?: string) => {
  let url = API_URL;
  if (title) {
    url = `${url}?${new URLSearchParams({ title })}`;
  }
  console.debug(`Fetching posts from ${url}`);
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}

export interface PostPostParams {
  title: string;
  body: string;
  userId: number;
}
export const postPost = async (newPost: PostPostParams) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
  const result = await response.json();
  return result;
}

export const deletePost = async (postId: number) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'DELETE'
  });
  const result = await response.json();
  return result;
}

export const putPost = async (postId: number, newPost: PostPostParams) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
  const result = await response.json();
  return result;
}
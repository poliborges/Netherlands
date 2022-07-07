import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { deletePost, getPosts, postPost, PostPostParams, putPost } from "../api/api";
import { IPost } from "../types/IPost";

type PostState = {
  loading: boolean;
  posts: IPost[];
}

export const postModel = createModel<RootModel>()({
  state: {
    loading: false,
    posts: [],
  } as PostState,
  reducers: {
    setLoading(state, value: boolean) {
      return { ...state, loading: value };
    },
    setPosts(state, posts: IPost[]) {
      return { ...state, posts };
    },
    addPostToList(state, post: IPost) {
      return { ...state, posts: [post, ...state.posts] };
    },
    removePostFromList(state, postId: number) {
      return { ...state, posts: state.posts.filter(post => post.id !== postId) };
    },
  },
  effects: (dispatch) => ({
    async fetchPosts(title?: string) {
      dispatch.posts.setLoading(true);
      try {
        const result = await getPosts(title);
        dispatch.posts.setPosts(result);
      } catch {
        console.error("Error fetching posts");
      } finally {
        dispatch.posts.setLoading(false);
      }
    },
    async createPost(newPost: PostPostParams) {
      dispatch.posts.setLoading(true);
      try {
        const result = await postPost(newPost);
        dispatch.posts.addPostToList(result);
      } catch {
        console.error("Error creating posts");
      } finally {
        dispatch.posts.setLoading(false);
      }
    },
    async deletePost(postId: number) {
      dispatch.posts.setLoading(true);
      try {
        await deletePost(postId);
        dispatch.posts.removePostFromList(postId);
      } catch {
        console.error("Error deleting posts");
      } finally {
        dispatch.posts.setLoading(false);
      }
    },
    async updatePost({ postId, newPost }: { postId: number, newPost: PostPostParams }) {
      dispatch.posts.setLoading(true);
      try {
        const result = await putPost(postId, newPost);
        dispatch.posts.removePostFromList(postId);
        dispatch.posts.addPostToList(result);
      } catch {
        console.error("Error updating posts");
      } finally {
        dispatch.posts.setLoading(false);
      }
    }
  }),
});

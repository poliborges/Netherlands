import { Models } from '@rematch/core';
import { postModel } from './post.model';

export interface RootModel extends Models<RootModel> {
  posts: typeof postModel;
}

export const models: RootModel = {
  posts: postModel,
};

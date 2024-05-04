import mongoose from 'mongoose';
import { unstable_noStore as noStore } from 'next/cache';

import { Post, User } from './models';
import { connectToDb } from './utils';

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post!');
  }
};

export const getUser = async (id: string) => {
  noStore();
  const oid = new mongoose.Types.ObjectId(id);
  // console.log(Object.keys(oid));
  try {
    connectToDb();
    const user = await User.findById(oid);
    if (!user) {
      console.log('No user found with id:', oid);
      return null;
    }
    return user;
  } catch (err) {
    console.error('Error fetching user:', err);
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
};

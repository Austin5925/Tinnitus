'use server';

import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

import { signIn } from './auth';
import { signOut } from './auth';
import { Post, User } from './models';
import { connectToDb } from './utils';

export const addPost = async (prevState: any, formData: any) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userid } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userid,
    });

    await newPost.save();
    console.log('saved to db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const addUser = async (prevState: any, formData: any) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log('saved to db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userid: id });
    await User.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

export const handleLogout = async () => {
  'use server';
  await signOut();
};

export const register = async (previousState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match' };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: 'Username already exists' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log('saved to db');

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const login = async (prevState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (err: any) {
    console.log(err);

    if (err.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw err;
  }
};

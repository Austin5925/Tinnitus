import { NextResponse } from 'next/server';

import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';

interface Params {
  params: {
    slug: string;
  };
}

export const GET = async (request: Request, { params }: Params) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post!');
  }
};

export const DELETE = async (request: Request, { params }: Params) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json('Post deleted');
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete post!');
  }
};

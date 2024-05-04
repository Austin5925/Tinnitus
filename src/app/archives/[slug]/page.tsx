import Image from 'next/image';
import { Suspense } from 'react';

import styles from './singlePost.module.css';

import { getPost } from '@/lib/data';
import { Post } from '@/lib/types/post';

import PostUser from '@/components/postUser/postUser';

interface Params {
  params: {
    slug: string;
  };
}

// FETCH DATA WITH AN API
// const getData = async (slug: string) => {
//   const res = await fetch(`http://localhost:3000/api/archives/${slug}`);

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

export const generateMetadata = async ({ params }: Params) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

// export async function getServerSideProps({ params }: Params) {
//   const { slug } = params;
//   const post = await getPost(slug);

//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   const user = (await getUser(post.userid)) || {
//     img: '/noavatar.png',
//     username: 'Unknown',
//   };

//   return {
//     props: { post, user },
//   };
// }

const SinglePostPage = async ({ params }: Params) => {
  const { slug } = params;

  // FETCH DATA WITHOUT AN API
  const postOri: Post = await getPost(slug);
  if (!postOri) {
    return {
      notFound: true,
    };
  }

  const post = (await getPost(slug)) as Post & { toObject: () => any };
  // const post = postOri.toObject();  // 类型断言除 error，实际包含 toObject 方法
  if (post) {
    console.log('keys:', Object.keys(post));
    if (post.userid) {
      console.log(post, post.userid);
    } else {
      console.log('Post is missing the userid:', post);
    }
  } else {
    console.log('No post found for the slug:', slug);
  }

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='' fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userid={post.userid} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

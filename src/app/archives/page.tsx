import styles from './archives.module.css';

import { getPosts } from '@/lib/data';
import { Post } from '@/lib/types/post';

import PostCard from '@/components/postCard/postCard';

const ArchivesPage = async () => {
  // FETCH DATA WITHOUT AN API
  // 关于此处异步用法的实践：和 useEffect 的对比
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post: Post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default ArchivesPage;

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/archives', {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   try {
//     return await res.json();
//   } catch (e) {
//     throw new Error('Failed to parse JSON!');
//   }
// };

// 'use client';

// import { useEffect, useState } from 'react';

// import styles from './archives.module.css';

// import { getPosts } from '@/lib/data';

// import PostCard from '@/components/postCard/postCard';

// interface Post {
//   _id: string;
//   img?: string;
//   createdAt: Date;
//   title: string;
//   desc: string;
//   slug: string;
// }

// const ArchivesPage = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const fetchedPosts = await getPosts();
//       if (fetchedPosts) {
//         console.log(fetchedPosts);
//         setPosts(fetchedPosts);
//       }
//     };

//     fetchPosts();
//   }, []); // 确保 useEffect 不会在组件更新时重新运行

//   return (
//     <div className={styles.container}>
//       {posts.map((post) => (
//         <div className={styles.post} key={post._id}>
//           <PostCard {...post} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArchivesPage;

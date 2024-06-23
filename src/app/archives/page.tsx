import styles from './archives.module.css';

import { getPosts } from '@/lib/data';
import { Post } from '@/lib/types/post';

import PostCard from '@/components/postCard/postCard';

export const metadata = {
  title: 'Archives',
  description: 'Archives of Tinnitus articles',
};

const ArchivesPage = async () => {
  // 关于此处异步用法的实践......
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

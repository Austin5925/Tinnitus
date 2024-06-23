import Image from 'next/image';
import Link from 'next/link';

import styles from './postCard.module.css';

import { Post } from '@/lib/types/post';

const PostCard = ({ post }: { post: Post }) => {
  // 注意解构赋值不要用于传参
  const { _id, img, createdAt, title, desc, slug } = post;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {img && (
          <div className={styles.imgContainer}>
            <Image src={img} alt='post图片' fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href={`/archives/${slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

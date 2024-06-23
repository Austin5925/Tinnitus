import Image from 'next/image';

import styles from './postUser.module.css';

import { getUser } from '@/lib/data';

interface PostUserProps {
  userid: string;
}

const PostUser = async ({ userid }: PostUserProps) => {
  console.log(userid);
  const user = await getUser(userid);
  if (!user) {
    console.log('no user');
    return null;
  }
  if (user) console.log(user);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : '/svg/noavatar.png'}
        alt=''
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;

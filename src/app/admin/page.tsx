import { Suspense } from 'react';

import styles from './admin.module.css';

import { auth } from '@/lib/auth';

import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';
import AdminUsers from '@/components/adminUsers/adminUsers';

const AdminPage = async () => {
  const session = await auth();
  const userId = session?.user?.id ?? '';

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userid={userId} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

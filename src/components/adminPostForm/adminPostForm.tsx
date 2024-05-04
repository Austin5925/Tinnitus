'use client';

import { useFormState } from 'react-dom';

import styles from './adminPostForm.module.css';

import { addPost } from '@/lib/action';

interface AdminPostFormProps {
  userid: string;
}

const AdminPostForm: React.FC<AdminPostFormProps> = ({ userid }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form onSubmit={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type='hidden' name='userid' value={userid} />
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='slug' placeholder='slug' />
      <input type='text' name='img' placeholder='img' />
      <textarea name='desc' placeholder='desc' rows={10} />
      <button type='submit'>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;

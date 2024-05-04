// "use client";
import Image from 'next/image';

import styles from './contact.module.css';
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: 'Contact',
  description: 'Contact Tinnitus team',
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='/contact.png'
          alt='抽象艺术美图'
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action='' className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'
          ></textarea>
          <div className={styles.btnContainer}>
            <div className={styles.submitButton}>
              <button>Submit</button>
            </div>
            <div className={styles.emailButton}>
              <a href='mailto:AusdinZhou@proton.me'>
                <Image
                  src='/emailButton.png'
                  alt='Email Us'
                  className={styles.emailPic}
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

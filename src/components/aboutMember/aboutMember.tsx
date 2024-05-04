import Image from 'next/image';
import React from 'react';

interface Member {
  name: string;
  bio: string;
  twitterID: string;
  img?: string;
}

const AboutMember = ({ member }: { member: Member }) => {
  // 检查是否有传入 img，没有则使用默认图片
  const imageUrl = member.img ? `/avatars/${member.img}` : '/noavatar.png';

  return (
    <div className='bg-white bg-opacity-50 p-6 rounded-lg shadow'>
      <Image
        src={imageUrl}
        alt='Team Member'
        width={120}
        height={120}
        className='rounded-full mb-4'
      />
      <h3 className='text-xl mb-2'>{member.name}</h3>
      <p className='text-sm mb-3'>{member.bio}</p>
      <a
        href={`https://twitter.com/${member.twitterID}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src='/svg/twitter.svg' alt='Twitter' width={30} height={30} />
      </a>
    </div>
  );
};

export default AboutMember;

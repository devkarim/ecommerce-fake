import Image from 'next/image';

import { cls } from '@/lib/utils';

interface HeaderCardProps {
  imageUrl: string;
  caption: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  imageUrl,
  caption,
  children,
  className,
}) => {
  return (
    <div
      className={cls(
        'card w-full h-[420px] shadow-xl image-full before:!bg-gray-800',
        className
      )}
    >
      <figure>
        <Image
          src={imageUrl}
          alt="header-card"
          fill
          className="rounded-2xl object-[60%_40%] sm:object-[100%_40%] contrast-100 -hue-rotate-15"
        />
      </figure>
      <div className="card-body items-center self-center">
        <p className="text-white text-3xl lg:text-5xl font-bold text-center max-w-2xl">
          {caption}
        </p>
        {children}
      </div>
    </div>
  );
};

export default HeaderCard;

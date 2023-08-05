import { cls } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={cls('bg-neutral/50 animate-pulse rounded-xl', className)} />
  );
};

export default Skeleton;

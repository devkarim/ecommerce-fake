'use client';

interface SocialLinkProps {
  children?: React.ReactNode;
  href?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default SocialLink;

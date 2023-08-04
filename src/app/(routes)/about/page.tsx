import Image from 'next/image';

import Content from '@/components/ui/content';

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <Content className="flex flex-col space-y-24">
      <div className="self-center text-center max-w-sm lg:max-w-4xl space-y-8">
        <div className="avatar w-52 h-52 opacity-75">
          <Image
            src={`/img/about-us.jpg`}
            alt={`about-us-img`}
            fill
            className="rounded-full"
          />
        </div>
        <h1
          className={`text-primary font-extrabold text-3xl lg:text-5xl font-serif`}
        >
          Unleash your shopping beast at our fly online store.
        </h1>
        <p className="opacity-60 italic">
          Elevate your style with our trendy fashion collection!
        </p>
      </div>
      <div className="space-y-8">
        <h2 className="text-2xl lg:text-4xl font-bold">About Us</h2>
        <p className="text-sm lg:text-base opacity-80">
          Welcome to eCommerce Fake, the ultimate destination for an exceptional
          shopping experience. We take pride in offering an extensive collection
          of premium products, carefully curated to cater to your every desire.
          Our mission is to provide you with a seamless journey from start to
          finish. With a user-friendly interface, secure transactions, and
          reliable delivery, your satisfaction is our top priority. Our team of
          dedicated experts is committed to sourcing the latest trends and
          hottest products, ensuring you have access to the finest selection in
          fashion, tech, home decor, beauty, and beyond. Join our thriving
          community and embark on a shopping adventure like no other. Discover
          the joy of shopping with us today!
          <br />
          <br />
          This website is a demo, made for educational purposes only. It is not
          a real eCommerce website. The code is available at this{' '}
          <a
            href="https://github.com/devkarim/ecommerce-fake"
            className="underline"
          >
            repo.
          </a>
        </p>
      </div>
      {/* <div className="flex flex-col flex-wrap justify-center items-center lg:flex-row gap-24 lg:justify-evenly">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="avatar w-52 h-52 opacity-80">
            <Image
              src={`/img/about-us-${i + 1}.jpg`}
              alt={`about-us-${i + 1}`}
              fill
              className="rounded-full"
            />
          </div>
        ))}
      </div> */}
    </Content>
  );
};

export default AboutUs;

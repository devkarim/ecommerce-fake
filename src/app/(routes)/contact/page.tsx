import Content from '@/components/ui/content';
import Input from '@/components/ui/input';
import SocialLink from '@/components/ui/social';
import TextArea from '@/components/ui/textarea';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  return (
    <Content className="space-y-0 flex flex-col gap-12 lg:gap-32 lg:flex-row justify-between">
      {/* Contact details */}
      <div className="flex-grow basis-1 py-12">
        <h1 className="text-3xl lg:text-4xl font-bold">Contact Info</h1>
        <div className="divider"></div>
        <div className="space-y-3">
          <p>Phone: (123) 456-7890</p>
          <p>
            Email:{' '}
            <a href="mailto:support@ecommerce-fake.com" className="underline">
              support@ecommerce-fake.com
            </a>
          </p>
          <p>471 N. Meadowbrook Ave. Yuba City, CA 95993</p>
        </div>
        <p className="mt-12">
          <span className="font-bold text-warning">Note:</span> This website is
          a demo and does not sell real products therefore this contact form is
          not working and the data above is invalid. If you want to contact me,
          please send me an email to:{' '}
          <a href="mailto:devkarim@hotmail.com" className="underline">
            devkarim@hotmail.com
          </a>
        </p>
        <div className="mt-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Follow Us</h2>
          <div className="divider"></div>
          <div className="space-y-12">
            <div className="flex text-4xl gap-6">
              <SocialLink href="https://facebook.com">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://github.com/devkarim">
                <FaGithub />
              </SocialLink>
            </div>
            <p className="text-sm opacity-60">
              <span className="font-bold">STORE</span> © 2023 Privacy policy
            </p>
          </div>
        </div>
      </div>
      <div className="divider lg:hidden"></div>
      {/* Form */}
      <form className="flex-grow basis-1 border border-neutral p-8 space-y-6 rounded-sm">
        <h1 className="text-3xl lg:text-4xl font-bold">Contact Us</h1>
        <div className="divider"></div>
        <Input
          id="name"
          type="text"
          label="Name"
          placeholder="Your name here"
          full
        />
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Your email here"
          full
        />
        <Input
          id="Subject"
          type="text"
          label="Subject"
          placeholder="Your subject here"
          full
        />
        <TextArea label="Message" placeholder="Your message here" full />
        <div className="w-full text-end">
          <button className="btn btn-lg btn-neutral w-52">Submit</button>
        </div>
      </form>
    </Content>
  );
};

export default ContactUs;

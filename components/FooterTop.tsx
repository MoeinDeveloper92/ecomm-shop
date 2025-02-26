import { EqualApproximatelyIcon, MapPin, Phone } from 'lucide-react';
import React from 'react';

export interface FooterTopProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: FooterTopProps[] = [
  {
    title: 'Visit Us',
    subtitle: 'New Orlean,USA',
    icon: (
      <MapPin className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Call Us',
    subtitle: '+123456789',
    icon: (
      <Phone className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Sat: 10:00 AM - 7:00 PM',
    icon: (
      <MapPin className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: 'Email Us',
    subtitle: 'ExampleEmail@gmail.com',
    icon: (
      <EqualApproximatelyIcon className="text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 ">
      {data.map((item, i) => (
        <ContactItem
          key={i}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ icon, title, subtitle }: FooterTopProps) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gray-50 p-4  transition-colors">
      {icon}
      <div>
        <h3 className="font-semibold group-hover:text-darkColor transition-colors">
          {title}
        </h3>
        <p className="text-sm mt-1 group-hover:text-gray-900 transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;

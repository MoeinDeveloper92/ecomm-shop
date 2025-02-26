import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: 'Youtube',
    href: 'https://google.com',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: 'Github',
    href: 'https://google.com',
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: 'Linkedin',
    href: 'https://google.com',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://google.com',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: 'Slack',
    href: 'https://google.com',
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                className={cn(
                  'p-2 border rounded-full hover:text-white hoverEffect'
                )}
                href={item?.href}
                target="__blank"
                rel="noopener nereferrer"
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn('text-darkColor font-semibold bg-white')}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

import React from 'react'
import { AiOutlineDiscord } from 'react-icons/ai'
import { BiLogoBlogger } from 'react-icons/bi'
import { FaCode, FaGithub, FaTerminal } from 'react-icons/fa'
import { GoProjectSymlink, GoTools } from 'react-icons/go'
import { GrResources } from 'react-icons/gr'
import { ImStatsDots } from 'react-icons/im'
import { IoMdSettings } from 'react-icons/io'
import { IoDocumentOutline } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { RiHomeGearLine, RiTeamLine } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'
 
export const links = [
  {
    id: uuidv4(),
    title: 'Home',
    url: '/',
    icon: <RiHomeGearLine />,
    colour: '#87ceeb',
  },
  {
    id: uuidv4(),
    title: 'Inbox',
    url: '/inbox',
    icon: <MdOutlineEmail />,
    colour: '#f8f8ab',
  },
  {
    id: uuidv4(),
    title: 'Projects',
    url: '/projects',
    icon: <GoProjectSymlink />,
    colour: '#9ce99c',
  },
  {
    id: uuidv4(),
    title: 'Team',
    url: '/team',
    icon: <RiTeamLine /> ,
    colour: '#f7c0f7',
  },
  {
    id: uuidv4(),
    title: 'Editor',
    url: '/editor',
    icon: <FaCode />,
    colour: '#e5daaf',
  },
  {
    id: uuidv4(),
    title: 'Terminal',
    url: '/terminal',
    icon: <FaTerminal />,
    colour: '#f0c0b1',
  },
  {
    id: uuidv4(),
    title: 'GitHub',
    url: '/github',
    icon: <FaGithub />,
    colour: '#8af4f4',
  },
  {
    id: uuidv4(),
    title: 'Discord',
    url: '/discord',
    icon: <AiOutlineDiscord />,
    colour: '#ffdeed',
  },
  {
    id: uuidv4(),
    title: 'Stats',
    url: '/stats',
    icon: <ImStatsDots />,
    colour: '#76dcc5',
  },
  {
    id: uuidv4(),
    title: 'Blog',
    url: '/blog',
    icon: <BiLogoBlogger />,
    colour: '#fbd182',
  },
  {
    id: uuidv4(),
    title: 'Resources',
    url: '/',
    icon: <GrResources />,
    colour: '#d1c2b3',
  },
  {
    id: uuidv4(),
    title: 'Documentation',
    url: '/',
    icon: <IoDocumentOutline />,
    colour: '#5ad296',
  },
  {
    id: uuidv4(),
    title: 'Tools',
    url: '/',
    icon: <GoTools />,
    colour: '#f7dde2',
  },
  {
    id: uuidv4(),
    title: 'Settings',
    url: '/',
    icon: <IoMdSettings />,
    colour: '#f471eb',
  },
]

export const plans = [
  {
    id: uuidv4(),
    featured: false,
    title: 'Personal',
    monthly: '7',
    yearly: '4',
    about: 'Best for personal use:',
    desc: 'Boost your website with a custom domain name, and remove all NimiraTech.com advertising. Unlock unlimited, expert customer support via email.',
    borderColour: '#ff4500',
    button: 'Upgrade',
    features: [
      'Best-in-class hosting',
      'Jetpack essential features',
      'Unlimited customer support via email',
      'Dozens of free themes',
      'Basic design customization',
      '6 GB storage space',
      'Remove NimiraTech.com ads',
      'Payments',
      'Subscriber-only content',
    ],
  },
  {
    id: uuidv4(),
    featured: true,
    title: 'Premium',
    monthly: '14',
    yearly: '8',
    about: 'Best for freelancers:',
    desc: 'Build a unique website with advanced design tools, CSS editing, lots of space for audio and video, Google Analytics support, and the ability to monetize your site with ads.',
    borderColour: '#ff4500',
    button: 'Upgrade',
    features: [
      'Unlimited customer support via email',
      'Best-in-class hosting',
      'Jetpack essential features',
      'Premium themes',
      'Advanced design customization',
      '13 GB storage space',
      'Remove NimiraTech.com ads',
      'Payments',
      'Subscriber-only content',
      'Pay with PayPal',
      'Google Analytics integration',
      'Advanced social media',
      'Site monetization',
      'VideoPress support',
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    title: 'Business',
    monthly: '33',
    yearly: '25',
    about: 'Best for small businesses:',
    desc: 'Power your business website with custom plugins and themes, 200 GB storage, and the ability to remove NimiraTech.com branding.',
    borderColour: '#ff4500',
    button: 'Upgrade',
    features: [
      'Unlimited customer support via email',
      'Best-in-class hosting',
      'Jetpack essential features',
      'Premium themes',
      'Advanced design customization',
      '200 GB storage space',
      'Remove NimiraTech.com ads',
      'Payments',
      'Subscriber-only content',
      'Pay with PayPal',
      'Google Analytics integration',
      'Advanced social media',
      'Site monetization',
      'VideoPress support',
      'SEO tools',
      'Install plugins',
      'Install themes',
      'Remove NimiraTech.com branding',
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    title: 'eCommerce',
    monthly: '59',
    yearly: '45',
    about: 'Best for online stores:',
    desc: 'Sell products or services with this powerful, all-in-one online store experience. This plan includes premium integrations and is extendable, so it\'ll grow with you as your business grows.',
    borderColour: '#ff4500',
    button: 'Upgrade',
    features: [
      'Unlimited customer support via email',
      'Best-in-class hosting',
      'Jetpack essential features',
      'Premium themes',
      'Advanced design customization',
      '200 GB storage space',
      'Remove NimiraTech.com ads',
      'Payments',
      'Subscriber-only content',
      'Pay with PayPal',
      'Google Analytics integration',
      'Advanced social media',
      'Site monetization',
      'VideoPress support',
      'SEO tools',
      'Install plugins',
      'Install themes',
      'Remove NimiraTech.com branding',
      'Accept payments in 60+ countries',
      'Integrations with top shipping carriers',
      'Unlimited products or services',
      'eCommerce marketing tools',
      'Premium customizable starter themes',
    ],
  },
]

export const questions = [
  {
    id: uuidv4(),
    question: 'Do you sell domains?',
    answer:
      'Yes. Annual and biannual Personal, Premium, Business, and eCommerce plans include a free custom domain for one year. That includes new domains purchased through NimiraTech.com or your own existing domain that you can map to your NimiraTech.com site. Does not apply to premium domains. Domain name should be registered within one year of the purchase of the plan to use this promotion. Registered domain names will renew at regular prices.',
  },
  {
    id: uuidv4(),
    question: 'Do I need another web host?',
    answer:
      'No. All NimiraTech.com sites include our specially tailored NimiraTech hosting to ensure your site stays available and secure at all times. You can even use your own domain when you upgrade to the Personal, Premium, Business, or eCommerce plan.',
  },
  {
    id: uuidv4(),
    question: 'Do you offer email accounts?',
    answer:
      'Yes. We offer Professional Email which is a robust hosted email solution for any custom domain registered through NimiraTech.com. You can also set up free email forwarding, or use our Google Workspace integration to power your emails.',
  },
  {
    id: uuidv4(),
    question: 'What is included with advanced custom design?',
    answer:
      'Custom design is a toolset you can use to personalize your blog\'s look and feel with custom colours & backgrounds, custom fonts, and even a CSS editor that you can use for more precise control of your site\'s design.',
  },
  {
    id: uuidv4(),
    question: 'Will upgrading affect my content?',
    answer:
      'Plans add extra features to your site, but they do not affect the content of your site or your site\'s followers.',
  },
  {
    id: uuidv4(),
    question: 'Can I cancel my subscription?',
    answer:
      'Yes. We want you to love everything you do at NimiraTech.com, so we provide a 14-day refund on all of our annual plans and a 7-day refund on all of our monthly plans.',
  },
  {
    id: uuidv4(),
    question: 'Have more questions?',
    answer:
      'Need help deciding which plan works for you? Our happiness engineers are available for any questions you may have.',
  },
]

export const posts = [
  {
    id: uuidv4(),
    title: '08 Angular 19 Review',
    category: 'Published',
  },
  {
    id: uuidv4(),
    title: '12 Astro HTMX Alpine',
    category: 'Draft',
  },
  {
    id: uuidv4(),
    title: '07 MERN Stack Course ',
    category: 'Scheduled',
  },
  {
    id: uuidv4(),
    title: '10 MySQL and Docker',
    category: 'Trashed',
  },
  {
    id: uuidv4(),
    title: '02 C++ and Game Development',
    category: 'Published',
  },
  {
    id: uuidv4(),
    title: '04 Django vs Flask',
    category: 'Draft',
  },
  {
    id: uuidv4(),
    title: '07 React and Go',
    category: 'Scheduled',
  },
  {
    id: uuidv4(),
    title: '11 Angular and .Net',
    category: 'Trashed',
  },
  {
    id: uuidv4(),
    title: '12 Front Frameworks in 2025',
    category: 'Published',
  },
  {
    id: uuidv4(),
    title: '08 Three JS Tutorial',
    category: 'Draft',
  },
  {
    id: uuidv4(),
    title: '05 Nuxt JS Full Stack Course',
    category: 'Scheduled',
  },
  {
    id: uuidv4(),
    title: '01 Making an RPG in Pygame',
    category: 'Trashed',
  },
]

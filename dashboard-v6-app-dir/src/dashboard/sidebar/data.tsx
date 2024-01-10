import { DocIcon } from './icons/DocIcon';
import { HomeIcon } from './icons/HomeIcon';
import { MediaIcon } from './icons/MediaIcon';
import { ServerIcon } from './icons/ServerIcon';
import { ContactIcon } from './icons/ContactIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { TerminalIcon } from './icons/TerminalIcon';
import { RecycleBinIcon } from './icons/RecycleBinIcon';

export const data = [
  {
    title: 'Users',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Medias',
    icon: <MediaIcon />,
    link: '/admin/medias',
  },
  {
    title: 'Contacts',
    icon: <ContactIcon />,
    link: '/admin/contacts',
  },
  {
    title: 'Servers',
    icon: <ServerIcon />,
    link: '/admin/servers',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Terminal',
    icon: <TerminalIcon />,
    link: '/admin/terminal',
  },
  {
    title: 'Recycle Bin',
    icon: <RecycleBinIcon />,
    link: '/admin/recycle-bin',
  },
  {
    title: 'Documentation',
    icon: <DocIcon />,
    link: '/admin/documentation',
  },
];

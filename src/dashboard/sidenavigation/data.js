import HomeIcon from './icons/home';
import StatusIcon from './icons/status';
import CreditsIcon from './icons/credits';
import ArchivesIcon from './icons/archives';
import SettingsIcon from './icons/settings';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Status',
    icon: <StatusIcon />,
    link: '/admin/status',
  },
  {
    title: 'Archives',
    icon: <ArchivesIcon />,
    link: '/admin/archives',
  },
  {
    title: 'Credits',
    icon: <CreditsIcon />,
    link: '/admin/credits',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Documentation',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;

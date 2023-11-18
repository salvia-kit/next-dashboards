import { DocIcon } from './icons/DocIcon';
import { HomeIcon } from './icons/HomeIcon';
import { BillsIcon } from './icons/BillsIcon';
import { AnalyticIcon } from './icons/AnalyticIcon';
import { MonitoringIcon } from './icons/MonitoringIcon';
import { DemographicIcon } from './icons/DemographicIcon';
import { ApplicationIcon } from './icons/ApplicationIcon';

export const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Bills',
    icon: <BillsIcon />,
    link: '/admin/bills',
  },
  {
    title: 'Applications',
    icon: <ApplicationIcon />,
    link: '/admin/applications',
  },
  {
    title: 'Monitoring',
    icon: <MonitoringIcon />,
    link: '/admin/monitoring',
  },
  {
    title: 'Demographics',
    icon: <DemographicIcon />,
    link: '/admin/demographics',
  },
  {
    title: 'Analytics',
    icon: <AnalyticIcon />,
    link: '/admin/analytics',
  },
  {
    title: 'Documentation',
    icon: <DocIcon />,
    link: '/admin/documentation',
  },
];

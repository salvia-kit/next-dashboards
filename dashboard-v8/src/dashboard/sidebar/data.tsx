import { EventIcon } from "./icons/EventIcon";
import { GuideIcon } from "./icons/GuideIcon";
import { MessageIcon } from "./icons/MessageIcon";
import { PictureIcon } from "./icons/PictureIcon";
import { DocumentIcon } from "./icons/DocumentIcon";
import { StatisticsIcon } from "./icons/StatisticsIcon";

export const data = [
  {
    section: "Documents",
    icon: <DocumentIcon />,
    content: [
      {
        title: "Taxes",
        link: "/documents/taxes",
      },
      {
        title: "Travel",
        link: "/documents/travel",
      },
      {
        title: "Insurance",
        link: "/documents/insurance",
      },
    ],
  },
  {
    section: "Messages",
    icon: <MessageIcon />,
    content: [
      {
        title: "Unbox",
        link: "/messages/unbox",
      },
      {
        title: "Unread",
        link: "/messages/unread",
      },
      {
        title: "Archived",
        link: "/messages/archived",
      },
    ],
  },
  {
    section: "Pictures",
    icon: <PictureIcon />,
    content: [
      {
        title: "Vacations",
        link: "/pictures/vacations",
      },
      {
        title: "Anniversary",
        link: "/pictures/anniversary",
      },
      {
        title: "University",
        link: "/pictures/university",
      },
    ],
  },
  {
    section: "Statistics",
    icon: <StatisticsIcon />,
    content: [
      {
        title: "Finances",
        link: "/statistics/finances",
      },
      {
        title: "Call Stats",
        link: "/statistics/call-stats",
      },
      {
        title: "Trip Logs",
        link: "/statistics/trip-logs",
      },
    ],
  },
  {
    section: "Events",
    icon: <EventIcon />,
    content: [
      {
        title: "Weddings",
        link: "/events/weddings",
      },
      {
        title: "Networking",
        link: "/events/networking",
      },
    ],
  },
  {
    section: "Guides",
    icon: <GuideIcon />,
    content: [
      {
        title: "Documentation",
        link: "/guides/documentation",
      },
    ],
  },
];

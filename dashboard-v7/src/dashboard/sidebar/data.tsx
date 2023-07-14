import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { MediaIcon } from "./icons/MediaIcon";
import { ServerIcon } from "./icons/ServerIcon";
import { ContactIcon } from "./icons/ContactIcon";
import { TerminalIcon } from "./icons/TerminalIcon";
import { RecycleBinIcon } from "./icons/RecycleBinIcon";

export const data = [
  {
    section: "Applications",
    content: [
      {
        title: "Users",
        icon: <HomeIcon />,
        link: "/",
      },
      {
        title: "Medias",
        icon: <MediaIcon />,
        link: "/admin/medias",
      },
      {
        title: "Contacts",
        icon: <ContactIcon />,
        link: "/admin/contacts",
      },
    ],
  },
  {
    section: "Monitoring",
    content: [
      {
        title: "Terminal",
        icon: <TerminalIcon />,
        link: "/admin/terminal",
      },
      {
        title: "Recycle bin",
        icon: <RecycleBinIcon />,
        link: "/admin/recycle-bin",
      },
      {
        title: "Servers",
        icon: <ServerIcon />,
        link: "/admin/servers",
      },
    ],
  },
  {
    section: "Guides",
    content: [
      {
        title: "Documentation",
        icon: <DocIcon />,
        link: "/admin/documentation",
      },
    ],
  },
];

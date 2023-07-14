import { UxIcon } from "./icons/UxIcon";
import { ArIcon } from "./icons/ArIcon";
import { DocIcon } from "./icons/DocIcon";
import { AppsIcon } from "./icons/AppsIcon";
import { VideosIcon } from "./icons/VideosIcon";
import { UpdatesIcon } from "./icons/UpdatesIcon";
import { PhotographyIcon } from "./icons/PhotographyIcon";
import { IllustrationIcon } from "./icons/IllustrationIcon";
import { GraphicDesignIcon } from "./icons/GraphicDesignIcon";

export const data = [
  {
    section: "Apps",
    content: [
      {
        title: "All Apps",
        icon: <AppsIcon />,
        link: "/",
      },
      {
        title: "Updates",
        icon: <UpdatesIcon />,
        link: "/admin/updates",
      },
    ],
  },
  {
    section: "Categories",
    content: [
      {
        title: "Photography",
        icon: <PhotographyIcon />,
        link: "/admin/photography",
      },
      {
        title: "Graphic Design",
        icon: <GraphicDesignIcon />,
        link: "/admin/graphic-design",
      },
      {
        title: "Videos",
        icon: <VideosIcon />,
        link: "/admin/videos",
      },
      {
        title: "Illustrations",
        icon: <IllustrationIcon />,
        link: "/admin/illustration",
      },
      {
        title: "UI/UX",
        icon: <UxIcon />,
        link: "/admin/ux",
      },
      {
        title: "3D/AR",
        icon: <ArIcon />,
        link: "/admin/ar",
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

import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import { TimeManageIcon } from "./icons/TimeManageIcon";

export const data = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Projects",
    icon: <ProjectIcon />,
    link: "/admin/projects",
  },
  {
    title: "My tasks",
    icon: <TaskIcon />,
    link: "/admin/tasks",
  },
  {
    title: "Calendar",
    icon: <CalendarIcon />,
    link: "/admin/calendar",
  },
  {
    title: "Time manage",
    icon: <TimeManageIcon />,
    link: "/admin/time-manage",
  },
  {
    title: "Reports",
    icon: <ReportIcon />,
    link: "/admin/reports",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/admin/settings",
  },
  {
    title: "Documentation",
    icon: <DocIcon />,
    link: "/admin/documentation",
  },
];

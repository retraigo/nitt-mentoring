import { AllIcons } from "./icons.js";

export const MainMenu = [
  {
    name: "Dashboard",
    action: "/dashboard/",
    key: "dashboard",
    toolTip: "Dashboard",
    routeIcon: `${AllIcons.home}`,
    level: 1,
  },
  {
    name: "Mentees",
    action: "/dashboard/mentees",
    key: "mentees",
    toolTip: "Mentees",
    routeIcon: `${AllIcons.users}`,
    level: 1,
  },
  {
    name: "Faculty List",
    action: "/hod/faculty",
    key: "faculty",
    toolTip: "Faculty List",
    routeIcon: `${AllIcons.services}`,
    level: 2,
  },
  {
    name: "Student List",
    action: "/hod/students",
    key: "student",
    toolTip: "Student List",
    routeIcon: `${AllIcons.userplus}`,
    level: 2,
  }, /*
  {
    name: "Strategies",
    action: "/dashboard/strategies",
    key: "strats",
    toolTip: "Strategies",
    routeIcon: `${AllIcons.strategies}`,
  },
  {
    name: "Services",
    action: "/dashboard/services",
    key: "services",
    toolTip: "Services",
    routeIcon: `${AllIcons.services}`,
  },
  {
    name: "Subscription",
    action: "/dashboard/subscription",
    key: "subscription",
    toolTip: "Subscription",
    routeIcon: `${AllIcons.subscription}`,
  },
  */
];

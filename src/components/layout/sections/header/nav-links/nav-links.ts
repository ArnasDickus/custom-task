import { routes } from "src/constants/routes";

export const navLinks: NNavLinks.INavLinks[] = [
  {
    display: true,
    routeName: "Home",
    routeLink: routes["home"],
  },
  {
    display: true,
    routeName: "Movies",
    routeLink: routes["movies"],
  },
  {
    display: true,
    routeName: "Characters",
    routeLink: routes["characters"],
  },
  {
    display: true,
    routeName: "Examples",
    routeLink: routes["examples"],
  },
];

export namespace NNavLinks {
  export interface INavLinks {
    display: boolean;
    routeName: string;
    routeLink: string;
  }
}

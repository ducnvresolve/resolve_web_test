import type { BaseProps } from "@/types/base.types";

export type BaseRoute = {
  name: string;
  path: string;
};

export type NavbarProps = BaseProps & {
  pathname?: string;
};

export type NavbtnProps = NavbarProps & BaseRoute;

import NextAuth, { DefaultSession } from "next-auth"

// https://next-auth.js.org/getting-started/typescript#main-module
// https://github.com/nextauthjs/next-auth/issues/671
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      name?: string; // used just to transform into 'initials'

      initials: never;
      id: never;
    } | {
      id?: string;
      initials?: string;

      name?: never;
    };
    expires?: never;
  }
}

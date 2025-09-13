import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { patchUser } from '../services/users';

const authOptions: AuthOptions = {
    providers: [
        // OAuth authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        // https://next-auth.js.org/configuration/callbacks#session-callback
        async session({ session, token, user }) {
            // console.log({ event: 'session', session, token, user });

            const name = session.user?.name;
            const initials = name && name.split(' ')
                .map(name => name.charAt(0)) // get initials
                .filter((_, i) => i < 2) // get at most first 2 initials
                .join('').toUpperCase();

            // https://stackoverflow.com/a/75119597/1064325
            return {
                user: {
                    id: token.sub,
                    initials,
                },
            };
        },
    },
    events: {
        // https://next-auth.js.org/configuration/events#signin
        async signIn({ user, account, profile, isNewUser }) {
            // console.log({ event: 'signIn', user, account, profile, isNewUser });

            await patchUser(user?.id, { lastLogin: Date.now() });
        }
    }
};

export default authOptions;

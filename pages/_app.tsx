import { SessionProvider, signOut, useSession } from "next-auth/react";
import TopBar from "../components/react/navigation/top-bar";

function AuthenticatedRoute({ children }) {
    // https://next-auth.js.org/getting-started/client#custom-client-session-handling
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { data: session } = useSession({ required: true, onUnauthenticated: () => {
        signOut({
            redirect: true,
            callbackUrl: '/',
        });
    }});

    if (!session) {
        return null;
    }
    
    return children;
}

// TODO SessionProvider has a useful refetchInterval prop
function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <TopBar />
            {Component.requiresAuthentication ? (
                <AuthenticatedRoute>
                    <Component {...pageProps} />
                </AuthenticatedRoute>
            ) : (
                <Component {...pageProps} />
            )}
        </SessionProvider>
    );
}

export default App;
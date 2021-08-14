import '../styles/globals.css'
import { AppProps } from "next/app";
import { supabase } from "../util/supabase";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [session, setSession] = useState<boolean>(false);

  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user && (pathname === "/signin" || pathname === "/signup")) {
      setSession(true)
      push("/");
    } else if (!session?.user && pathname !== "/signup") {
      setSession(false)
      push("/signin");
    }
  });

  useEffect(() => {
    (async () => {
      const user = supabase.auth.user();
      if (user && (pathname === "/signin" || pathname === "/signup")) {
        await push("/");
      } else if (!user && pathname !== "/signup") {
        await push("/signin");
      }
      setLoading(false);
    })();
  }, []);

  return (
      <main className="w-5/12 mx-auto">
        {loading ? (
            <h1>loading...</h1>
        ) : (
            <>
              {
                session
                    ?
                    <button onClick={() => supabase.auth.signOut()}>ログアウト</button>
                    :
                    ''
              }
              <RecoilRoot>
                <Component {...pageProps} />
              </RecoilRoot>
            </>
        )}
      </main>
  );
}

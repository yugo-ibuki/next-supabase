import '../styles/globals.css'
import { AppProps } from "next/app";
import { supabase } from "../util/supabase";
import { useRouter } from "next/router";
import {useContext, useEffect, useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);

  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user && (pathname === "/signin" || pathname === "/signup")) {
      push("/");
    } else if (!session?.user && pathname !== "/signup") {
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
      <main>
        {loading ? (
            <h1>loading...</h1>
        ) : (
            <>
              <button onClick={() => supabase.auth.signOut()}>ログアウト</button>
              <Component {...pageProps} />
            </>
        )}
      </main>
  );
}

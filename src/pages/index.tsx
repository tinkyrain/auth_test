import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const {data: session} = useSession();

  return (    
    <>
      <header style={{background: 'Black'}}>
        <h1 style={{textAlign: 'center', color: 'white', padding: '10px 0px 10px 0px'}}>
          {session ? 'You are already logged in!' : 'You are not authorized....'}
        </h1>
      </header>

      <main>
        {session ?
          <button onClick={signOut} style={{width: '150px', height: '50px'}}>Sign out</button> :
          <button onClick={signIn} style={{width: '150px', height: '50px'}}>Sign in</button>
        }
      </main>    
    </>
  )
};

export default Home;

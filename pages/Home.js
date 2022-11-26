import { useSession,signIn,signOut } from 'next-auth/react';


const Home = () => {
  const session = useSession();
  console.log(session)
  if (session.data === null) {
    return <button onClick={signIn}>Login</button>
  }
  if(session.data){
    return <button onClick={signOut}>Logout</button>

  }
  return (
    <>
    
      <h1>Auth</h1>

    </>
  )
}

export default Home
import { auth } from "./firebase"

function App() {
  const getUser = ()=>{
    console.log(auth.currentUser);
  }
  return (
    <>
      <button onClick={getUser}>Get current user</button>
    </>
  )
}

export default App

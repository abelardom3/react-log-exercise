import React, { useEffect, useState } from "react";
import LoggedIn from "./components/loggedIn.js";
import NotLoggedIn from "./components/notLoggedIn.js";
import NotLoggedBtn from "./components/notLoggedBtn.js"

function App() {

  const [loggedIn, setloggedIn] = useState(false)

  useEffect(() => {
    if (loggedIn) {
      document.title = 'Home page'
    } else {
      document.title = 'Login page'
    }
  })

  const handleChange = () => {
    setloggedIn(true)
  }


  if (loggedIn) {
    return <LoggedIn />
  } else {
    return (
      <>
        <NotLoggedIn />
        <NotLoggedBtn handleChange={handleChange} />

      </>

    )
  }


}

export default App;

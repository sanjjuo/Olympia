import { Text, View } from "react-native";
import WelcomeScreen from "../components/Welcome/WelcomeScreen"
import { useEffect, useState } from "react";
import Home from "../app/Home"


export default function Index() {
  const [state, setState] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setState(false)
    }, 2000)
  }, [])
  
  return (
    <>
      {
        state ?
          <WelcomeScreen /> :
          <Home />
      }

    </>
  );
}

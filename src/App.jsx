
import Header from "./Component/Header";
import Screen from "./Component/Screen";
import { useState } from 'react';

export default function App() {
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(prev => !prev);
  };
  
  
  const togglePause = () => {
    setPaused(prev => !prev);
  };
  return (
    <>
      <Header paused={paused} togglePause={togglePause} toggleHidden = {toggleHidden} />
      <Screen paused={paused} hidden = {hidden} /> {/* 👈 pass paused state to Screen */}
    </>
  )
}
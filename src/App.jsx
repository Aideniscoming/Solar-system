
import Header from "./Component/Header";
import Screen from "./Component/Screen";
import { useState } from 'react';

export default function App() {
  const [paused, setPaused] = useState(false);
  
  const [alignment, setAlignment] = useState(null);
  
  const togglePause = () => {
    setPaused(prev => !prev);
  };
  return (
    <>
      <Header paused={paused} togglePause={togglePause} setAlignment={setAlignment} />
      <Screen paused={paused} alignment={alignment}  /> {/* 👈 pass paused state to Screen */}
    </>
  )
}
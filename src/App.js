import './App.css';
import ReactSlider from 'react-slider';
import {useEffect, useState} from  'react';

function App() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
 
  const [color, setColor] = useState('');

  function handleColorPick(red, green, blue){
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }


  useEffect(() => {
    handleColorPick(red, green, blue);
  }, [red, green, blue])

  

  function handleRedChange(e){
    setRed(e)
  }
  function handleGreenChange(e){
    setGreen(e)
  }
  function handleBlueChange(e){
    setBlue(e)
  }





  return (
    <div className="App">
      <div className="color-select" style={{backgroundColor: color}}>
      

      </div>     


      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb-red"
        trackClassName="example-track"
        max={255}
        value={red}
        defaultValue={red}
        onChange={handleRedChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>
        
      }
      />
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb-green"
        trackClassName="example-track"
        max={255}
        value={green}
        defaultValue={green}
        onChange={handleGreenChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb-blue"
        trackClassName="example-track"
        max={255}
        value={blue}
        defaultValue={blue}
        onChange={handleBlueChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
}

export default App;

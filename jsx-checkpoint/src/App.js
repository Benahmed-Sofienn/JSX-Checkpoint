import source from './source.jpg';
import myVideo from "./myVideo.mp4";
import './App.css';
import VideoPlayer from "react-video-js-player"
function App() {
  return (
    <div className='page'>
      <div className='header'>
       <h1 className='Name'>Sofien Ben ahmed</h1>
       <br></br>
       <img src={source} alt ='myImage' className='img' /> 
       <br></br>
       <img src="/public.jpg" alt="pubicImg" className='img'/>
      </div>
      <br></br>
       <VideoPlayer className='video' src={myVideo} width="320" height="240"/>

    </div>
  );
}

export default App;

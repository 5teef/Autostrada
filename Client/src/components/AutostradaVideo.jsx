import ReactPlayer from 'react-player';
import Maybach from "/video/Maybach.mp4"



export default function VideoPlayer(){
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={Maybach}
        width='100%'
        height={'100%'}
        playing={true}
        muted={true}
        loop={true}
      />
    </div>
  )
}

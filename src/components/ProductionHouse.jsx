import React, { useRef,useState } from 'react';
import img1 from './../assets/images/img1.png'
import img2 from './../assets/images/img2.png'
import img3 from './../assets/images/img3.png'
import img4 from './../assets/images/img4.png'
import img5 from './../assets/images/img5.png'
import video1 from './../assets/Videos/video1.mp4'
import video2 from './../assets/Videos/video2.mp4'
import video3 from './../assets/Videos/video3.mp4'
import video4 from './../assets/Videos/video4.mp4'
import video5 from './../assets/Videos/video5.mp4'

function ProductionHouse() {

  const videoRefs = useRef([]);

  const productionHouseList = [
    { id: 1, image: img1, video: video1 },
    { id: 2, image: img2, video: video2 },
    { id: 3, image: img3, video: video3 },
    { id: 4, image: img4, video: video4 },
    { id: 5, image: img5, video: video5 }
  ];

  const [muteStates, setMuteStates] = useState(
  new Array(5).fill(true) // initially all muted
);

  const handleClick = (index) => {
    const video = videoRefs.current[index];

    const newMuteStates = [...muteStates];
    newMuteStates[index] = !newMuteStates[index];
    setMuteStates(newMuteStates); // 🔥 re-render UI
    video.muted = newMuteStates[index];
    if (!newMuteStates[index]) {
    video.play(); // ensure sound works
  }
     
  };

  return (
    <div className='flex gap-2 md:gap-5 p-6 px-5 md:px-16'>
      
      {productionHouseList.map((item, index) => (
        
        <div
          key={item.id}
          className='relative w-[20%] rounded-lg overflow-hidden group border-[2px] border-gray-500 transition duration-300 hover:scale-110  shadow-xl shadow-gray-800'
          
          onMouseEnter={() => videoRefs.current[index].play()}
          
          onMouseLeave={() => {
            const video = videoRefs.current[index];
  video.pause();
  video.currentTime = 0;
  video.muted = true;

  const newMuteStates = [...muteStates];
  newMuteStates[index] = true;
  setMuteStates(newMuteStates);
          }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt=""
            className='w-full h-40 object-cover transition duration-300 group-hover:opacity-0 
                       group-hover:pointer-events-none z-10 relative'
          />

          {/* Video */}
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.video}
            muted
            loop
            playsInline
            className='absolute top-0 left-0 w-full h-full object-cover 
  opacity-0 group-hover:opacity-100 
  group-hover:z-20 
  transition duration-300'
          />

            {/* Sound Button */}
          <button
            onClick={(e) =>{
                e.stopPropagation();
                handleClick(index)}}
            className='absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded z-30 opacity-0 group-hover:opacity-100 transition'
          >
            {muteStates[index] ? '🔇' : '🔊'}
          </button>
        </div>
      ))}

    </div>
  );
}

export default ProductionHouse;

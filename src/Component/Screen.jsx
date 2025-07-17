import earth from '../assets/planet-earth.png';
import mars from '../assets/mars.png';
import jupiter from '../assets/jupiter.png';
const Screen = ({ paused, alignment }) => {
  
  return (
    <div className=" overflow-hidden max-md:[transform:scale(0.7)] xl:[transform:scale(1.1)] xl:mt-[20px] flex items-center justify-center bg-black relative w-[1000px] h-[600px]
                    border border-white">  
      

        {/* <div id="earth-path" className="absolute w-[250px] h-[100px] [border-radius:50%] border border-white 
        [border-width:0.1rem_0.1rem_0_0] [transform:rotateX(120deg)]">
        </div> [animation:orbit_4s_linear_infinite]*/}
      <div id='sun' className="absolute w-[100px] h-[100px] bg-yellow-300 rounded-full 
                      shadow-[0_0_80px_yellow]
                      hover:shadow-[0_0_10px_yellow]
                      ">
      
        <div
             className='absolute top-1/2 left-1/2 flex items-center justify-center '>
          <div id ='moon-orbit' className="absolute w-[350px] h-[200px] [border-radius:50%] border border-white 
                                            [border-width:0.1rem_0.1rem_0_0] [transform:rotateZ(170deg)_rotateX(85deg)]">
          </div>
          <div id ='moon-orbit' className="absolute w-[250px] h-[100px] [border-radius:50%] border border-white 
                                            [border-width:0.1rem_0.1rem_0_0] [transform:rotateZ(170deg)_rotateX(85deg)]">
          </div>
          <div id ='moon-orbit' className="absolute w-[450px] h-[300px] [border-radius:50%] border border-white 
                                            [border-width:0.1rem_0.1rem_0_0] [transform:rotateZ(170deg)_rotateX(85deg)]">
          </div>
          <div id ='moon-orbit' className="absolute w-[550px] h-[400px] [border-radius:50%] border border-white 
                                            [border-width:0.1rem_0.1rem_0_0] [transform:rotateZ(170deg)_rotateX(85deg)]">
          </div>
          <div id ='moon-orbit' className="absolute w-[650px] h-[500px] [border-radius:50%] border border-white 
                                            [border-width:0.1rem_0.1rem_0_0] [transform:rotateZ(170deg)_rotateX(85deg)]">
          </div>
        </div>
      </div>
      
      <div id = 'earth' 
          style={{ animationPlayState: paused ? 'paused' : 'running',
                   transform:
                      alignment === 'left'
                        ? 'translateX(-125px)'
                        : alignment === 'right'
                        ? 'translateX(125px)'
                        : alignment === 'front'
                        ? 'translateX(0) translateY(15px)'
                        : alignment === 'eclipse'
                        ? 'translateX(0) translateY(100px)'
                        : '',
          }} 
          className={`absolute w-[25px] h-[25px] bg-sky-500 rounded-full shadow-[0_0_10px_white] 
                                  ${!alignment ? '[offset-path:path("M125_0_A125_50_0_1_1_-125_0_A125_50_0_1_1_125_0")]' : ''}
                                  [offset-rotate:0deg]
                                  hover:shadow-[0_0_50px_white]
                                  flex items-center justify-center
                                  ${!alignment ? '[animation:orbit_10s_linear_infinite,getSmall_10s_linear_infinite]' : ''}`}>
        <img src={earth} alt="Earth" className="w-full h-full rounded-full" />
        
        {/* <div id ='moon-orbit' className="absolute w-[100px] h-[50px] [border-radius:50%] border border-white 
                                        [border-width:0.1rem_0.1rem_0_0] [transform:rotateY(100deg)]">
        </div> */}
      

        <div id='moon' 
            style={{ animationPlayState: paused ? 'paused' : 'running',
                     transform:
                        alignment === 'eclipse'
                        ? 'translateX(0) translateY(-30px)'
                        : '',
            }} 
            className={` absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] 
                                  ${alignment !== 'eclipse' ? '[offset-path:path("M0_25_A8.7_25_0_1_1_0_-25_A8.7_25_0_1_1_0_25")]' : ''}
                                  [offset-rotate:0deg]
                                  ${alignment !== 'eclipse' ? '[animation:orbit_4s_linear_infinite,hidden_4s_linear_infinite]' : ''} `}
                                  >

        </div>
      </div>
      <div id='mars' 
           style={{ animationPlayState: paused ? 'paused' : 'running',
                    transform:
                      alignment === 'left'
                        ? 'translateX(-225px)'
                        : alignment === 'right'
                        ? 'translateX(225px)'
                        : alignment === 'front'
                        ? 'translateX(0) translateY(35px)'
                        : alignment === 'eclipse'
                        ? 'scale(0)'
                        : '',
           }}
           className={` absolute w-[50px] h-[50px] bg-yellow-700 rounded-full shadow-[0_0_10px_white]
                                flex items-center justify-center
                                hover:shadow-[0_0_50px_white]
                                [offset-rotate:0deg]
                                ${!alignment ? '[offset-path:path("M225_0_A225_75_0_1_1_-225_0_A225_75_0_1_1_225_0")]' : ''}
                                ${!alignment ? '[animation:orbit_18s_linear_infinite,getSmall_18s_linear_infinite]' : ''}`}>
        <img src={mars} alt="Mars" className="w-full h-full rounded-full" />
       

                                
        {/* <div id ='moon-orbit' className="absolute w-[150px] h-[80px] [border-radius:50%] border border-white 
                                        [border-width:0.1rem_0.1rem_0_0] [transform:rotate(120deg)]
                                        
                                        ">
        </div>
        <div id ='moon-orbit' className="absolute w-[150px] h-[80px] [border-radius:50%] border border-white 
                                        [border-width:0.1rem_0.1rem_0_0] [transform:rotate(30deg)]
                                        ">
        </div> */}
        <div  id='moon' 
              style={{ animationPlayState: paused ? 'paused' : 'running',
                      
        }}
              className=" absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] 
                                  [offset-rotate:0deg]
                                  [offset-path:path('M37.5_-64.95_A75_40_120_1_1_-37.5_64.95_A75_40_120_1_1_37.5_-64.95')]

                                  [animation:orbit_7s_linear_infinite]
                                  ">                  
        </div>
        <div  id='moon' 
              style={{ animationPlayState: paused ? 'paused' : 'running' }}
              className=" absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] 
                                  [offset-rotate:0deg]
                                  [offset-path:path('M-64.95_-37.5_A75_40_30_1_1_64.95_37.5_A75_40_30_1_1_-64.95_-37.5')]

                                  [animation:orbit_7s_linear_infinite]
                                  ">
                                
        </div>
      </div>
      
      
      <div  id='jupiter' 
            style={{ animationPlayState: paused ? 'paused' : 'running',
                      transform:
                        alignment === 'left'
                          ? 'translateX(-375px)'
                          : alignment === 'right'
                          ? 'translateX(375px)'
                          : alignment === 'front'
                          ? 'translateX(0) translateY(55px)'
                          : alignment === 'eclipse'
                          ? 'scale(0)'
                          : '',
                    }} 
            className={` absolute w-[70px] h-[70px] bg-stone-600 rounded-full shadow-[0_0_10px_white]
                                  flex items-center justify-center
                                  [offset-rotate:0deg]
                                  hover:shadow-[0_0_50px_white]
                                  ${!alignment ? '[offset-path:path("M375_0_A375_47.24_0_1_1_-375_0_A375_47.24_0_1_1_375_0")]' : ''}
                                  ${!alignment ? '[animation:orbit_25s_linear_infinite,getSmall_25s_linear_infinite]' : ''}`}>
        <img src={jupiter} alt="Jupiter" className="w-full h-full rounded-full" />   
                          
        <div 
        style={{ animationPlayState: paused ? 'paused' : 'running' }} 
        className="absolute flex items-center justify-center [animation:orbit-around_4s_linear_infinite]">
          <div id ='moon-orbit' className="absolute w-[150px] h-[80px] [border-radius:50%] border border-white 
                                        [border-width:0.1rem_0.1rem_0_0] [transform:rotate(120deg)]
                                        [border-style:dashed]
                                        
                                        ">
          </div>
          <div id ='moon-orbit' className="absolute w-[150px] h-[80px] [border-radius:50%] border border-white 
                                        [border-width:0.1rem_0.1rem_0_0] [transform:rotate(30deg)]
                                        [border-style:dashed]
                                        ">
          </div>

        </div>                         
        
      </div>
    </div>

  )
}

export default Screen
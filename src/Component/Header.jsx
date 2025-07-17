
const Header = ({ paused, togglePause, setAlignment }) => {
  return (
    <div>
      <div className="max-md:[transform:scale(0.7)] flex flex-col font-bold items-center justify-center">
        <div className="text-[2rem]">CODING MY WAY THROUGH THE</div>
        <div className="text-[4rem]">GALAXY</div>
      </div>
      <header className="flex items-center justify-between max-w-[100%]
                         max-md:[transform:scale(0.7)]
                         text-white font-bold mx-auto
                         py-[20px] px-[30px]">
        <div>Illustration of Solar System</div>
        <div className="flex items-center justify-end
                         text-white font-bold gap-[20px]
                         ">
          <button
            onClick={() => {
              setAlignment(null)
            
              togglePause()
            }
          }
            className="bg-white text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            {paused ? "Resume" : "Pause"}
          </button>

          <button
            onClick={() => {
              setAlignment('left');
              setPaused(true)
            }
          }
            className="bg-white text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            Left Align
          </button>
           <button
            onClick={() => {
              setAlignment('right');
              setPaused(true);
            }
          }
            className="bg-white text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            Right Align
          </button>
          <button
            onClick={() => {
              
              setAlignment('front');
              setPaused(true);
            }
          }
            className="bg-white text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            Front Align
          </button>
          <button
            onClick={() => {
              
              setAlignment('eclipse');
              setPaused(true);
            }
          }
            className="bg-white text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
          >
            Solar Eclipse
          </button>
        </div>
          
      
      </header>
    </div>
  );
};


export default Header
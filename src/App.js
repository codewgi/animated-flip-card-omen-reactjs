import logo from './logo.svg';
import './css/style.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#090909] grid place-content-center">
      <div className='w-[350px] h-[590px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
        <div className='relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-500 '>
          <div className='w-full h-full absolute  rounded-3xl overflow-hidden flex items-end'>
            <img src='/img/omen.jpeg' className='w-full h-full'/>
            {/* <span className='w-full text-center absolute bottom-10 z-10 text-4xl font-bold text-neutral-300 group-hover:opacity-10 duration-500'>
              AGENT | OMEN
            </span> */}
          </div>
          <div className='absolute rotate-y-180 backface-hidden w-full h-full bg-[#0F1823] bg-opacity-95 overflow-hidden rounded-3xl space-y-5 p-10 text-neutral-300'>
            <div>
              <span className='font-bold text-3xl'>AGENT | OMEN</span>
            </div>
            <div className='flex flex-col space-y-2'>
              <span className='font-semibold'>
                // ROLE
              </span>
              <span className='font-bold text-3xl'>
              CONTROLLER
              </span>
            </div>
            <div className='flex flex-col space-y-5'>
              <span className='font-bold'>
                // BIOGRAPHY
              </span>
              <span>
                A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

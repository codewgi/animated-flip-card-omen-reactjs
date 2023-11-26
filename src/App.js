import logo from './logo.svg';
import './css/style.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#090909] grid place-content-center">
      <div className='w-[350px] h-[590px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
        <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
          <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
            <img src='/img/omen.jpeg' className='w-full h-full'/>
          </div>
          <div className='absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden'>
            <div>
              <span className='font-bold text-3xl'>AGENT | OMEN</span>
            </div>
            <div className='flex flex-col space-y-2'>
              <span className='font-semibold'>
                // ROLE
              </span>
              <span className='text-3xl font-bold'>
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

import './App.css'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import Logo from './assets/shared/logo.svg?react'
import Hamburger from './assets/shared/icon-hamburger.svg?react'

import moon from './assets/destination/image-moon.webp'
import dh from './assets/crew/image-douglas-hurley.webp'
import launchPort from './assets/technology/image-launch-vehicle-portrait.jpg'
import capsulePort from './assets/technology/image-space-capsule-portrait.jpg'
import spacePort from './assets/technology/image-spaceport-portrait.jpg'

function Header({ index, setIndex, sections, isAnimating }) {
  const handleClick = (i) => {
    if (isAnimating.current || i === index) return
    isAnimating.current = true
    setIndex(i)
    setTimeout(() => { isAnimating.current = false }, 800)
  }

  return (
    <header className="fixed top-0 left-0 z-10 flex flex-row p-6 w-full items-center justify-between">
      {/* {sections.map(({ label }, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === index ? 'font-bold' : 'opacity-60'}
        >
          {label}
        </button>
      ))} */}
        <Logo viewBox="0 0 48 48" className='w-[40px] h-[40px]'/>
        <Hamburger />
    </header>
  )
}

const Home = ({ isAnimating, index, setIndex }) => {
  const handleClick = (i) => {
    if (isAnimating.current || i === index) return
    isAnimating.current = true
    setIndex(i)
    setTimeout(() => { isAnimating.current = false }, 800)
  }

  return (
    <div className="bg-[url('./assets/home/background-home-mobile.jpg')] flex flex-col w-full h-full bg-cover bg-top border-b-2 border-white/20 pb-6">
      <div className='flex flex-col w-full items-center justify-center p-6 py-4 gap-30 mt-[96px] pt-2'>
        <div className='text-[#D0D6F9] w-full flex flex-col items-center justify-center text-center gap-2'>
          <p className='font-["Barlow_Condensed"] tracking-[0.2rem] text-[0.9rem]'>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-white font-[Bellefair] text-[5rem]'>SPACE</h1>
          <p className='font-[Barlow] text-[0.95rem] leading-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <button className='font-[Bellefair] bg-white w-36 h-36 rounded-full text-lg' onClick={() => handleClick(1)}>EXPLORE</button>
      </div>
    </div>
  )
}

const Destination = () => {
  return (
    <div className="bg-[url('./assets/destination/background-destination-mobile.jpg')] flex flex-col w-full h-full bg-cover bg-top border-b-2 border-white/20 pb-6">
      <div className='flex flex-col w-full items-center justify-center p-6 py-4 mt-[96px] gap-12 pt-2'>
        <div className='font-["Barlow_Condensed"] text-[0.9rem] flex flex-row gap-4 tracking-[0.2rem] text-white'>
          <p className='font-bold opacity-25'>01</p>
          <p>PICK YOUR DESTINATION</p>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='px-24'>
            <img src={moon} alt="" />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row font-["Barlow_Condensed"] text-[#D0D6F9] w-full items-center justify-center gap-8'>
              <p>MOON</p>
              <p>MARS</p>
              <p>EUROPA</p>
              <p>TITAN</p>
            </div>
            <div className='flex flex-col items-center text-center gap-2 border-b border-white/25 px-6 pb-6'>
              <h1 className='text-white font-[Bellefair] text-[3.3rem]'>MOON</h1>
              <p className='font-[Barlow] text-[0.85rem] leading-6 text-[#D0D6F9]'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='flex flex-col'>
                <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>AVG. DISTANCE</p>
                <p className='text-white font-[Bellefair] text-[1.8rem]'>384,400 KM</p>
              </div>
              <div>
                <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>EST. TRAVEL TIME</p>
                <p className='text-white font-[Bellefair] text-[1.8rem]'>3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Crew = () => {
  return (
    <div className="bg-[url('./assets/crew/background-crew-mobile.jpg')] flex flex-col w-full h-full bg-cover bg-top border-b-2 border-white/20 pb-6">
      <div className='flex flex-col w-full items-center justify-center p-6 py-4 mt-[96px] gap-12 pt-2'>
        <div className='font-["Barlow_Condensed"] text-[0.9rem] flex flex-row gap-4 tracking-[0.2rem] text-white'>
          <p className='font-bold opacity-25'>02</p>
          <p>MEET YOUR CREW</p>
        </div>
        <div className='flex flex-col text-center items-center gap-10'>
          <div className='flex flex-col gap-4 px-4'>
            <div className='flex flex-col'>
              <p className='text-white/50 font-[Bellefair] text-[1.1rem]'>COMMANDER</p>
              <h1 className='text-white font-[Bellefair] text-[1.45rem]'>DOUGLAS HURLEY</h1>
            </div>
            <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            <div className='flex flex-row w-full items-center justify-center gap-4 mt-14'>
              <div className='w-2.5 h-2.5 bg-white opacity-25 rounded-full'></div>
              <div className='w-2.5 h-2.5 bg-white opacity-25 rounded-full'></div>
              <div className='w-2.5 h-2.5 bg-white opacity-25 rounded-full'></div>
              <div className='w-2.5 h-2.5 bg-white opacity-25 rounded-full'></div>
            </div>
          </div>
          <div className='w-full px-12 ml-4 mask-b-from-80%'>
            <img src={dh} alt="" className='w-full h-full object-cover'/>
          </div>
        </div>
      </div>
    </div>
  )
}

const variants = {
  initial: (direction: number) => ({
    x: direction === 1 ? '100%' : direction === -1 ? '-100%' : 0,
    y: direction === 0 ? '20%' : 0,
  }),
  animate: {
    x: 0,
    y: 0,
  },
  exit: (direction: number) => ({
    x: direction === 1 ? '-100%' : direction === -1 ? '100%' : 0,
    y: direction === 0 ? '-20%' : 0,
  })
}

const Technology = ({ technologyVis, setTechnologyVis, direction, leftTechClick, rightTechClick }) => {
  return (
    <div className="bg-[url('./assets/technology/background-technology-mobile.jpg')] flex flex-col w-full h-full bg-cover bg-top pb-6">
      <div className='flex flex-col w-full items-center justify-center py-4 mt-[96px] gap-18 pt-2'>
        <div className='font-["Barlow_Condensed"] text-[0.9rem] flex flex-row gap-4 tracking-[0.2rem] text-white'>
          <p className='font-bold opacity-25'>03</p>
          <p>SPACE LAUNCH 101</p>
        </div>
        <div className='flex flex-col text-center items-center gap-8 w-full'>
          <div className='h-[258px] w-full relative'>
            <AnimatePresence custom={direction} initial={false}>
            {technologyVis == 1 && (
              <motion.img src={launchPort} alt=""
                key={technologyVis} 
                custom={direction}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration: 0.4, ease: 'easeInOut'}}
                className='absolute inset-0 w-full h-full object-cover'
              />
            )}
            {technologyVis == 2 && (
              <motion.img src={capsulePort} alt=""
                key={technologyVis} 
                custom={direction}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration: 0.4, ease: 'easeInOut'}}
                className='absolute inset-0 w-full h-full object-cover'
              />
            )}
            {technologyVis == 3 && (
              <motion.img src={spacePort} alt=""
                key={technologyVis} 
                custom={direction}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration: 0.4, ease: 'easeInOut'}}
                className='absolute inset-0 w-full h-full object-cover'
              />
            )}
            </AnimatePresence>
          </div>
          <div className='flex flex-row gap-4'>
            {[1, 2, 3].map(e => (
              <button className={`${technologyVis == e ? "bg-white text-black" : "bg-none text-white"} w-10 h-10 border border-white/25 rounded-full flex items-center justify-center font-[Bellefair]`} onClick={technologyVis > e ? () => leftTechClick(e) : () => rightTechClick(e)}>{e}</button>
            ))}
          </div>
          <div className='flex flex-col items-center text-center gap-2 px-8'>
            <p className='text-white/50 font-[Bellefair] text-[1.1rem]'>THE TERMINOLOGY...</p>
            <h1 className='text-white font-[Bellefair] text-[1.45rem]'>LAUNCH VEHICLE</h1>
            <p className='font-[Barlow] text-[0.89rem] leading-[1.6rem] text-[#D0D6F9] mt-1'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const sections = [
  { label: 'Home', Component: Home },
  { label: 'Destination', Component: Destination },
  { label: 'Crew', Component: Crew },
  { label: 'Technology', Component: Technology },
];

function App() {
  const [index, setIndex] = useState(0)
  const [technologyVis, setTechnologyVis] = useState(1)
  const [direction, setDirection] = useState(1)
  const indexRef = useRef(0)
  const isAnimating = useRef(false)

  const isMobile = useMediaQuery({ maxWidth: 768 });

  console.log(technologyVis)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    if (isMobile) return

    const handleWheel = (e) => {
      if (isAnimating.current) return

      const dir = e.deltaY > 0 ? 1 : -1
      const next = indexRef.current + dir

      if (next < 0 || next >= sections.length) return

      isAnimating.current = true
      setIndex(next)
      setTimeout(() => { isAnimating.current = false }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [isMobile])

  const leftTechClick = (i: number) => {
    setDirection(-1)
    setTechnologyVis(i)
  }

  const rightTechClick = (i: number) => {
    setDirection(1)
    setTechnologyVis(i)
  }

  if (isMobile) return (
    <div className="flex flex-col w-full">
      <Header index={index} setIndex={setIndex} sections={sections} isAnimating={isAnimating} /> 
      {sections.map(({ Component }, i) => (
        <Component isAnimating={isAnimating} index={index} setIndex={setIndex} isActive={i === index} technologyVis={technologyVis} setTechnologyVis={setTechnologyVis} direction={direction} rightTechClick={rightTechClick} leftTechClick={leftTechClick} />
      ))}
    </div>
  )


  return (
    <div className="fixed inset-0 overflow-hidden">
      <Header index={index} setIndex={setIndex} sections={sections} isAnimating={isAnimating} /> 
      <motion.div
        className="flex flex-row h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      >
        {sections.map(({ Component }, i) => (
          <section key={i} className="h-screen w-full flex-shrink-0 flex">
            <Component isAnimating={isAnimating} index={index} setIndex={setIndex} technologyVis={technologyVis} isActive={i === index}/>
          </section>
        ))}
      </motion.div>
    </div>
  )
}

export default App
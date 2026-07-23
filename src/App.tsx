import './App.css'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import Logo from './assets/shared/logo.svg?react'
import Hamburger from './assets/shared/icon-hamburger.svg?react'
import Close from './assets/shared/icon-close.svg?react'

import moon from './assets/destination/image-moon.webp'
import mars from './assets/destination/image-mars.webp'
import europa from './assets/destination/image-europa.webp'
import titan from './assets/destination/image-titan.webp'
import dh from './assets/crew/image-douglas-hurley.webp'
import ms from './assets/crew/image-mark-shuttleworth.webp'
import vg from './assets/crew/image-victor-glover.webp'
import aa from './assets/crew/image-anousheh-ansari.webp'
import launchPort from './assets/technology/image-launch-vehicle-portrait.jpg'
import capsulePort from './assets/technology/image-space-capsule-portrait.jpg'
import spacePort from './assets/technology/image-spaceport-portrait.jpg'

const MobileHeader = ({ setNavVis }) => {
  return (
    <header className="absolute top-0 left-0 z-10 flex flex-row p-6 w-full items-center justify-between">
        <Logo viewBox="0 0 48 48" className='w-[40px] h-[40px]'/>
        <button onClick={() => setNavVis(true)} aria-label='open navigation menu'>
          <Hamburger />
        </button>
    </header>
  )
}

const navs = ['#HOME', '#DESTINATION', '#CREW', '#TECHNOLOGY']

const DesktopHeader = ({ index, setIndex, isAnimating }) => {
  const handleClick = (i) => {
    if (isAnimating.current || i === index) return
    isAnimating.current = true
    setIndex(i)
    setTimeout(() => { isAnimating.current = false }, 800)
  }

  return (
    <header className="fixed lg:absolute top-0 lg:top-12 left-0 pl-8 lg:pl-16 z-10 flex flex-row pr-0 w-full items-center justify-between">
        <Logo viewBox="0 0 48 48"/>
        <div className='absolute h-[1.5px] bg-white/33 left-45 right-180 z-55 max-lg:opacity-0'></div>
        <div className='flex flex-row gap-8 lg:gap-12 pr-8 lg:pr-16 pl-26 lg:pl-42 font-["Barlow_Condensed"] text-white bg-white/5 backdrop-blur-md tracking-[0.15rem]'>
          {navs.map((e, i) => (
            <button className={`${index == i ? "border-b-4 border-white" : "hover:border-b-2 hover:border-white/75"} flex flex-row gap-2 py-6 lg:py-9 cursor-pointer transition`} onClick={() => handleClick(i)} key={e}>
              <p>{'0' + i}</p>
              <p className='font-light'>{e.split('#')[1]}</p>
            </button>
          ))}
        </div>
    </header>
  )
}

const TabletHeader = () => {
  return (
    <header className="fixed top-0 left-0 pl-8 z-10 flex flex-row pr-0 w-full items-center justify-between">
        <Logo viewBox="0 0 48 48"/>
        <div className='absolute h-[1.5px] bg-white/33 left-45 right-180 z-55'></div>
        <div className='flex flex-row gap-8 pr-8 pl-26 font-["Barlow_Condensed"] text-white bg-white/5 backdrop-blur-md tracking-[0.15rem]'>
          {navs.map((e, i) => (
            <a href={e} className='flex flex-row gap-2 py-6 cursor-pointer' key={e}>
              <p>{'0' + i}</p>
              <p className='font-light'>{e.split('#')[1]}</p>
            </a>
          ))}
        </div>
    </header>
  )
}

const Home = ({ isAnimating, index, setIndex, isMobile }) => {
  const handleClick = (i) => {
    if (isAnimating.current || i === index) return
    isAnimating.current = true
    setIndex(i)
    setTimeout(() => { isAnimating.current = false }, 800)
  }

  return (
    <section className="bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')] flex flex-col w-full h-full bg-cover bg-center border-b-2 border-white/20 pb-6 lg:pb-0 lg:border-none" id='HOME'>
      <div className='flex flex-col lg:grid lg:grid-cols-[48%_auto] w-full items-center justify-center p-6 py-4 gap-30 mt-[96px] lg:px-40 md:mt-[165px] pt-2 lg:fixed lg:bottom-22 lg:gap-0 lg:justify-between'>
        <div className='text-[#D0D6F9] w-full flex flex-col items-center justify-center text-center gap-2 lg:text-left lg:items-start lg:gap-0 md:px-28 lg:px-0'>
          <p className='font-["Barlow_Condensed"] tracking-[0.2rem] text-[0.9rem] md:text-xl xl:text-[1.85rem]'>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className='text-white font-[Bellefair] text-[5rem] xl:text-[9rem] md:text-[7rem] xl:leading-50'>SPACE</h1>
          <p className='font-[Barlow] text-[0.95rem] leading-7 xl:text-[1.125rem] xl:leading-8 lg:mt-2'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        {isMobile && (
          <a href='#DESTINATION' className='font-[Bellefair] flex flex-row text-center items-center justify-center bg-white w-36 h-36 lg:w-54 lg:h-54 xl:w-70 xl:h-70 rounded-full text-lg lg:text-2xl xl:text-3xl relative cursor-pointer hover:text-[#a3a3a3] transition duration-400' onClick={() => handleClick(1)}>
            <p>EXPLORE</p>
            <motion.div className='absolute -top-[30%] -bottom-[30%] -left-[30%] -right-[30%] bg-white/10 rounded-full scale-55'
              whileHover={{
                scale: 1.67,
                transition: { duration: 0.4 }
              }}     
            />
          </a>
        )}
        {!(isMobile) && (
          <button className='font-[Bellefair] bg-white w-36 h-36 lg:w-54 lg:h-54 xl:w-70 xl:h-70 rounded-full text-lg lg:text-2xl xl:text-3xl relative cursor-pointer hover:text-[#a3a3a3] transition duration-400' onClick={() => handleClick(1)}>
            <p>EXPLORE</p>
            <motion.div className='absolute -top-[30%] -bottom-[30%] -left-[30%] -right-[30%] bg-white/10 rounded-full scale-55'
              whileHover={{
                scale: 1.67,
                transition: { duration: 0.4 }
              }}     
            />
          </button>
        )}
      </div>
    </section>
  )
}

const Destination = ({ destVis, setDestVis }) => {
  return (
    <section className="bg-[url('./assets/destination/background-destination-mobile.jpg')] sm:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')] flex flex-col w-full h-full bg-cover bg-top border-b-2 lg:pb-0 lg:border-none border-white/20 pb-6 md:pb-10" id='DESTINATION'>
      <div className='flex flex-col w-full items-center md:items-start justify-center p-6 py-4 mt-[96px] md:mt-[128px] lg:fixed lg:bottom-12 lg:px-24 xl:px-36 gap-12 md:gap-18 lg:gap-24 pt-2'>
        <div className='font-["Barlow_Condensed"] text-[0.9rem] md:text-2xl lg:text-3xl flex flex-row gap-4 lg:gap-6 tracking-[0.2rem] text-white md:px-8 lg:px-4'>
          <p className='font-bold opacity-25'>01</p>
          <p>PICK YOUR DESTINATION</p>
        </div>
        <div className='flex flex-col gap-10 lg:grid lg:grid-cols-2 md:gap-16 lg:gap-24'>
          <div className='px-24 flex flex-row items-center justify-center md:px-52 lg:px-2'>
            <AnimatePresence mode='wait'>
              {destVis == 1 && (
                <motion.img src={moon} alt="Moon image" key={destVis}
                  initial={{ opacity: 0, rotate: -100 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 100 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                />
              )}
              {destVis == 2 && (
                <motion.img src={mars} alt="Mars image" key={destVis}
                  initial={{ opacity: 0, rotate: -100 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 100 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                />
              )}
              {destVis == 3 && (
                <motion.img src={europa} alt="Europa image" key={destVis}
                  initial={{ opacity: 0, rotate: -100 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 100 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                />
              )}
              {destVis == 4 && (
                <motion.img src={titan} alt="Titan image" key={destVis}
                  initial={{ opacity: 0, rotate: -100 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 100 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                />
              )}
              
            </AnimatePresence>
          </div>
          <div className='flex flex-col gap-4 xl:gap-6'>
            <div className='flex flex-row font-["Barlow_Condensed"] text-[#D0D6F9] w-full items-start justify-center lg:justify-start gap-8 tracking-wider lg:tracking-[0.1rem] lg:ml-8'>
              {['MOON', 'MARS', 'EUROPA', 'TITAN'].map((e, i) => (
                <button className={`${destVis == i+1 ? "border-b-3 text-white pb-2" : "border-none"} transition cursor-pointer hover:text-white`} onClick={() => setDestVis(i+1)} key={e}>{e}</button>
              ))}
            </div>
            <AnimatePresence initial={false} mode='wait'>
              {destVis == 1 && (
                <motion.div className='flex flex-col gap-4' key={destVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-2 lg:gap-0 border-b border-white/25 px-6 pb-6 md:pb-8 lg:pb-10 md:mx-20 lg:mx-0 lg:px-0 lg:ml-8 xl:mr-18'>
                    <h2 className='text-white font-[Bellefair] text-[3.3rem] md:text-[4.5rem] xl:text-[6rem]'>MOON</h2>
                    <p className='font-[Barlow] text-[0.85rem] md:text-[1rem] xl:text-[1.125rem] leading-6 md:leading-8 text-[#D0D6F9]'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                  </div>
                  <div className='flex flex-col md:flex-row w-full items-center md:justify-center lg:justify-start text-center md:text-left gap-4 md:gap-22 lg:ml-8 md:mt-4'>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>AVG. DISTANCE</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>384,400 KM</p>
                    </div>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>EST. TRAVEL TIME</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>3 DAYS</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {destVis == 2 && (
                <motion.div className='flex flex-col gap-4' key={destVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-2 lg:gap-0 border-b border-white/25 px-6 pb-6 md:pb-8 lg:pb-10 md:mx-20 lg:mx-0 lg:px-0 lg:ml-8 lg:mr-18'>
                    <h2 className='text-white font-[Bellefair] text-[3.3rem] md:text-[4.5rem] lg:text-[6rem]'>MARS</h2>
                    <p className='font-[Barlow] text-[0.85rem] md:text-[1rem] lg:text-[1.125rem] leading-6 md:leading-8 text-[#D0D6F9]'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                  </div>
                  <div className='flex flex-col md:flex-row w-full items-center md:justify-center lg:justify-start text-center gap-4 md:text-left gap-4 md:gap-22 lg:ml-8 md:mt-4'>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>AVG. DISTANCE</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>225 MIL. KM</p>
                    </div>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>EST. TRAVEL TIME</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>9 MONTHS</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {destVis == 3 && (
                <motion.div className='flex flex-col gap-4' key={destVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-2 lg:gap-0 border-b border-white/25 px-6 pb-6 md:pb-8 lg:pb-10 md:mx-20 lg:mx-0 lg:px-0 lg:ml-8 lg:mr-18'>
                    <h2 className='text-white font-[Bellefair] text-[3.3rem] md:text-[4.5rem] lg:text-[6rem]'>EUROPA</h2>
                    <p className='font-[Barlow] text-[0.85rem] md:text-[1rem] lg:text-[1.125rem] leading-6 md:leading-8 text-[#D0D6F9]'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                  </div>
                  <div className='flex flex-col md:flex-row w-full items-center md:justify-center lg:justify-start text-center gap-4 md:text-left gap-4 md:gap-22 lg:ml-8 md:mt-4'>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>AVG. DISTANCE</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>628 MIL. KM</p>
                    </div>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>EST. TRAVEL TIME</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>3 YEARS</p>
                    </div>
                  </div>
                </motion.div>
              )}
              {destVis == 4 && (
                <motion.div className='flex flex-col gap-4' key={destVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-2 lg:gap-0 border-b border-white/25 px-6 pb-6 md:pb-8 lg:pb-10 md:mx-20 lg:mx-0 lg:px-0 lg:ml-8 lg:mr-18'>
                    <h2 className='text-white font-[Bellefair] text-[3.3rem] md:text-[4.5rem] lg:text-[6rem]'>TITAN</h2>
                    <p className='font-[Barlow] text-[0.85rem] md:text-[1rem] lg:text-[1.125rem] leading-6 md:leading-8 text-[#D0D6F9]'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                  </div>
                  <div className='flex flex-col md:flex-row w-full items-center md:justify-center lg:justify-start text-center gap-4 md:text-left gap-4 md:gap-22 lg:ml-8 md:mt-4'>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>AVG. DISTANCE</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>1.6 BIL. KM</p>
                    </div>
                    <div className='flex flex-col lg:gap-1'>
                      <p className='font-[Barlow] text-[0.9rem] leading-6 text-[#D0D6F9]'>EST. TRAVEL TIME</p>
                      <p className='text-white font-[Bellefair] text-[1.8rem]'>7 YEARS</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

const Crew = ({ crewVis, setCrewVis }) => {
  return (
    <section className="bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')] flex flex-col w-full h-full bg-cover bg-bottom border-b-2 border-white/20 pb-4 lg:pb-0 lg:border-none md:pb-10" id='CREW'>
      <div className='flex flex-col w-full items-center md:items-start justify-center p-6 py-4 mt-[96px] md:mt-[128px] gap-12 pt-2 lg:fixed lg:bottom-12 lg:px-28 xl:px-48 lg:gap-4'>
        <div className='font-["Barlow_Condensed"] text-[0.9rem] md:text-2xl lg:text-3xl flex flex-row gap-4 lg:gap-6 tracking-[0.2rem] text-white md:px-8 lg:px-4'>
          <p className='font-bold opacity-25'>02</p>
          <p>MEET YOUR CREW</p>
        </div>
        <div className='flex flex-col text-center items-center lg:items-end gap-10 lg:grid lg:grid-cols-2 lg:gap-24'>
          <div className='flex flex-col gap-4 lg:gap-18 px-3'>
            <AnimatePresence initial={false} mode='wait'>
              {crewVis == 1 && (
                <motion.div className='flex flex-col gap-4' key={crewVis}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col lg:text-left md:gap-2 lg:gap-0'>
                    <p className='text-white/50 font-[Bellefair] text-[1.1rem] md:text-2xl lg:text-3xl'>COMMANDER</p>
                    <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem]'>DOUGLAS HURLEY</h2>
                  </div>
                  <p className='font-[Barlow] text-[0.87rem] md:text-[1rem] lg:text-[1.125rem] lg:text-left leading-6 md:leading-7 lg:leading-8 text-[#D0D6F9] md:px-24 lg:px-0'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </motion.div>
              )}
              {crewVis == 2 && (
                <motion.div className='flex flex-col gap-4' key={crewVis}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col lg:text-left md:gap-2 lg:gap-3'>
                    <p className='text-white/50 font-[Bellefair] text-[1.1rem] md:text-2xl lg:text-3xl'>MISSION SPECIALIST</p>
                    <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem] lg:leading-14'>MARK SHUTTLEWORTH</h2>
                  </div>
                  <p className='font-[Barlow] text-[0.87rem] md:text-[1rem] lg:text-[1.125rem] lg:text-left leading-6 md:leading-7 lg:leading-8 text-[#D0D6F9] md:px-24 lg:px-0'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </motion.div>
              )}
              {crewVis == 3 && (
                <motion.div className='flex flex-col gap-4' key={crewVis}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col lg:text-left md:gap-2 lg:gap-0'>
                    <p className='text-white/50 font-[Bellefair] text-[1.1rem] md:text-2xl lg:text-3xl'>PILOT</p>
                    <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem]'>VICTOR GLOVER</h2>
                  </div>
                  <p className='font-[Barlow] text-[0.87rem] md:text-[1rem] lg:text-[1.125rem] lg:text-left leading-6 md:leading-7 lg:leading-8 text-[#D0D6F9] md:px-24 lg:px-0'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                </motion.div>
              )}
              {crewVis == 4 && (
                <motion.div className='flex flex-col gap-4' key={crewVis}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <div className='flex flex-col lg:text-left md:gap-2 lg:gap-0'>
                    <p className='text-white/50 font-[Bellefair] text-[1.1rem] md:text-2xl lg:text-3xl'>FLIGHT ENGINEER</p>
                    <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem]'>ANOUSHEH ANSARI</h2>
                  </div>
                  <p className='font-[Barlow] text-[0.87rem] md:text-[1rem] lg:text-[1.125rem] lg:text-left leading-6 md:leading-7 lg:leading-8 text-[#D0D6F9] md:px-24 lg:px-0'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className='flex flex-row w-full items-center justify-center lg:justify-start gap-4 lg:gap-10 mt-14'>
              {[1,2,3,4].map(e => (
                <button className={`${crewVis == e ? "opacity-100" : "opacity-25"} w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 bg-white rounded-full cursor-pointer hover:opacity-60 transition`} aria-label={'Animation dot' + e} onClick={() => setCrewVis(e)} key={e}></button>
              ))}
            </div>
          </div>
          <div className='w-full mask-b-from-80% h-[315px] md:h-[524px]  overflow-hidden flex flex-row items-center justify-center mt-4'>
            <AnimatePresence mode='wait' initial={false}>
            {crewVis == 1 && (
              <motion.div className='relative w-58 md:w-96 h-full'
                key={crewVis} 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
              >
                <img src={dh} alt="Douglas Hurley" className='inset-0 absolute h-full object-cover'
                />
              </motion.div>
            )}
            {crewVis == 2 && (
              <motion.div className='relative w-54 md:w-88 h-full'
                key={crewVis} 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
              >
                <img src={ms} alt="Mark Shutterworth" className='inset-0 absolute h-full object-cover'
                />
              </motion.div>
            )}
            {crewVis == 3 && (
              <motion.div className='relative w-66 md:w-112 h-full'
                key={crewVis} 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
              >
                <img src={vg} alt="Victor Glover" className='inset-0 absolute h-full object-cover'
                />
              </motion.div>
            )}
            {crewVis == 4 && (
              <motion.div className='relative w-74 md:w-124 h-full'
                key={crewVis} 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
              >
                <img src={aa} alt="Anousheh Ansari" className='inset-0 absolute h-full object-cover'
                />
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

const variants = {
  initial: (direction: number) => ({
    x: direction === 1 ? '100%' : direction === -1 ? '-100%' : 0,
    y: direction === 0 ? '20%' : 0,
    opacity: 0
  }),
  animate: {
    x: 0,
    y: 0,
    opacity: 100
  },
  exit: (direction: number) => ({
    x: direction === 1 ? '-100%' : direction === -1 ? '100%' : 0,
    y: direction === 0 ? '-20%' : 0,
    opacity: 0
  })
}

const Technology = ({ technologyVis, direction, leftTechClick, rightTechClick, isMobile }) => {
  return (
    <section className="bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')] flex flex-col w-full h-full bg-cover bg-top-left pb-6 lg:pb-0 lg:border-none md:pb-10" id='TECHNOLOGY'>
      <div className='flex flex-col w-full items-center md:items-start justify-center py-4 mt-[96px] md:mt-[128px] gap-18 pt-2 lg:fixed lg:bottom-14 lg:pl-30 xl:pl-48 lg:gap-16'>
        <div className='font-["Barlow_Condensed"] text-[0.9rem] md:text-2xl lg:text-3xl flex flex-row gap-4 lg:gap-6 tracking-[0.2rem] text-white md:px-8 lg:px-4'>
          <p className='font-bold opacity-25'>03</p>
          <p>SPACE LAUNCH 101</p>
        </div>
        <div className='flex flex-col text-center items-center gap-8 w-full lg:grid lg:grid-cols-[5%_45%_auto]'>
          <div className='h-[258px] md:h-[364px] lg:h-[512px] w-full relative overflow-hidden lg:col-start-3'>
            <AnimatePresence custom={direction} initial={false}>
            {technologyVis == 1 && (
              <motion.img src={launchPort} alt="Launch vehicle portrait"
                key={technologyVis} 
                custom={direction}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration: 0.6, ease: 'easeInOut'}}
                className='absolute max-lg:inset-0 w-full h-full object-cover lg:object-contain lg:-right-16'
              />
            )}
            {technologyVis == 2 && (
              <motion.img src={spacePort} alt="Spaceport portrait"
                key={technologyVis} 
                custom={direction}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration: 0.6, ease: 'easeInOut'}}
                className='absolute max-lg:inset-0 w-full h-full object-cover lg:object-contain lg:-right-16'
              />
            )}
            {technologyVis == 3 && (
              <motion.img src={capsulePort} alt="Space capsule portrait"
                key={technologyVis} 
                custom={direction}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{duration: 0.6, ease: 'easeInOut'}}
                className='absolute max-lg:inset-0 w-full h-full object-cover lg:object-contain lg:-right-16'
              />
            )}
            </AnimatePresence>
          </div>
          <div className='flex flex-row lg:flex-col gap-4 md:gap-6 lg:gap-8 lg:col-start-1 lg:col-end-2 lg:row-start-1'>
            {[1, 2, 3].map(e => (
              <button className={`${technologyVis == e ? "bg-white text-black" : "bg-none text-white"} w-10 h-10 md:w-13 md:h-13 lg:w-16 lg:h-16 md:text-xl lg:text-2xl border border-white/25 rounded-full flex items-center justify-center font-[Bellefair] transition hover:border-white/75 cursor-pointer`} onClick={technologyVis > e ? () => leftTechClick(e) : () => rightTechClick(e)} key={e}>{e}</button>
            ))}
          </div>
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-2 px-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:pl-16 lg:pr-0'>
            <p className='text-white/50 font-[Bellefair] text-[1.1rem] md:text-2xl lg:text-3xl'>THE TERMINOLOGY...</p>
            <AnimatePresence initial={false} mode='wait'>
              {technologyVis == 1 && (
                <motion.div className='flex flex-col gap-2 md:gap-4 lg:gap-2' key={technologyVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem]'>LAUNCH VEHICLE</h2>
                  <p className='font-[Barlow] text-[0.9rem] leading-[1.6rem] md:leading-7 lg:leading-[2rem] text-[#D0D6F9] mt-1 md:text-[1.1rem] md:px-18 lg:px-0 lg:text-[1.23rem]'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </motion.div>
              )}
              {technologyVis == 2 && (
                <motion.div className='flex flex-col gap-2 md:gap-4 lg:gap-2' key={technologyVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem]'>SPACEPORT</h2>
                  <p className='font-[Barlow] text-[0.9rem] leading-[1.6rem] md:leading-7 lg:leading-[2rem] text-[#D0D6F9] mt-1 md:text-[1.1rem] md:px-18 lg:px-0 lg:text-[1.23rem]'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </motion.div>
              )}
              {technologyVis == 3 && (
                <motion.div className='flex flex-col gap-2 md:gap-4 lg:gap-2' key={technologyVis}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.4, ease: 'easeInOut'}}
                >
                  <h2 className='text-white font-[Bellefair] text-[1.45rem] md:text-4xl lg:text-[3.2rem]'>SPACE CAPSULE</h2>
                  <p className='font-[Barlow] text-[0.9rem] leading-[1.6rem] md:leading-7 lg:leading-[2rem] text-[#D0D6F9] mt-1 md:text-[1.1rem] md:px-18 lg:px-0  lg:text-[1.23rem]'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
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
  const [crewVis, setCrewVis] = useState(1)
  const [destVis, setDestVis] = useState(1)
  const [direction, setDirection] = useState(1)
  const [navVis, setNavVis] = useState(false)
  const indexRef = useRef(0)
  const isAnimating = useRef(false)

  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023  });


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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCrewVis(p => (p === 4 ? 1 : p + 1))
    }, 3000)

    return () => clearTimeout(timer)
  }, [crewVis])

  const leftTechClick = (i: number) => {
    setDirection(-1)
    setTechnologyVis(i)
  }

  const rightTechClick = (i: number) => {
    setDirection(1)
    setTechnologyVis(i)
  }

  if (isMobile) return (
    <main className="flex flex-col w-full">
      {isTablet && (
        <TabletHeader /> 
      )}
      {!(isTablet) && (
        <>
          <MobileHeader setNavVis={setNavVis}/>
          <AnimatePresence>
            {navVis && (
              <motion.div className='fixed top-0 right-0 left-33 bottom-0 text-white bg-white/1 backdrop-blur-lg z-100 flex flex-col items-end py-8 px-6 gap-12' key={navVis}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{duration: 0.4, ease: 'easeInOut'}}
              >
                <button onClick={() => setNavVis(false)} aria-label='close navigation menu'>
                  <Close />
                </button>
                <div className='flex flex-col w-full items-start gap-8 -mr-6'>
                  {navs.map((e, i) => (
                    <a href={e} className='flex flex-row gap-2 cursor-pointer w-full transition' key={e}>
                      <p>{'0' + i}</p>
                      <p className='font-light'>{e.split('#')[1]}</p>
                    </a>
                  ))}
                </div>
              </motion.div> 
            )}
          </AnimatePresence>
        </>
      )}
      {sections.map(({ Component }, i) => (
        <Component isAnimating={isAnimating} index={index} setIndex={setIndex} technologyVis={technologyVis} direction={direction} rightTechClick={rightTechClick} leftTechClick={leftTechClick} crewVis={crewVis} setCrewVis={setCrewVis} destVis={destVis} setDestVis={setDestVis} isMobile={isMobile} key={i}/>
      ))}
    </main>
  )


  return (
    <main className="fixed inset-0 overflow-hidden">
      <DesktopHeader index={index} setIndex={setIndex} isAnimating={isAnimating} /> 
      <motion.div
        className="flex flex-row h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      >
        {sections.map(({ Component }, i) => (
          <section key={i} className="h-screen w-full flex-shrink-0 flex">
            <Component isAnimating={isAnimating} index={index} setIndex={setIndex} technologyVis={technologyVis} direction={direction} rightTechClick={rightTechClick} leftTechClick={leftTechClick} crewVis={crewVis} setCrewVis={setCrewVis} destVis={destVis} setDestVis={setDestVis} isMobile={isMobile}/>
          </section>
        ))}
      </motion.div>
    </main>
  )
}

export default App
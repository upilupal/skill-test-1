import backgroundImage from '../assets/bg.png'

const Hero = () => {
  return (
    <section className='relative h-screen w-screen'>
      <img
        src={backgroundImage}
        alt='background image'
        className='w-full h-full object-cover absolute md:hidden'
        style={{ objectPosition: '-745px bottom' }}
      />
      <img
        src={backgroundImage}
        alt='background image'
        className='w-full h-full object-cover absolute hidden md:block'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-white opacity-30 md:hidden'></div>
    </section>
  )
}

export default Hero

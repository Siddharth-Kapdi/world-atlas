import { FaArrowRight } from 'react-icons/fa'
import worldMap from '../assets/worldMap.jpg'
import About from './About'

const Home = () => {
  return (
    <main className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center gap-10 text-base/7">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-5xl font-semibold">Explore the world, One Country at a time.</h1>
          </div>
          <div>
            <p className="text-lg text-gray-400">
              Discover the history, culture, and beauty of every nation. Sort, Search, and Filter
              through country to find the details you need.
            </p>
          </div>
          <div className="w-45 px-4 py-2 rounded-xl flex items-center gap-4 border border-white">
            <button className="font-bold">Start Explore</button> <FaArrowRight />
          </div>
        </div>
        <div>
          <img src={worldMap} alt="World Map" className="rounded-lg" />
        </div>
      </div>
      <About />
    </main>
  )
}

export default Home

import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {
  const { flags, name, capital, region, population } = country
  return (
    <li className="border border-white rounded-md p-5 flex flex-col justify-between">
      <div className="flex justify-center">
        <img
          src={name.common === 'Afghanistan' ? 'https://flagcdn.com/256x192/af.png' : flags.png}
          alt={name.common}
          className="w-full h-32"
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-3 mt-3">
          {name.common.length >= 10 ? name.common.slice(0, 10) + '...' : name.common}
        </h3>
        <p>
          <span className="text-gray-400 font-semibold">Population : </span>
          {population}
        </p>
        <p>
          <span className="text-gray-400 font-semibold">Region : </span>
          {region}
        </p>
        <p>
          <span className="text-gray-400 font-semibold">Capital : </span>
          {capital[0] === undefined ? 'undefined' : capital[0]}
        </p>
      </div>
      <div>
        <NavLink to={`/country/${name.common}`}>
          <button className="border border-white px-2 py-1 mt-5 rounded-md flex gap-3 items-center justify-center">
            <span>Read more</span> <FaArrowRight />
          </button>
        </NavLink>
      </div>
    </li>
  )
}

export default CountryCard

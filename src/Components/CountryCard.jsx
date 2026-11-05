const CountryCard = ({ country }) => {
  const { flags, name, capital, region, population } = country
  return (
    <li className="border border-white rounded-md p-5 flex flex-col justify-between">
      <div className="flex justify-center">
        <img
          src={name.common === 'Afghanistan' ? 'https://flagcdn.com/256x192/af.png' : flags.png}
          alt={name.common}
          className="w-full"
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
    </li>
  )
}

export default CountryCard

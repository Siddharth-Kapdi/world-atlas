import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

const CountryDetails = () => {
  const params = useParams()
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(params)

  useEffect(() => {
    const fetchIndividualCountry = async () => {
      try {
        const res = await fetch(
          `https://pw-d20261017a29.plainwork-apps.workers.dev/v3.1/name/${params.id}?fields=name,population,region,capital,flags`
        )
        const data = await res.json()
        console.log(data[0])
        setCountry(data[0])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchIndividualCountry()
  }, [])

  if (loading) return <Loader />

  return (
    <section className="bg-black text-white ">
      <div className="max-w-6xl mx-auto h-140 px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
        <div className="w-full flex gap-50">
          <div>
            <img
              src={
                params.id === 'Afghanistan'
                  ? 'https://flagcdn.com/256x192/af.png'
                  : country.flags.png
              }
              alt={country.name.common}
              className="shadow-[0_0_65px_10px_rgba(255,255,255,0.35)] w-full"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">{country.name.common}</h2>
            <p className="text-lg">
              <span className="font-semibold">Native Names : </span>
              {Object.values(country.name.nativeName)
                .map((item) => item.common)
                .join(', ')}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Population : </span>
              {country.population}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Region : </span>
              {country.region}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Capital : </span>
              {country.capital[0] === undefined ? 'undefined' : country.capital[0]}
            </p>
            <button className="border border-white px-2 py-1 mt-5 rounded-md flex gap-3 items-center justify-center">
              <NavLink to="/country">
                <span>Go Back</span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails

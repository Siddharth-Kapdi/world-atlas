import { useEffect, useState } from 'react'
import { getCountryData } from '../api/mainApi'
import Loader from '../Components/Loader'
import CountryCard from '../Components/CountryCard'

const Country = () => {
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(true)
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData()
        setCountry(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  let filteredCountry = country.filter((curElem) => {
    if (countryName !== '') {
      return curElem.name.common.toLowerCase().includes(countryName.toLowerCase())
    }
    return []
  })

  const sortAsc = () => {
    const sorted = [...filteredCountry].sort((a, b) => a.name.common.localeCompare(b.name.common))
    return setCountry(sorted)
  }
  const sortDesc = () => {
    const sorted = [...filteredCountry].sort((a, b) => b.name.common.localeCompare(a.name.common))
    return setCountry(sorted)
  }

  const handleRegionChange = (e) => {
    setRegion(e.target.value)
    if (e.target.value === '') {
      setCountry(country)
    } else {
      const filtered = country.filter((curElem) => curElem.region === e.target.value)
      setCountry(filtered)
    }
  }

  if (loading) return <Loader />

  return (
    <>
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pt-10 flex justify-between items-center">
          <div>
            <input
              type="text"
              name="countryName"
              id="countryName"
              placeholder="Search country here..."
              className="border border-white px-3 py-1 w-52 rounded-md"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
            />
          </div>
          <div className="flex gap-5">
            <button
              className="border border-white px-3 py-1 rounded-md cursor-pointer"
              onClick={() => sortAsc()}
            >
              Asc
            </button>
            <button
              className="border border-white px-3 py-1 rounded-md cursor-pointer"
              onClick={() => sortDesc()}
            >
              Desc
            </button>
          </div>
          <div>
            <select
              id="region"
              name="region"
              className="w-full rounded-lg border bg-black px-4 py-2.5 text-white cursor-pointer"
              value={region}
              onChange={handleRegionChange}
            >
              <option value="">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Antarctic">Antarctic</option>
            </select>
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {filteredCountry.length === 0 ? (
            <section className="bg-black text-white">
              <div className="max-w-6xl mx-auto h-105 px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
                <p>No users found matching "{countryName}"</p>
              </div>
            </section>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
              {filteredCountry.map((curCountry, index) => {
                return <CountryCard key={index} country={curCountry} />
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

export default Country

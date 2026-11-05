import { useEffect, useState } from 'react'
import { getCountryData } from '../api/mainApi'
import Loader from '../Components/Loader'
import CountryCard from '../Components/CountryCard'

const Country = () => {
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData()
        setCountry(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <Loader />

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          {country.data.map((curCountry, index) => {
            return <CountryCard key={index} country={curCountry} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Country

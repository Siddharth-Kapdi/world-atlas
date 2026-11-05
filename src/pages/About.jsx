import countryData from '../api/countryData.json'

const About = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10 justify-center items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Here are the few interesting facts about countries.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {countryData.map((country) => {
            const { countryName, capital, population, fact } = country
            return (
              <div className="border-2 border-white p-3 flex flex-col justify-between gap-2 rounded-2xl">
                <h3 className="text-2xl font-semibold">{countryName}</h3>
                <p>
                  <span className="text-gray-400">Capital</span> : {capital}
                </p>
                <p>
                  <span className="text-gray-400">Population</span> : {population}
                </p>
                <p>
                  <span className="text-gray-400">Fact</span> : {fact}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About

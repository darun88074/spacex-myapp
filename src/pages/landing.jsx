import React from 'react';
import { useState, useEffect } from "react"
import { LoadingState } from '../components';

function LandingPage(props) {
  const [company, setCompany] = useState(null)

  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/company")
      const data = await res.json()
      setCompany(data)
    }

    fetchCompany()
  }, [])

  return (
    <>
      {!company ? (
        <LoadingState />
      ) : (
        <>
          <section className="section1">
            <div className="overlay container mx-auto mx-auto">
              <div className="text-white">
                <h2 className="font-bold border-b-2 border-white text-4xl mb-3 pb-2 uppercase tracking-wider w-32">
                  UPCOMING
                </h2>
                <div className="text-sm opacity-75">
                  STARSHIP FLIGHT TEST
                </div>
              </div>
            </div>
          </section>
          <section className='showcase'>
            <div className="overlay w-full">
              <div className="text-white">
                <h1 className="heading text-center capitalize">
                  All The SpaceX Data in one place
                </h1>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5">
                  <div>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                      About
                    </h2>
                    <ul className="text-sm opacity-75">
                      <li className="mb-1">{company.name} was founded by</li>
                      <li className="mb-1">{company.founder} in the year</li>
                      <li className="mb-1">{company.founded}.</li>
                      <li className="mb-1">
                        It has {company.employees} employess,
                      </li>
                      <li className="mb-1">{company.vehicles} vehicles,</li>
                      <li className="mb-1">
                        {company.launch_sites} launch sites,
                      </li>
                      <li className="mb-1">
                        and {company.test_sites} test sites and
                      </li>
                      <li className="mb-1">
                        is valued at {company.valuation.toLocaleString()} B
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                      Headquarters
                    </h2>
                    <ul className="text-sm opacity-75">
                      <li className="mb-1">{company.headquarters.address}</li>
                      <li className="mb-1">{company.headquarters.city}</li>
                      <li className="mb-1">{company.headquarters.state}</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                      Useful Links
                    </h2>
                    <ul className="text-sm opacity-75">
                      <li className="mb-1">
                        <a href={company.links.website}>Website</a>
                      </li>
                      <li className="mb-1">
                        <a href={company.links.flickr}>Flickr</a>
                      </li>
                      <li className="mb-1">
                        <a href={company.links.twitter}>Twitter</a>
                      </li>
                      <li className="mb-1">
                        <a href={company.links.elon_twitter}>Elon Twitter</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="max-w-3xl mx-auto text-center mt-10">
                  {company.summary}
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default LandingPage;
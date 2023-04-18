import React from 'react';
import useFetch from '../api';
import {LoadingState} from '../components';
import { Link } from "react-router-dom";

function LaunchesPage(props) {
    const [data] = useFetch("https://api.spacexdata.com/v4/launches")

    return (
        <div className='container mx-auto py-24'>
            {!data ? (
                <LoadingState />
            ) : (
                <section className=" max-width">
                       <h1 className="heading text-center mb-10 text-3xl">Launches</h1>
                    <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
                        {data.map(({ id, name, links, details }) => (
                            <Link to={`/launchesPage/${id}`} key={id} className="p-5 bg-zinc-900">
                                {links.patch.large ? (
                                    <img src={links.patch.large} alt={name} className='h-28	w-auto m-auto	'/>
                                ) : (
                                    <img
                                        src="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
                                        alt=""
                                    />
                                )}
                                <h2 className="font-bold text-white mt-5 mb-3 text-xl">
                                    {name}
                                </h2>
                                {details && (
                                    <p className="text-white opacity-75">{`${details.substring(
                                        0,
                                        50
                                    )}...`}</p>
                                )}
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default LaunchesPage;


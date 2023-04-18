import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

function HeaderComponent(props) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <>
            <header className={scroll ? "bg-black flex items-center justify-between px-8 w-full" :
                "  absolute flex items-center justify-between px-8 w-full"}>
                <div>
                    <Link to="/">
                        <div className='flex items-center'>
                            <span className='space-text'>Space</span><SiSpacex className="text-7xl text-white " />
                        </div>
                    </Link>
                </div>

                <nav>
                    <ul className={'flex gap-5'}>
                        <li>
                            <Link to="/launchesPage" className="text-white text-sm">
                                Launches
                            </Link>
                        </li>
                        <li>
                            <Link to="/rocketsPage" className="text-white text-sm">
                                Rockets
                            </Link>
                        </li>
                        <li>
                            <Link to="/historyPage" className="text-white text-sm">
                                History
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    );
}

export default HeaderComponent;

import React from 'react';
import { Link } from 'react-router-dom';

function FooterComponent(props) {
    return (
        <div className="py-8 footer-section">
            <nav>
                <ul className={'flex gap-5  items-center justify-center res-footer'}>
                    <li>
                        <Link to="/" className="text-white text-sm">
                            SPACEX © 2022
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white text-sm">
                            TWITTER
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white text-sm">
                            YOUTUBE
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white text-sm">
                            INSTAGRAM
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white text-sm">
                            YOUTUBE
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white text-sm">
                            LINKEDIN
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default FooterComponent;
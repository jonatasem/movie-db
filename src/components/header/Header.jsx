import './Header.scss';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container-header">
            <h1>MOVIEDB</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/" className="index">Flexbox Simulator</Link>

            <nav>
                {location.pathname !== '/flexbox-simulator' && (
                    <Link to="/">Simulator</Link>
                )}
                {location.pathname !== '/flexbox-simulator/examples' && (
                    <Link to="/examples">Basic Examples</Link>
                )}
            </nav>
        </header>
    );
}
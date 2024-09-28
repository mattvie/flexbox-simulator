import './Header.css'

export default function Header() {
    const currentPath = window.location.pathname;

    return (
        <header className="header">
            <a href="/#/flexbox-simulator" className="index">Flexbox Simulator</a>

            <nav>
                {currentPath !== '/flexbox-simulator' && (
                    <a href="/#/flexbox-simulator">Simulator</a>
                )}
                {currentPath !== '/flexbox-simulator/examples' && (
                    <a href="/#/flexbox-simulator/examples">Basic Examples</a>
                )}
            </nav>
        </header>
    );
}
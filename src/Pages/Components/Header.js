import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <a href="/flexbox-simulator" className="index">Flexbox</a>

            <nav>
                <a href="/flexbox-simulator">Simulator</a>
                <a href="/flexbox-simulator/examples">Examples</a>
            </nav>
        </header>
    );
}
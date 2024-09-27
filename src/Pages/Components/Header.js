import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <a href="/" className="index">Flexbox</a>

            <nav>
                <a href="/">Simulator</a>
                <a href="/examples">Examples</a>
            </nav>
        </header>
    );
}
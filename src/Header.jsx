import h from './Header.module.css';

function Header() {
    return (
        <header className={h.header}>
            <div className={h.logo}>
                <h1>Logotype</h1>
            </div>
        </header>
    );
}

export default Header;

import css from './Header.module.css';
function Header() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <h1>Logo</h1>
            </div>
        </header>
    );
}

export default Header;

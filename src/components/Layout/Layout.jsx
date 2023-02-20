import { NavLink, Outlet } from "react-router-dom";
import styles from 'components/Layout/Layout.module.css'

export const Layout = () => {
    return <div>
        <header>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li><NavLink className={styles.link} to='/contacts'>Contacts</NavLink></li>
                    <li><NavLink className={styles.link} to='/login'>Login</NavLink></li>
                    <li><NavLink className={styles.link} to='/register'>Register</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}
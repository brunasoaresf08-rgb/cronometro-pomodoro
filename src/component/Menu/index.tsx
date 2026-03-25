import styles from './styles.module.css';
import { History, Settings, Sun, Home} from 'lucide-react'

export function Menu() {
    return (
        <nav className= {styles.menu}>
            <a className = {styles.menuLink} href='#'><Home /></a>
            <a className = {styles.menuLink} href='#'><History /></a>
            <a className = {styles.menuLink} href='#'><Settings /></a>
            <a className = {styles.menuLink} href='#'><Sun /></a>
        </nav>
    );
}
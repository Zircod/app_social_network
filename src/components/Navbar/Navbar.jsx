// import './ar.module.css';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) => isActive ? s.active : s.link;

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/profile" className={setActive}>Profile</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" className={setActive}>News</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" className={setActive}>Music</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings" className={setActive} >Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
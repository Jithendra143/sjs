import { MdOutlineDashboard, MdOutlineTimeline } from "react-icons/md";
import { BsFuelPump, BsFuelPumpDiesel } from "react-icons/bs";
import classes from "./Sidebar.module.css";
import { FaUsersCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      <div className={classes.logo}>
        <NavLink to="/">
          <h3>SJS Petrolium</h3>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              <span>
                <MdOutlineDashboard />
              </span>
              <h3>Dashboard</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="sales" className={({ isActive }) => (isActive ? classes.active : undefined)} style={{ pointerEvents: 'none' }}>
              <span>
                <MdOutlineTimeline />
              </span>
              <h3>Sales</h3>
            </NavLink>
            <ul className={classes.submenu}>
              <li>
                <NavLink to="sales/petrol">
                  <span>
                    <BsFuelPump />
                  </span>
                  <h3>Petrol</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="sales/disel">
                  <span>
                    <BsFuelPumpDiesel />
                  </span>
                  <h3>Disel</h3>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="user-settings" className={({ isActive }) => (isActive ? classes.active : undefined)}>
              <span>
                <FaUsersCog />
              </span>
              <h3>User Settings</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

/* eslint-disable react/prop-types */
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

import classes from './Topbar.module.css'
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import Button from "../FormElements/Button";

export default function Topbar({onClick}){
  const authCtx = useContext(AuthContext);
    return <div className={classes.topbar}>
    <div className={classes.leftMenu}>
      <span onClick={onClick}>
        <CgMenuLeftAlt />
      </span>
    </div>
    <div className={classes.profile}>
      <span><FaUser /></span>
      <div className={classes.rightmenu}>
          <ul>
              <li>
                  <a href="/">Settings</a>
              </li>
              <li>
                  <a href="/">Profile Settings</a>
              </li>
              <li>
                  <Button onClick={authCtx.logout}>Logout</Button>
              </li>
          </ul>
      </div>
    </div>
  </div>
}
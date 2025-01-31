/* eslint-disable react/prop-types */
import classes from "./Card.module.css";

export default function Card({ children, className, style }) {
  return (
    <div className={`${classes.card} ${className}`} style={style}>
      {children}
    </div>
  );
}

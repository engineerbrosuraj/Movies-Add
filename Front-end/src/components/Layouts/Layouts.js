import { Fragment } from "react";
import classes from './Layouts.module.css';
import Navigation from "./Navigation";

const Layouts = (props) => {
    return (
        <Fragment>
            <Navigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layouts;
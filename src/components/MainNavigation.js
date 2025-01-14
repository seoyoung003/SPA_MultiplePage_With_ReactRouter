import { Link, NavLink } from "react-router-dom"//NavLink는 어떤것이 활성화 됬는지 알려줌, isActive는 reactrouterdom이 제공함함

import classes from "./MainNavigation.module.css"

function MainNavigaion() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to={"/"} className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink></li> 
                    <li><NavLink to={"/products"} className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigaion;
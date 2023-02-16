import React, { useState } from 'react'
import classes from "./HomeStyles.module.css"
import man from "../../Images/Man.png"
import MenuBurger from "../../Images/MenuBurger.png"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'


export const Home = () => {

    const [count, setCount] = useState(0);
    const { t, i18n } = useTranslation()

    return (
        <div className={classes.content}>
            {
                count % 2 === 1 &&
                <div className={classes.menu}>
                    <BurgerMenu />
                </div>
            }
            {/* <div className={classes.navbar}>
                <a href='#home'>Home</a>
                <a href='#aboutME'>About me</a>
                <a href='#skills'>Skills</a>
                <a href='#porfolio'>Portfolio</a>
                <a href='#contacts'>Contacts</a>
            </div> */}
            <div className={classes.about}>
                <h1>{t("name")}</h1>
                <img width="55px" className={classes.menuBurger} src={MenuBurger}
                    onClick={() => setCount(count + 1)} />
                <p>
                    <br></br>
                    <br></br>
                    {t("txt")}
                </p>
                <p onClick={() => changeLanguage("en")} onDoubleClick={() => changeLanguage("ru")} className={classes.rotated}><br></br>RU | ENG</p>
            </div>
            <img width="100%" src={man} />
        </div>
    )
} 

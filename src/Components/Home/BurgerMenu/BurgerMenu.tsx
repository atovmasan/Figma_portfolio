import React from "react"
import { useTranslation } from "react-i18next"
import classes from "./BurgerMenuStyles.module.css"
// import exit from "../../../Images/exit"

export const BurgerMenu = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className={classes.menu}>
            {/* <img className={classes.exit} src={exit} /> */}
            <div>
                <h3>{t("link1")}</h3>
                <h3>{t("link2")}</h3>
                <h3>{t("link3")}</h3>
                <h3>{t("link4")}</h3>
                <h3>{t("link5")}</h3>
            </div>
            <p className={classes.menu_rotated}><br></br>RU | ENG</p>
        </div>
    )
}
import React from "react"
import classes from "./PortfolioStyles.module.css"
import portfolio from "../../Images/Portfolio.png"
import Reebok from "../../Images/Reebok.png"
import Braun from "../../Images/Braun.png"
import { useTranslation } from "react-i18next"


export const Portfolio = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className={classes.content}>
            <div>
                <h1>{t("portfolio")}</h1>
                <img className={classes.img} src={portfolio} />
                <a href="https://github.com/atovmasan">Online fashion store - Homepage</a>
            </div>
            <div>
                <h1>{t("portfolio")}</h1>
                <img className={classes.img} src={Reebok} />
                <a href="https://github.com/atovmasan">Online fashion store - Homepage</a>
            </div>
            <div>
                <h1>{t("portfolio")}</h1>
                <img className={classes.img} src={Braun} />
                <a href="https://github.com/atovmasan">Online fashion store - Homepage</a>
            </div>
        </div>
    )
} 
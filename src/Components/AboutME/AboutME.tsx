import React from "react"
import classes from "./AboutME_Styles.module.css"
import { useTranslation } from "react-i18next"


export const AboutME = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className={classes.content}>
            <h2>About me</h2>
            <p>
                {t("txt1")}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {t("txt2")}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {t("txt3")}
            </p>
        </div>
    )
} 
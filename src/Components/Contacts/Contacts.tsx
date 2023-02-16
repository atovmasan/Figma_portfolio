import React from "react"
import classes from "./ContactsStyles.module.css"
import INS from "../../Images/INS.png"
import ins from "../../Images/ins.png"
import BE from "../../Images/BE.png"
import Ball from "../../Images/Ball.png"
import { useTranslation } from "react-i18next"


export const Contacts = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className={classes.content}>
            <h2>{t("contacts")}</h2>
            <h4>
                {t("txt4")}
            </h4>
            <button>Send message</button>
            <div className={classes.icons}>
                <img className={classes.img} src={INS} />
                <img className={classes.img} src={ins} />
                <img className={classes.img} src={BE} />
                <img className={classes.img} src={Ball} />
            </div>
            <p className={classes.p}>
                {t("adds")}
            </p>
        </div>
    )
} 
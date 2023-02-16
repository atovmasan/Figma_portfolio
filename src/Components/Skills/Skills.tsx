import React from "react"
import classes from "./SkillsStyles.module.css"
import PS from "../../Images/PS.png"
import AI from "../../Images/AI.png"
import AF from "../../Images/AF.png"
import F from "../../Images/F.png"
import Rate from "../../Images/Rate.png"
import { useTranslation } from "react-i18next"


export const Skills = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className={classes.content}>
            <h2>{t("skills")}</h2>
            <h4>{t("programms")}</h4>
            <div>
                <img className={classes.img} src={PS} />
                <p>
                    Adobe
                    Photoshop
                </p>
                <img className={classes.img} src={Rate} />
            </div>
            <div>
                <img className={classes.img} src={AI} />
                <p>
                    Adobe
                    Illustrator
                </p>
                <img className={classes.img} src={Rate} />
            </div>
            <div>
                <img className={classes.img} src={AF} />
                <p>
                    Adobe
                    After Effects
                </p>
                <img className={classes.img} src={Rate} />
            </div>
            <div>
                <img className={classes.img} src={F} />
                <p>
                    Figma
                </p>
                <img className={classes.img} src={Rate} />
            </div>
        </div>
    )
} 
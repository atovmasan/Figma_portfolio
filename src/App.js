import classes from "./App.module.css"
import { Home } from './Components/Home/Home.tsx'
import { AboutME } from './Components/AboutME/AboutME.tsx'
import { Skills } from './Components/Skills/Skills.tsx'
import { Portfolio } from './Components/Portfolio/Portfolio.tsx'
import { Contacts } from './Components/Contacts/Contacts.tsx'
import { useTranslation } from "react-i18next"


function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <div className={classes.navbar}>
        <a href='/main#home'>{t("link1")}</a>
        <a href='/main#aboutME'>{t("link2")}</a>
        <a href='/main#skills'>{t("link2")}</a>
        <a href='/main#portfolio'>{t("link3")}</a>
        <a href='/main#contacts'>{t("link4")}</a>
      </div>
      <div id="home" ><Home /></div>
      <div id="aboutME" ><AboutME /></div>
      <div id="skills" ><Skills /></div>
      <div id="portfolio" ><Portfolio /></div>
      <div id="contacts" ><Contacts /></div>
    </div>
  );
}

export default App;

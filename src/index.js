import './index.scss'

import cveng from './assets/CV_Piotr_Górski_eng_noTel.pdf'
import cvpl from './assets/CV_Piotr_Górski_pl_noTel.pdf'
import Portfolio_ARCH from './assets/Portfolio_ARCH.pdf'

import spaceBackground from './javascript/spaceBackground'
import colorTheme from './javascript/colorTheme'
import burgerMenu from './javascript/burgerMenu'
import arrows from './javascript/arrows'
import archImages from './javascript/archImages'
import intersectionObservers from './javascript/intersectionObservers'

const currentYear = new Date().getFullYear()
const currentYearEl = document.querySelector('#current-year')

if (currentYearEl) {
  currentYearEl.textContent = currentYear
}

spaceBackground()
colorTheme()
burgerMenu()
arrows()
archImages()
intersectionObservers()

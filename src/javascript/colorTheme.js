const colorTheme = () => {
  const root = document.querySelector(':root')
  const moonIcon = document.querySelector('.moon-icon')
  const sunIcon = document.querySelector('.sun-icon')
  const logoImg = document.querySelector('.logo-img')
  const moon = document.querySelector('.moon')
  const moonHoles = document.querySelectorAll('.moon-hole')
  const stars = document.querySelectorAll('.star')

  if (moonIcon && sunIcon) {
    const setThemeToLocalStorage = (color) => {
      localStorage.setItem('theme', color)
    }

    const updateIcons = (theme) => {
      const isDarkTheme = theme === 'dark'

      moonIcon.classList.toggle('active', isDarkTheme)
      sunIcon.classList.toggle('active', !isDarkTheme)

      if (logoImg) {
        logoImg.classList.toggle('logo-img-light', !isDarkTheme)
      }
    }

    const toggleMoonSun = (theme) => {
      const isDarkTheme = theme === 'dark'

      if (moon) {
        moon.classList.toggle('sun', !isDarkTheme)
      }

      moonHoles.forEach((hole) => {
        hole.classList.toggle('hide', !isDarkTheme)
      })

      if (moon) {
        if (isDarkTheme) {
          moon.style.setProperty(
            '-webkit-box-shadow',
            '10px 17px 70px 37px $accent;'
          )
          moon.style.setProperty(
            '-moz-box-shadow',
            '10px 17px 70px 37px $accent'
          )
          moon.style.setProperty('box-shadow', '-5px -3px 50px 1px white')
        } else {
          moon.style.setProperty(
            '-webkit-box-shadow',
            '10px 17px 70px 37px rgb(254, 171, 88);'
          )
          moon.style.setProperty(
            '-moz-box-shadow',
            '10px 17px 70px 37px rgb(254, 171, 88)'
          )
          moon.style.setProperty(
            'box-shadow',
            '-5px -3px 500px 100px rgb(254, 171, 88)'
          )
        }
      }
    }

    const starsToRain = (theme) => {
      const shouldRain = theme === 'light'

      stars.forEach((star) => {
        star.classList.toggle('rain', shouldRain)
      })
    }

    const applyTheme = (theme) => {
      const isDarkTheme = theme === 'dark'

      root.style.setProperty('--primary', isDarkTheme ? '#211337' : '#fff')
      root.style.setProperty('--secondary', isDarkTheme ? '#ffd698' : '#44cead')
      root.style.setProperty('--accent', isDarkTheme ? '#44cead' : '#ffcc59')
      root.style.setProperty('--white', isDarkTheme ? '#fff' : '#211337')
      root.style.setProperty('--black', '#211337')
      root.style.setProperty('--gray', isDarkTheme ? '#c5c5c5' : '#3f3f3f')
      root.style.setProperty(
        '--accent-transparent',
        isDarkTheme ? '#44ceae9f' : '#ffcc59'
      )
      root.style.setProperty(
        '--primary-transparent',
        isDarkTheme ? 'rgba(34, 20, 57, 0.849)' : 'rgba(255, 255, 255, 0.849)'
      )

      setThemeToLocalStorage(theme)
      updateIcons(theme)
      toggleMoonSun(theme)
      starsToRain(theme)
    }

    const setDarkTheme = () => {
      if (localStorage.getItem('theme') === 'dark') return
      applyTheme('dark')
    }

    const setLightTheme = () => {
      if (localStorage.getItem('theme') === 'light') return
      applyTheme('light')
    }

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      applyTheme('light')
    } else {
      applyTheme('dark')
    }

    moonIcon.addEventListener('click', setDarkTheme)
    sunIcon.addEventListener('click', setLightTheme)
  }
}

export default colorTheme

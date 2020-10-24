let variableElement = document.getElementById('cssvariable')
variableElement.setAttribute('href', './assets/styles/variable.css')

function setTheme() {
  let isDark = variableElement.getAttribute('href').match(/dark/)
  let themeIcon = isDark ? '#icon-IcoMoon' : '#icon-sun'
  document.querySelector('#themeSVG > use').setAttribute('xlink:href', themeIcon)
  variableElement.setAttribute('href', `./assets/styles/variable${isDark ? '' : '-dark'}.css`)
}
const elements = Array.from(document.getElementsByTagName('*'))

const isTextNode = node => node.nodeType === Node.TEXT_NODE
const containsPoundSign = node => node.nodeValue.includes('£')
const poundsRegex = /£[\d,]+\.*\d{0,2}/g

const roundTo1Dp = num => +(Math.round(num + "e+1")  + "e-1");

const convertToNumber = match => {
  const numberPerGbp = 1 / 0.11 // 11p per potato?
  const price = match.slice(1)
  const numberOfPotatoes = roundTo1Dp(price * numberPerGbp)
  const potatoes = `${numberOfPotatoes} medium-sized 🥔s`
  return `${match} (${potatoes})`
}

const convertToKg = match => {
  const kiloesPerGbp = 1 / 80 * 100 // Potatoes = 80p / Kg
  const price = match.slice(1)
  const weightOfPotatoes = Math.round(price * kiloesPerGbp)
  const potatoes = `${weightOfPotatoes}Kg of 🥔s`
  return `${match} (${potatoes})`
}

elements.forEach(element => {
  const childNodes = Array.from(element.childNodes)
  childNodes
    .filter(isTextNode)
    .filter(containsPoundSign)
    .forEach(node => {
      const text = node.nodeValue;

      // Replace each instance of the text with new text
      const replacedText = text.replace(poundsRegex, convertToNumber)
      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node)
      }
  })
})
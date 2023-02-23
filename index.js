import './index.css'
import JS_IMAGE from './assets/javascript.png'
console.log('Hello World!')

const headerHTML = document.createElement('h1')
headerHTML.textContent = 'I love JavaScript'

const jsImageHTML = document.createElement('img')
jsImageHTML.src = JS_IMAGE
jsImageHTML.className = 'js-image'

document.body.append(headerHTML)
document.body.append(jsImageHTML)
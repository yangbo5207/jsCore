import _ from 'lodash'
import './index.css'
import './test.scss'
import Inbox from './inbox.jpg'

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const img = new Image()
  img.src = Inbox
  element.appendChild(img)
  
  return element;
}

document.body.appendChild(component());
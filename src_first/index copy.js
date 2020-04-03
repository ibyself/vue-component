import './test.css'

import bg from './bg.jpg'
console.log('hello webpack333')
document.getElementById('root').innerHTML='<h1>hello4444</h1>'


const fn=()=>{
    console.log('fn()')
}

const image=new Image()
image.src=bg
document.getElementById('root').appendChild(image)

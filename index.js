

//1) selecting single element

//-->By id
console.log(document.getElementById('login-form'))

//--> By query selector

let obj= document.querySelector('.items')//->query selector by classname

// obj.lastElementChild.remove()
obj.firstElementChild.textContent='Hello'
obj.firstElementChild.style.color='green'
obj.children[1].style.color='yellow'
obj.lastElementChild.innerHTML='<h2>Hello World</h2>'

let button= document.querySelector('.btn')
button.style.background='black'
button.style.color='white'


addEventListener

button.addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelector('#login-form').style.background='yellow'
})

button.addEventListener('mouseover',(e)=>{
    e.preventDefault()

    button.style.background='yellow'
    document.querySelector('#login-form').style.background='blue'

})

button.addEventListener('mouseout',(e)=>{
    e.preventDefault()

    document.querySelector('#login-form').style.background='orange'

})



//2) selecting multiple element

//--> By query selector all
const item=document.querySelectorAll('.item')
item.forEach((item)=>console.log(item))


//--> By classname & tagname

console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))
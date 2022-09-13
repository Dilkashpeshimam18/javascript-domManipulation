let button= document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
button.addEventListener('mouseover',(e)=>{
    e.preventDefault()

    button.style.background='blue'
    document.querySelector('#login-form').style.background='blue'


})


button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || email.value===''){
        alert('Please enter the value')
    }else{
        console.log(username.value)
        console.log(email.value)
    }
    
})

button.addEventListener('mouseout',(e)=>{
    e.preventDefault()

    document.querySelector('#login-form').style.background='orange'

})


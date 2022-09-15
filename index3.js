let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || email.value===''){
        alert('Please enter the value')
    }else{
        document.querySelector('.user-name').innerHTML=username.value
        document.querySelector('.user-email').innerHTML=email.value
        localStorage.setItem('username', username.value)
        localStorage.setItem('email', email.value)

    }
    
})


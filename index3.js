let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
let user

button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || email.value===''){
        alert('Please enter the value')
    }else{
        user={
            name:username.value,
            email:email.value
        }
        document.querySelector('.user-name').innerHTML=username.value
        document.querySelector('.user-email').innerHTML=email.value
        localStorage.setItem('user', JSON.stringify(user))
        // localStorage.setItem('email', userEmail)

    }
    console.log(JSON.parse(localStorage.getItem('user',user)))
})


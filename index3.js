let button=document.querySelector('.btn')
let username=document.querySelector('#user')
let email=document.querySelector('#email')
let users=[]
let userObj={}
button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value==='' || email.value===''){
        alert('Please enter the value')
    }else{
        userObj={
            name:username.value,
            email:email.value
        }
        localStorage.setItem(`user${userObj.name}`, JSON.stringify(userObj))
        displayUser(userObj)      

    }
})

document.addEventListener('DOMContentLoaded',()=>{

    Object.keys(localStorage).forEach(function(key){
        console.log(JSON.parse(localStorage.getItem(key)))
       let userDetail=JSON.parse(localStorage.getItem(key))
       users.push(userDetail)
      
      
        
        
     });
 
     users.forEach((user)=>{
        let usersList=document.querySelector('.user-detail')

     let userLi=document.createElement('li')
     userLi.appendChild(document.createTextNode(`${user.name} ${user.email}`))
     usersList.appendChild(userLi)
})

 })
function displayUser(useObj){
  
  
   
     
         let userList=document.querySelector('.user-detail')
         let userTag=`<li> ${userObj.name} ${userObj.email} </li>`
         userList.innerHTML= userList.innerHTML + userTag
     
 
}




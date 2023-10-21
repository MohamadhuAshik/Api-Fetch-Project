//FETCH DATA

fetch(" https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(res => update(res))

let card = document.getElementById("card")
console.log(card);
function update(res) {
    let cardlist = Object.entries(res)
    console.log(cardlist);
    for (i = 0; i < cardlist.length; i++) {
        let cb = `<div style="width:18rem" class="card m-3"><div class="card-header text-center text-bg-primary"><span style="font-weight: bold">NO:</span>${cardlist[i][0]}<br><span style="font-weight: bold">ID:</span>${cardlist[i][1].id}<br><h3><i class="fa-solid fa-user"></i>&nbsp;NAME</h3>${cardlist[i][1].name}</div><div class="card-body text-center text-bg-info"><h3>BODY</h3>${cardlist[i][1].body}</div><div class="card-footer text-center text-bg-primary"<span style="font-weight: bold">EMAIL:</span>${cardlist[i][1].email}</div></div></div>`
        card.innerHTML += cb
    }
}

//SignUp Page
//input Boxes
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let mobile = document.getElementById("mobile")
let email = document.getElementById("email")
let newPass = document.getElementById("newPass")
let conPass = document.getElementById("conPass")

//Error divs

let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")
let error4 = document.getElementById("error4")
let error5 = document.getElementById("error5")
let error6 = document.getElementById("error6")

//form-validation

function validate(){
    if (fname.value == "") {
        error1.textContent = "FirstName Is Required"
        return false;
      }
    
    
      if (lname.value == "") {
        error1.textContent = ""
        error2.textContent = "Last Name is Required"
        return false;
      }
    
      if (mobile.value == "") {
        error2.textContent = "";
        error3.textContent = "Enter Your Mobile Number"
        return false;
      }else if(mobile.value.length <= 9) {
            error3.textContent = "Plese Enter Valid Mobile Number"
            return false;
      }
    
      if (email.value == "") {
        error3.textContent = ""
        error4.textContent = "Enter Your Email.id"
        return false;
      }
    
      if (newPass.value == "") {
        error4.textContent = ""
        error5.textContent = "Enter Your New Passworld"
        return false;
      }else if(newPass.value.length<=7){
        error5.textContent = "Password Must Contain 8 Characters"
        return false
      }
      if (conPass.value == "") {
        error5.textContent = ""
        error6.textContent = "Plese Enter Your Password"
        return false;
      }else if(conPass.value !== newPass.value){
        error6.textContent = "Password Not Match "
         return false
      }else{
        alert("Register Successfully you Redirect To Login Page")
      }
    
}
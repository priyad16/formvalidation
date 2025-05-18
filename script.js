let nam=document.getElementById('nam');
let pw=document.getElementById('pw');
let btn=document.getElementById('btn');
let emsg=document.getElementById('err-msg');
let nemsg=document.getElementById('nerr-msg');
let pemsg=document.getElementById('perr-msg');
let inp=document.getElementsByClassName('focus');


btn.addEventListener('click',(event)=>{
    event.preventDefault();
    let n= nam.value.trim();
    let p=pw.value.trim();

    if(n==="" && p==="" ){
        emsg.innerText="All fields are required";
        emsg.classList.add('err');
        emsg.classList.remove('succ');
        nemsg.innerText="";
        pemsg.innerText="";
    }
    else if(n===""){
        nemsg.innerText="Username is required";
        pemsg.innerText="";
        emsg.innerText="";
    }    
    else if(p===""){
        pemsg.innerText="Password is required";
        emsg.innerText="";
        nemsg.innerText="";
    } 
    else if(n!="catstudio" || p!="upskill"){
        emsg.innerText="Invalid credentials";
        emsg.classList.add('err');
        emsg.classList.remove('succ');
        nemsg.innerText="";
        pemsg.innerText="";


    }   

    else{
        emsg.innerText="Login Sucess";
        emsg.classList.add('succ');
        emsg.classList.remove('err');
        nemsg.innerText="";
        pemsg.innerText="";
    }    

});
     


let eye=document.getElementById('eye');
let isvis=false;
eye.addEventListener('click',()=>{

    if(isvis===false)
    {
        pw.type="text";
        eye.classList.remove('fa-eye'); 
        eye.classList.add('fa-eye-slash');
        isvis=true;
    }
    else{
        pw.type="password";
        eye.classList.remove('fa-eye-slash'); 
        eye.classList.add('fa-eye');
        isvis=false;
    }
});

for(let i=0;i<inp.length;i++){
inp[i].addEventListener('focus',function(){
    this.classList.add('inp');
});

inp[i].addEventListener('blur',function(){
    this.classList.remove('inp');
});
}

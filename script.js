let nam=document.getElementById('nam');
let pw=document.getElementById('pw');
let btn=document.getElementById('btn');
let emsg=document.getElementById('err-msg');
let nemsg=document.getElementById('nerr-msg');
let pemsg=document.getElementById('perr-msg');
let inp=document.getElementsByClassName('focus');
let t=document.getElementById('innert');
let container=document.getElementById('container');
let inner=document.getElementById('inner');
let label=document.getElementsByTagName('label');
let para=document.getElementById('para');
let moon=document.getElementById('moon');
let sun=document.getElementById('sun');


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

let isdark=true;
t.addEventListener('click',()=>{
    if(isdark==true){
        container.style.backgroundColor="#eaeaea";
        inner.style.backgroundColor="white";
        inner.style.boxShadow="2px 2px 0px gray";
        for(let i=0;i<inp.length;i++){
            inp[i].style.backgroundColor="#eaeaea";
            inp[i].style.color="black";
            inp[i].classList.add('pcolor');
        }
        for(let i=0;i<label.length;i++){
            label[i].style.color="black";
        }
        eye.style.color="black";
        para.style.color="black";
        t.classList.add('movel');
        t.style.backgroundColor="blue";
        t.classList.remove('mover');
        moon.style.color="grey";
        sun.style.color="blue";
        isdark=false;
    }
    else{
        container.style.backgroundColor="#2d3649";
        inner.style.backgroundColor="#12151E";
        for(let i=0;i<inp.length;i++){
            inp[i].style.backgroundColor="#2d3649";
            inp[i].style.color="white";
            inp[i].classList.remove('pcolor');

        }
        for(let i=0;i<label.length;i++){
            label[i].style.color="white";
        }
        eye.style.color="white";
        para.style.color="white";
        t.classList.add('mover');
        t.style.backgroundColor="#12151E";
        t.classList.remove('movel');
        moon.style.color="#12151E";
        sun.style.color="grey";
        isdark=true;
    }
});

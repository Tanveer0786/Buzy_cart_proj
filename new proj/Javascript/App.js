const nav=document.getElementById('navbar');
const input_var=document.getElementById('Form_input');
const take_input=document.querySelectorAll('input');
const submit=document.getElementById('submit');

const registration_data=[];
const input_func=()=>{
    const email=take_input[1].value;
    const number=take_input[2].value;
    const full_name=take_input[0].value;

    const new_data={
        new_email:email,
        new_number:number,
        new_name:full_name
        }
        registration_data.push(new_data);
        console.log(registration_data);
        
       

}


var typed = new Typed(".typing", {
    strings: [ "Grow together", "Explore","For buisness","Grow together"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

submit.addEventListener('click',input_func);

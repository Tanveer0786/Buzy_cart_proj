
const nav=document.getElementById('navbar');
const input_var=document.getElementById('Form_input');
const take_input=document.querySelectorAll('input');
const submit=document.getElementById('submit');
const data_modal=document.getElementById('add-modal');
const table=document.getElementById('Table');
const registration_data=[];

const render_modal=()=>{
    data_modal.classList.toggle('visible');
    

}
const RenderNewdata=(email,name,number)=>{
    const NewDataElement = document.createElement('li');
   
    NewDataElement.innerHTML=`
    <table >
    <tr style="padding:40px;">
      <th>Email</th>
      <th>Name</th>
      <th>Number</th>
    </tr>
    <tr style="padding:40px;">
      <td >${email}</td>
      <td>${name}</td>
      <td>${number}</td>
    </tr>
  
  </table>
    `;
    const Root_list=document.getElementById('add-modal');
    Root_list.append(NewDataElement);
    
}
const clear_inputs=()=>{
  for(const userinput of take_input){
    userinput.value='';
  }
}
var k=0;
const input_func=()=>{
    const email=take_input[1].value;
    const number=take_input[2].value;
    const full_name=take_input[0].value;
    
    if(email.trim() === '' ||
    number.trim() === '' ||
    full_name.trim() === ''
    ) {
      alert('please enter a valid information');
    }else if(email.trim() != ''||
    number.trim()!=''||
    full_name()!=''){
      alert(email+'\n'+number+'\n'+full_name);
      clear_inputs();
    };

    const new_data={
        new_email:email,
        new_number:number,
        new_name:full_name
        }
        
        localStorage.setItem(k,JSON.stringify(new_data));
        registration_data.push(new_data);
        console.log(registration_data);
        k++;
      RenderNewdata(
        new_data.new_email,
        new_data.new_name,
        new_data.new_number
      ); 
      RenderNewdata();

}


var typed = new Typed(".typing", {
    strings: [ "Grow together", "Explore","For buisness","Grow together"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

submit.addEventListener('click',input_func);
table.addEventListener('click',render_modal);

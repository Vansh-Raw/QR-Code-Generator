const input = document.querySelector('.input');
const button = document.querySelector('.button');
const qr= document.querySelector('#qr');

const todo = (data)=>{
      qr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    
}
 
button.addEventListener ("click",()=>{
    todo(input.value);
    input.value="";
})


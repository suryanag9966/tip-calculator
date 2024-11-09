document.querySelector('.calc').addEventListener('click',function(){
    const billamt = +(document.getElementById("bill").value);
    const tipper  =+(document.getElementById("TIP").value);


const tipamt = (billamt*tipper) /100;
const totalamt = billamt+tipamt;

document.querySelector(".totalop").innerText =  `Total amt: ${totalamt}`;

});
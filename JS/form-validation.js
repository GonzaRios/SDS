var nombre = document.getElementById('Nombre');
var apellido = document.getElementById('Apellido');
var provincia =  document.getElementById('provincia');
var mail =  document.getElementById('mail');
var cp = document.getElementById('cp')
var r1 = document.getElementById('radio1')
var r2 = document.getElementById('radio2')
var r3 = document.getElementById('radio3')
var r4 = document.getElementById('radio4')

var error =  document.getElementById('error');

function enviarFormulario(){
    
    
    console.log('Enviando formulario...');
    console.log(r1.checked)  
    console.log(r2.checked)
    console.log(r3.checked)
    console.log(r4.checked)
    var mensajeError= []

    if (nombre.value === null || nombre.value === '' ){
        alert('Ingrese su nombre')
    //   var formatError = document.getElementById('errorForm')
    //   var texto = document.createElement("P");
    //   texto.className = 'formatError';
    //   texto.textContent='Complete el campo faltante' 
    //   formatError.appendChild(texto);
    };
    
     
    if (apellido.value === null || apellido.value === ''){
        alert('Ingrese su apellido')};
        
    if (provincia.value === null || provincia.value === ''){
     alert('Seleccione una provincia')};    
    
    
    if (mail.value === null || mail.value === ''){
    alert('Ingrese su mail')};
     
    if (cp.value === null || cp.value === ''){
        alert('Ingrese su código postal')};

    if (r1.checked == false && r2.checked==false){
    alert('Elija una opción')
        };  

    if (r3.checked == false && r4.checked==false){
     alert('Elija tipo de envío') };  

    error.innerHTML = mensajeError.join('.  ')
    return false
}
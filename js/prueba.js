function validar(){
    var nombre = document.getElementById("producto_nombre").value 
    var valor = document.getElementById("producto_valor").value
    var cantidad =  document.getElementById("producto_cantidad").value
    var cliente = document.getElementById("nombre_cliente").value
    var mail = document.getElementById("email_cliente").value
    var texto = ''
   

    if (nombre.length == 0) { // si el largo del texto es igual a 0
       
        id_producto.innerText = ("Debes ingresar un nombre")  
    } 

    
    if (isNaN(valor) || valor.length == 0) { 
       
        id_valor.innerText = ("Debes ingresar un valor") 
        texto += 'debe ingresar una cantidad valida' + '<br>'
    }
    
    if (isNaN(cantidad) || cantidad.length == 0) {
        
        id_cantidad.innerText = ("Debes ingresar una cantidad valida") 
        texto += 'debes ' + '<br>'
    }
    
    if (cliente.length == 0) {
        id_cliente.innerText = ("Debes ingresar un cliente valido") 
        
    }
   
    if (mail.length == 0) {
        
      id_mail.innerText = ("Debes ingresar un mail valido")
      return false
    
    }
     
    
}

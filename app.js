//Codigo desarrollado por Carlos Fernando Calderon Mora... Colombia
let textarea = document.getElementById('Textoarea');
// arrays para reemplazo de letras
const abecedario = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ',
    '.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '<', '>', '-', '_', '+', '=', '*', '/', '|', '\\'
];

const abecedarioDesordenado = [
    ',', 'h', 'v', 's', '(', 'o', ';', 'k', 'n', '!', ')', 't', 'm', 'w', '{',
    'g', 'y', 'd', '?', '+', 'a', ' ', 'r', 'e', '<', '*', ']', 'l', 'f', '"',
    '.', 'z', ':', '\\', '-', 'u', '_', 'q', '|', '}', 'x', 'c', '=', 'b', 'i',
    'p', 'j', "'", '/'
];


//array de parrafos en el area izquierda
let arrayP=[document.getElementById("1"), document.getElementById("2"), document.getElementById("3"),
    document.getElementById("4"), document.getElementById("5"), document.getElementById("6"), 
    document.getElementById("7"), document.getElementById("8"), document.getElementById("9"),
    document.getElementById("10")]

//Codigo para el ingrese el texto aqui desaparezca y aparezca cuando el text area esta vacio
//automatico con funciones anonimas cuando gana foco y pierde foco
document.addEventListener('DOMContentLoaded', function(){    
    textarea.addEventListener('focus', function() {
        if (textarea.value === 'Ingrese el texto aquí') {
            textarea.value = '';            
        }
    });
    textarea.addEventListener('blur', function() {
        if (textarea.value === '') {
            textarea.value = 'Ingrese el texto aquí';
            textarea.style.color = '#0A3871';
        }
    });
});




//Funcion del boton Encriptar que lleva lo escrito al area derecha y encriptado
function Encriptar(){    
    let valorUsuario = textarea.value.toLowerCase();
    let valorEncriptado = "";
    
    
    if (textarea.value != 'Ingrese el texto aquí') {       
     for (let i=0;i < valorUsuario.length ;i++) {        
        let caracter=valorUsuario.charAt(i);
        for(let o=0;o<abecedario.length;o++){
            if(caracter==abecedario[o]){
              valorEncriptado+=abecedarioDesordenado[o];
              break;
            }
           }
        }
        //deshabilitamos las imagenes y texto de la derecha para añadir el texto encriptado y habilitamos boton Copiar
        hiddenelementos('Imagen','true');hiddenelementos('Titulo2','true');
        hiddenelementos('texto_Mensaje','true');
        cambiarPosition(); aparecerBoton();
        
        if(arrayP[9].textContent !== ''){  //if que limpia los <p> cuando se llenen
            for (let x = 0; x < arrayP.length; x++) {
                arrayP[x].textContent='';
            }
            
        }

        for (let q = 0; q < arrayP.length; q++) { //for encargado de llenar el siguiente <p> cuando el-
            if(arrayP[q].textContent === ''){ //anterior esta lleno
            arrayP[q].textContent=valorEncriptado;
            break;
            }
        }    
        textarea.value=''; //Al Encriptar limpiamos el area de texto
    }

}
//funcion parecida pero inversa a la de encriptar que lleva el escrito a la derecha tambien
function Desencriptar(){    
    let valorUsuario2 = textarea.value.toLowerCase();
    let valorDesencriptado = ""; 

    if (textarea.value !== 'Ingrese el texto aquí') {       
     for (let f=0;f < valorUsuario2.length ;f++) {        
        let caracter2=valorUsuario2.charAt(f);
        for(let g=0;g<abecedarioDesordenado.length;g++){
            if(caracter2==abecedarioDesordenado[g]){
                valorDesencriptado+=abecedario[g];
                break;
            }
           }
        }

        if(arrayP[9].textContent !== ''){  //if que limpia los <p> cuando se llenen
            for (let x = 0; x < arrayP.length; x++) {
                arrayP[x].textContent='';
            }
            
        }

        for (let q = 0; q < arrayP.length; q++) {    //for encargado de llenar el siguiente <p> cuando el-
            if(arrayP[q].textContent === ''){ //anterior esta lleno
            arrayP[q].textContent=valorDesencriptado;
            break;
            }
        }    
        textarea.value=''; //Al Desencriptarlimpiamos el area de texto
        hiddenelementos('Imagen','true');
        hiddenelementos('Titulo2','true');
        hiddenelementos('texto_Mensaje','true');
        cambiarPosition();
        aparecerBoton();
    } 


    return;
    
}






function hiddenelementos(elemento, valor){
   let elementoHTML=document.getElementById(elemento)
   elementoHTML.setAttribute('hidden', valor)
   
}

function cambiarPosition() {
    var elementos = document.getElementsByClassName('Pcopias_grupo');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.position = 'static'; // Cambia a static para que no salgan del bloque de la derecha
    }
}

function aparecerBoton(){
    let elementos2=document.getElementById('area_Derecha');
    elementos2.style.width='16.5em'
    elementos2.style.height='35.5em'
    document.getElementById('Boton_Copiar').removeAttribute('hidden')
}

function copiarTexto() {  //Funcion creada para el boton copiar text
    let textoACopiar = null;

    // Busca el último párrafo no vacío para copiar su contenido
    for (let q = arrayP.length - 1; q >= 0; q--) {        
        if (arrayP[q].textContent !== '') { 
            textoACopiar = arrayP[q];
            break;
        }
    }        

    if (textoACopiar) {
        let texto = textoACopiar.textContent.toLowerCase();

        // Crea un área de texto temporal para copiar el texto
        let areaTemporal = document.createElement('textarea');
        areaTemporal.value = texto;

        // Añade el área de texto al DOM
        document.body.appendChild(areaTemporal);

        // Selecciona el contenido del área de texto
        areaTemporal.select();
        areaTemporal.setSelectionRange(0, 99999); // Para celulares
        document.execCommand('copy');

        // Elimina el área de texto temporal
        document.body.removeChild(areaTemporal);

        
        
    }
    //Al copiar un elemento limpiamos el area de texto    
    textarea.value='';  
}
//Codigo desarrollado por Carlos Fernando Calderon Mora... Colombia
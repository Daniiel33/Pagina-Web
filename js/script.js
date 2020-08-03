const nombre = $("#nombre");
const apellido = $("#apellido");
const form = $("#form");
const formR=$(".form-group");



function Nombre(str){
    if(str.search(/[0-9]/)>=0){
        return false;
    }
    return true;
}

function Input(element){
    let texto = element.value;
    if(!Nombre(texto)){
        element.value="";
        alert("Por favor introducir solo letras");
    }
}




form.on("submit",function(){
    alert("Agendado");
});

nombre.on("change",function(){
    Input(nombre[0]);
});

apellido.on("change",function(){
    Input(apellido[0]);
})
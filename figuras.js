// Cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

//Triángulo

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2
}

//Circulo

function diametroCirculo(radio){
    return radio*2;
}

const Pi=Math.PI;
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*Pi;
}

function areaCirculo(radio){
    return radio*radio*Pi;
}

//Interacción con el HTML

function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(perimetro+"cm");
}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area+"cm2");
}

function calcularPerimetroTriangulo(){
    const input1=document.getElementById("InputLado1Triangulo");
    const value1= input1.value;
    const input2=document.getElementById("InputLado2Triangulo");
    const value2=input2.value;
    const input3=document.getElementById("InputLado3Triangulo");
    const value3=input3.value;
    const perimetro=perimetroTriangulo(value1,value2,value3);
    alert(perimetro+"cm");
}

function calcularAreaTriangulo(){
    const input1=document.getElementById("InputBaseTriangulo");
    const value1=input1.value;
    const input2=document.getElementById("InputAlturaTriangulo");
    const value2=input2.value;
    const area=areaTriangulo(value1,value2);
    alert(area+"cm2");
}
function calcularPerimetroCirculo(){
    const input=document.getElementById("InputCirculo");
    const value=input.value;
    const perimetro=perimetroCirculo(value);
    alert(perimetro+"cm");
}

function calcularAreaCirculo(){
    const input=document.getElementById("InputCirculo");
    const value=input.value;
    const area=areaCirculo(value);
    alert(area+"cm2");
}

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles');
        const altura = Math.sqrt(lado1**2 - ((base/2)**2));
        console.log(altura);
    }
    else{
        alert('No es un triangulo isosceles')
    }
}
altura(6, 6, 4)
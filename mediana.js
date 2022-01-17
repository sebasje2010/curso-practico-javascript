const listaUsuario=[
    100,300,500,250,400,185,5000
]
function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}
const mitadListaUsuario=parseInt(listaUsuario.length/2);

function esPar(longitud){
    if (longitud%2==0){
        return true;
    }
    else{
        return false;
    }
}
function calcularMediana(){
    if(esPar(listaUsuario.length)){
        listaUsuario.sort((a, b) => a - b);
        const elemento1=listaUsuario[mitadListaUsuario-1];
        const elemento2=listaUsuario[mitadListaUsuario];
        const promedioElemento1y2=calcularMediaAritmetica([
            elemento1,elemento2,
        ])
        mediana = promedioElemento1y2;
        return mediana;
    }
    else{
        listaUsuario.sort((a, b) => a - b);
        mediana=listaUsuario[mitadListaUsuario];
        return mediana;
    }
}
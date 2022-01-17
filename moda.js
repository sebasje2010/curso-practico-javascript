const lista1=[1,2,3,4,4,4,5,2,3,4,5,5,5,6,2,3,5,7,8]
const lista1Count={};
lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]+=1;
        }
        else{
            lista1Count[elemento]=1;
        }
    }
);
const lista1Array=Object.entries(lista1Count).sort(
    function (valorAcumulado,nuevoValor){
        return nuevoValor[1]-valorAcumulado[1]; //Esto ordene al reves para abajo buscar la posicion 0
    }
);
const moda=lista1Array[0];
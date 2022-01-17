function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function buttonPriceDiscount(){
    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;
    const inputCoupon=document.getElementById("inputCoupon");
    const couponValue=inputCoupon.value;
    const isCouponValueValid=function(buscar){
        return buscar.name===couponValue;
    };
    const userCoupon=coupons.find(isCouponValueValid);
    if(!userCoupon){
        alert("El cupón "+couponValue+" no es valido");
    }
    else{
        const descuento=userCoupon.discount;
        const precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
        const resultP=document.getElementById("ResultingPrice");
        resultP.innerText="El precio con descuento son: $"+precioConDescuento;
    }   
}
const coupons = [
    {
        name:"Sebitas_es_Batman",
        discount:15,
    },
    {
        name:"pero_no_le_digas_a_nadie",
        discount:20,
    },
    {
        name:"es_un_secreto",
        discount:30,
    },
];
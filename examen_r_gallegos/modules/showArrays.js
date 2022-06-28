export function showArrays (arrayDeArrays){
    document.querySelector("#array1").innerHTML = arrayDeArrays[0].join(",");
    document.querySelector("#array2").innerHTML = arrayDeArrays[1].join(",");
}
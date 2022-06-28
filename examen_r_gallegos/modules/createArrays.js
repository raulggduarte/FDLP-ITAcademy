const array1 = [];
const array2 = [];

export function createArrays() {
    for ( let i = 100 ; i > 0 ; i--) {
        if (i % 5 === 0) {
            array1.push(i);
            if (i % 3 === 0){
                array2.push(i);
            }
        }
    }
    array2.sort();
    return [array1, array2];
}
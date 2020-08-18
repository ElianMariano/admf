import calculateVpl from './calculateVpl';

function calculateTir(fc: number[]){
    let a = 0, b = 1;
    let i = 0;

    console.log(calculateVpl(fc, a));
    console.log(calculateVpl(fc, a));

    while(calculateVpl(fc, a) < 0 && calculateVpl(fc, b) > 0){
        const mid = (a+b)/2;

        if (calculateVpl(fc, mid) > 0){
            b = mid;
        }
        else{
            a = mid;
        }
    }

    return i;
}

export default calculateTir;
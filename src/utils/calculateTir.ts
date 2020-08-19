import calculateVpl from './calculateVpl';

function calculateTir(fc: number[]){
    let isZero = false;
    for (let i = 0;i < fc.length;i++){
        if (fc[i] !== 0)
            isZero = true;
    }

    // Se todos os valores são zero, retorna zero
    if (!isZero)
        return 0;

    let a = 300, b = 0;
    let i = 0;
    let a_vpl = calculateVpl(fc, a);
    let b_vpl = calculateVpl(fc, b);

    const tol = 1/Math.pow(10, 5);

    while((a_vpl < 0 && b_vpl > 0) && (b_vpl - a_vpl) > tol){
        const mid = (a+b)/2;

        if (calculateVpl(fc, mid) > 0){
            b = mid;
        }
        else{
            a = mid;
        }

        a_vpl = calculateVpl(fc, a);
        b_vpl = calculateVpl(fc, b);
    }

    if (((b_vpl - a_vpl) < tol))
        i = a;

    return i;
}

export default calculateTir;
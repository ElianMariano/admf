import calculatePresentValue from './calculatePresentValue';

function calculatePayback(fc: number[], i: number){
    if (fc[0] === undefined)
        return 0;

    let cash = fc[0];
    let presentValue = calculatePresentValue(fc[0], i, 0);

    let n = 1;
    while ((calculatePresentValue(fc[n], i, n) + cash) < 0){
        presentValue = calculatePresentValue(fc[n], i, n);
        cash = presentValue + cash;
        n++;
    }

    const result = (n-1) + Math.abs(cash) / calculatePresentValue(fc[n], i, n);

    return result;
}

export default calculatePayback;
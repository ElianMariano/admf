// Calculate the compound interest
// VP = VF/(1 + i)^t
function calculatePresentValue(v: number, i: number, t: number){
    // Converts the percentage
    const percentage = i / 100;

    return v/Math.pow((1 + percentage), t);
}

export default calculatePresentValue;
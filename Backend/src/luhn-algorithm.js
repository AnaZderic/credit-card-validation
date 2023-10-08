const LuhnAlgorithm = (cardNumber) => {
    
    let sum = 0;
    let digits = cardNumber.split("");
    let position = false;
    let length = digits.length;
    
    for(i = length - 1; i >= 0; i--) {
        let parsed = parseInt(digits[i]);
        if(position) {
            let doubled = parsed * 2;
            sum += (Math.floor(doubled / 10) + (doubled % 10));
        } else {
            sum += parsed;
        }
        position = !position;
    }
    return (sum % 10 === 0);
    
}

export default LuhnAlgorithm;
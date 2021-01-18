for (var i = 100; i<999; i++){
    let number = i.toString();
    let digit_0 = parseInt(number[0]);
    let digit_1 = parseInt(number[1]);
    let digit_2 = parseInt(number[2]);
    let armstrong = (digit_0 * digit_0 * digit_0) + (digit_1 * digit_1 * digit_1) + (digit_2 * digit_2 * digit_2);
    if (parseInt(number) === armstrong) {
    console.log (armstrong + ' is an armstrong number');
    }
}
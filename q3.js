let x = 3;
let y = -5;
let z = 4;
if (x < y && x < z){
    if (y < z) {
        alert(x + ", " + y + ", " + z);
    }
    else {
        alert(x + ", " + z + ", " + y);
    }
}
else if (y < x && y < z) {
    if (x < z) {
        alert(y + ", " + x + ", " + z);
    }
    else{
        alert(y + ", " + z + ", " + x);
    }
}
else if (y < x) {
    alert(z + ", " + y + ", " + x);
}
else{
    alert(z + ", " + x + ", " + y);
}
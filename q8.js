function happy_number(number) 
{
    var a, b ;
    var c = [] ;
 
    while(number != 1 && c[number] !== true) 
    {
        c[number] = true ;
        a = 0 ;
        while (number > 0) {
            b = number % 10 ;
            a += b * b ;
            number = (number  - b) / 10 ;
        }
        number = a ;
    }
    return (number === 1) ;
}
 
var count = 5;
var numbers = 1;
var first_5 = ''; 
while(count-- > 0) 
{
    while(!happy_number(numbers))
        numbers++ ;
first_5 = first_5+(numbers + ", ") ;

    numbers++ ;
}
console.log('First 5 happy numbers are : '+first_5);
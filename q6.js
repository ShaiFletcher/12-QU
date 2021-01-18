var students = [["david", 80], ["vinoth", 77], ["divya", 88], ["Ishitha", 95], ["thomas", 68]];
var avrage = 0;
for (var i=0; i < students.length; i++){
avrage += students[i][1];
}
avrage = avrage/students.length;


switch (true){
    case (avrage < 60):
    console.log("F");
    break;
    
    case (avrage < 70):
    console.log("D");
    break;
    
    case (avrage < 80):
    console.log("C");
    break;
    
    case (avrage < 90):
    console.log("B");
    break;
  
    case (avrage <= 100):
    console.log("A");
    break;
}
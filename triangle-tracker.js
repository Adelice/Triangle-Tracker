function triangle(){
    var sideOne=document.getElementById("side1").value;
    var sideTwo=document.getElementById("side2").value;
    var sideThree=document.getElementById("side3").value;

if(
    sideOne===sideTwo  && sideTwo===sideThree) {
        alert("This is an equilateral Triangle");
        }
        
       // else if (sideOne===sideTwo || sideTwo===sideThree || sideOne===sideThree ) {
       // alert("This is an isosceles Triangle");
        }
        
        //else if ( sideOne+sideTwo>sideThree || sideTwo+sideThree>=sideOne || sideOne+sideThree<=sideTwo ) {
       // alert("This is an scalene Triangle");
        //}


if(sideOne === '' || sideTwo === '' || sideThree === '') {
        alert("Please enter three side lengths");

}
  



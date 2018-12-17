function triangle(){
   var sideone = document.getElementById("side1").value;
   var sidetwo = document.getElementById("side2").value;
   var sidethree = document.getElementById("side3").value;
   var array=['equilateral','isocseles','scalene'];
  
  if (sideone <= 0 || sidetwo <= 0 || sidethree <= 0)  {
      alert("Please enter valid sides");
  }
   else if((sideone===sidetwo) && (sidetwo===sidethree) && (sidethree===sideone)) {
    alert("This is an equilateral Triangle");
   }
   else if (sideone === sidetwo || sidetwo===sidethree|| sideone ===sidethree ){
    alert("This is an isosceles Triangle");
   }
  
   else if((sideone + sidetwo >= sidethree &&sidetwo + sideone >= sidethree) ||
(sideone + sidetwo>= sidethree && sidethree + sideone >= sidetwo) || (sidetwo + sidethree >= sideone && sidethree + sidetwo >= sideone))
   {
         alert("this is a scalene triangle");
   }
   else{
       alert("N0T A TRIANGLE");
   }
}


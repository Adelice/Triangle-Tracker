function triangle(){
   var sideone = document.getElementById("side1").value;
   var sidetwo = document.getElementById("side2").value;
   var sidethree = document.getElementById("side3").value;
   var array=['EQUILATERAL','ISOSCELES','SCALENE'];
  
  if (sideone <= 0 || sidetwo <= 0 || sidethree <= 0)  {
      alert("Please Enter Valid Sides");
  }
   else if((sideone===sidetwo) && (sidetwo===sidethree) && (sidethree===sideone)) {
    alert(array[0]);
   }
   else if (sideone === sidetwo || sidetwo===sidethree|| sideone ===sidethree ){
    alert(array[1]);
   }
  
   else if((sideone + sidetwo >= sidethree &&sidetwo + sideone >= sidethree) ||
(sideone + sidetwo>= sidethree && sidethree + sideone >= sidetwo) || (sidetwo + sidethree >= sideone && sidethree + sidetwo >= sideone))
   {
         alert(array[2]);
   }
   else{
       alert("N0T A TRIANGLE");
   }
}


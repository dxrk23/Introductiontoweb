var nevestacounter = 1 , kakecounter = 1;

function kakegenre(){
  switch (kakecounter) {
    case 0:
      document.getElementById('test1').innerHTML = " ";
      break;
    case 1:
      document.getElementById('test1').innerHTML = "Drama Games Psychology";
      break;
    case 2:
      document.getElementById('test1').innerHTML = "Anime about gambling in high school.";
      break;
  }
  if (kakecounter == 2){
    kakecounter = 0;
  }
  else ++kakecounter;
  return 0;
}

function nevestagenre(){

  switch (nevestacounter) {
    case 0:
      document.getElementById('test2').innerHTML = " ";
      break;
    case 1:
      document.getElementById('test2').innerHTML = "Magic Fantesy";
      break;
    case 2:
      document.getElementById('test2').innerHTML = "Anime about gambling in high school.";
      break;
  }
  if (nevestacounter == 2){
    nevestacounter = 0;
  }
  else ++nevestacounter;
  return 0;

}

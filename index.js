function kakegenre(){
  let a = document.getElementById('test1').innerHTML;
  if (a == " " || a == null){
    document.getElementById('test1').innerHTML = "Drama Games Psychology";
    return 0;
  }
  else{
    document.getElementById('test1').innerHTML = " ";
    return 0;
  }
}

function nevestagenre(){
  let a = document.getElementById('test2').innerHTML;
  if (a == " " || a == null){
    document.getElementById('test2').innerHTML = "Magic Fantesy";
    return 0;
  }
  else{
    document.getElementById('test2').innerHTML = " ";
    return 0;
  }
}

var checkCells = 1;

function rotate() {
  let x = document.getElementsByClassName('__white');
  let y = document.getElementsByClassName('__black');
  if (checkCells % 2 != 0) {
    checkCells++;
    // for (let i = 0; i < 32; i++) {
    //   x[i].style.backgroundColor = 'black';
    //   y[i].style.backgroundColor = 'white';
    // }
    document.getElementById("__vertical_one").style.flexDirection = 'column';
    document.getElementById("__vertical_two").style.flexDirection = 'column-reverse';
    document.getElementById("__first_line").style.flexDirection = 'row';
    document.getElementById("__second_line").style.flexDirection = 'row-reverse';
  } else {
    checkCells++;
    // for (let i = 0; i < 32; i++) {
    //   y[i].style.backgroundColor = 'black';
    //   x[i].style.backgroundColor = 'white';
    // }
      document.getElementById("__vertical_one").style.flexDirection = 'column-reverse';
      document.getElementById("__vertical_two").style.flexDirection = 'column';
      document.getElementById("__first_line").style.flexDirection = 'row-reverse';
      document.getElementById("__second_line").style.flexDirection = 'row';
    }
}

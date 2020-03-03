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

function Style1(){
  let x = document.getElementsByClassName('__white');
  let y = document.getElementsByClassName('__black');

  for (let i = 0; i < 32; i++) {
    x[i].style.backgroundColor = 'white';
    y[i].style.backgroundColor = 'black';
  }
    document.querySelector('.__border').style.border = '100px solid silver'
}

function Style2(){
  try{
    let x = document.getElementsByClassName('__whitee');
    let y = document.getElementsByClassName('__blac');

    for (let i = 0; i < 32; i++) {
      x[i].style.backgroundColor = 'D6F599';
      y[i].style.backgroundColor = '436436';
  }
  document.querySelector('.__border').style.border = '100px solid D2FF28'
  } catch(err) {
    throw new err;
  } finally {
    console.log(" Style was chaged")
  }
}

function Style3(){
  let x = document.getElementsByClassName('__white');
  let y = document.getElementsByClassName('__black');

  for (let i = 0; i < 32; i++) {
    x[i].style.backgroundColor = '#EDCBB1';
    y[i].style.backgroundColor = '#B7245C';
  }
  document.querySelector('.__border').style.border = '100px solid #7C3238'
}

function Style4(){
  let x = document.getElementsByClassName('__white');
  let y = document.getElementsByClassName('__black');

  for (let i = 0; i < 32; i++) {
    x[i].style.backgroundColor = '#E0B7B7';
    y[i].style.backgroundColor = '#DC7F9B';
  }
  document.querySelector('.__border').style.border = '100px solid #94BFA7'
}

function Style5(){
  try{
    let x = document.getElementsByClassName('__white');
    let y = document.getElementsByClassName('__black');

    for (let j = 0; i < 32; i++) {
      x[i].style.backgroundColor = 'D6F599';
      y[i].style.backgroundColor = '436436';
  }
  document.querySelector('.__border').style.border = '100px solid D2FF28'
  } catch(err) {
    throw new err;
  } finally {
    console.log(" Style was chaged")
  }
}
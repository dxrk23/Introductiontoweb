function logocheck() {
  let x = document.querySelector(".forma1").value;
  let kcell = document.createElement("img");
  let beeline = document.createElement("img");
  let tele2 = document.createElement("img");
  document.querySelector(".celllogo").innerHTML = "";
  kcell.src = "logos/kcell.png";
  beeline.src = "logos/beeline.png";
  tele2.src = "logos/tele2.png";
  let src = document.querySelector(".celllogo");

  //kcell
  if (x.includes('+7701')) {
    src.appendChild(kcell);
  }
  if (x.includes('+7702')) {
    src.appendChild(kcell);
  }
  if (x.includes('+7775')) {
    src.appendChild(kcell);
  }
  if (x.includes('+7778')) {
    src.appendChild(kcell);
  }

  //beeline
  if (x.includes('+7777')) {
    src.appendChild(beeline);
  }
  if (x.includes('+7776')) {
    src.appendChild(beeline);
  }
  if (x.includes('+7705')) {
    src.appendChild(beeline);
  }

  //tele2
  if (x.includes('+7747')) {
    src.appendChild(tele2);
  }
  if (x.includes('+7707')) {
    src.appendChild(tele2);
  }
}

function validation() {
  let x = document.querySelector("#Phone").value;
  let y = document.querySelector("#Money").value;
  let z = document.querySelector("#CardNumber").value;
  if (x > 77000000000 && x<77999999999) {
    if (y > 0) {
      if (z > 1000000000000000 && z < 9999999999999999) {
        Swal.fire({
          icon: 'success',
          title: 'transaction passed',
          text: 'In few minutes your balance should popolnitsay!',
          footer: '<a href="midterm.html">Back to main page</a>'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'transaction error',
          text: 'Something went wrong!',
          footer: '<a href="midterm.html">Back to main page</a>'
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'transaction error',
        text: 'Something went wrong!',
        footer: '<a href="midterm.html">Back to main page</a>'
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'transaction error',
      text: 'Something went wrong!',
      footer: '<a href="midterm.html">Back to main page</a>'
    });
  }
}

function tariffcheck() {
  document.querySelector(".tarif1").style.display = 'none';
  document.querySelector(".tarif2").style.display = 'none';
  document.querySelector(".tarif3").style.display = 'none';
  document.querySelector(".tarif4").style.display = 'none';
  document.querySelector(".tarif5").style.display = 'none';
  document.querySelector(".tarif6").style.display = 'none';
  document.querySelector(".tarif7").style.display = 'none';
  document.querySelector(".tarif8").style.display = 'none';
  let x = document.querySelector(".naskolkobogat").value;
  if (x >= 1390) {
    document.querySelector(".tarif7").style.display = 'block';
  }
  if (x >= 1890) {
    document.querySelector(".tarif8").style.display = 'block';
  }
  if (x >= 1990) {
    document.querySelector(".tarif1").style.display = 'block';
  }
  if (x >= 2590) {
    document.querySelector(".tarif2").style.display = 'block';
    document.querySelector(".tarif4").style.display = 'block';
  }
  if (x >= 2990) {
    document.querySelector(".tarif3").style.display = 'block';
  }
  if (x >= 3590) {
    document.querySelector(".tarif5").style.display = 'block';
  }
  if (x >= 5590) {
    document.querySelector(".tarif6").style.display = 'block';
  }
}

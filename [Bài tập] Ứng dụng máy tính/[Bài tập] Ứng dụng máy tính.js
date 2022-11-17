
function addition(){
  let giaTri1 =  +document.getElementById("phepTinh1").value;
  let giaTri2 = +document.getElementById("phepTinh2").value;
  let tong = giaTri1 + giaTri2;

    document.getElementById("Result Division").innerText = tong;
}
function subtrac(){
    let giaTri1 =  document.getElementById("phepTinh1").value;
    let giaTri2 = document.getElementById("phepTinh2").value;
    let hieu = giaTri1 - giaTri2;
    document.getElementById("Result Division").innerText = hieu;
}function multip(){
    let giaTri1 =  document.getElementById("phepTinh1").value;
    let giaTri2 = document.getElementById("phepTinh2").value;
    let tich = giaTri1 * giaTri2;
    document.getElementById("Result Division").innerText = tich;
}function division(){
    let giaTri1 =  document.getElementById("phepTinh1").value;
    let giaTri2 = document.getElementById("phepTinh2").value;
    let thuong = giaTri1 / giaTri2;
    document.getElementById("Result Division").innerText = thuong;
}




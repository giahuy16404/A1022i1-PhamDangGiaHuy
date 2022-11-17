function nhapChon() {
    let giaTriVao = document.getElementById("dauVao").value;
    let selec1 = document.getElementById("selec1").value;
    let selec2 = document.getElementById("selec2").value;
      if (selec1 =="a"&& selec2 =="a"){
        document.getElementById("result").innerText = giaTriVao/24000;
}
      if (selec1 =="a"&& selec2 =="b"){
        document.getElementById("result").innerText = giaTriVao;
}
      if (selec1 =="b"&& selec2 =="a"){
        document.getElementById("result").innerText = giaTriVao;
      }
      if (selec1 =="b"&& selec2 =="b"){
        document.getElementById("result").innerText = giaTriVao *24000;
    }
}
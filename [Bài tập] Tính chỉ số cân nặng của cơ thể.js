function dauVao(){
    let canNang = +document.getElementById("canNang").value;
    let chieuCao = +document.getElementById("chieuCao").value;
    let chieuCao2 = chieuCao * chieuCao;
    let bmi = (canNang / chieuCao2);
    if (bmi < 18)
        document.getElementById("output").innerText= "Underweight";
    else if (bmi < 25.0)
        document.getElementById("output").innerText= "Normal";
    else if (bmi < 30.0)
        document.getElementById("output").innerText= "Overweight";
    else
        document.getElementById("output").innerText= "Obese";

}




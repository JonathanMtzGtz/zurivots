
  const  getConteoVotos = "https://apirest-mysql-ywx2.onrender.com"+"/api/zurich/getConteoVotos";
  const  saludxellas = document.getElementById("saludxellas");
  const futurobrillante = document.getElementById("futurobrillante");
  const renuestraciudad = document.getElementById("renuestraciudad");

var data = {

}

const options = {
    method : "POST",
    body : JSON.stringify(data),
    headers :{
        'Content-Type':'application/json'
    }
}

fetch(getConteoVotos,options)
.then(resp => resp.json())
.then(resp=> {
    var total = resp[0].total_registros;
    var saludxellas_valor = parseInt(resp[0].total_por_un_futuro_brillante);
    var futurobrillante_valor = parseInt(resp[0].total_salud_por_ella);
    var renuestraciudad_valor = parseInt(resp[0].total_renaciendo_nuestra_ciudad);
    
    //console.log(total, saludxellas_valor, futurobrillante_valor, renuestraciudad_valor)

    saludxellas.innerHTML = ((100/total)*saludxellas_valor).toFixed(2) +"% <br>votos";
    futurobrillante.innerHTML = ((100/total)*futurobrillante_valor).toFixed(2) +"% <br>votos";
    renuestraciudad.innerHTML = ((100/total)*renuestraciudad_valor).toFixed(2) +"% <br>votos";


})
.catch(error => {
    Swal.fire({
        position: "top-center",
        icon: "error",
        title: error+"REPORTAR A DEPARTAMENTO DE TI",
        showConfirmButton: false,
        timer: 3000,
      });
})

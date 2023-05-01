var url = "https://digimon-api.vercel.app/api/digimon"

var contenido = document.querySelector("#contenido") 

fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)

    for (item of datos){

    contenido.innerHTML += `
    <div class="tarjeta">
        <div class="card" style="width: 18rem;">
        <img  src="${item.img}" class="card-img-top" alt="..." img src="./assets/img/cursor3.cur" style="cursor: url(./assets/img/cursor3.cur), auto;">>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.level}</p>
          <a href="${item.img}" class="btn btn-primary" img src="./assets/img/cursor3.cur" style="cursor: url(./assets/img/cursor3.cur), auto;">eligéme</a>
        </div>
        </div>
    </div>    
    `

}

})


const miAudio = document.getElementById('miAudio');
const miBoton = document.querySelector('button');


  
  
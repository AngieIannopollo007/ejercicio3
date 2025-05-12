const total = 150; 
let estado = JSON.parse(localStorage.getItem("album")) || Array(total).fill(false); 
const contenedor = document.getElementById("contenedor"); 
const contador = document.getElementById("contador"); 

function actualizarContador() {
    const figusFaltantes = estado.filter(e => !e).length;
    contador.textContent = `Faltan ${figusFaltantes} figuritas`;
}

 function guardar() { 
    localStorage.setItem("album", JSON.stringify(estado)); 

}
 for (let i = 0; i < total; i++) { 
    const btn = document.createElement("button"); 
    btn.className = "boton"; 
    btn.textContent = i + 1;

     if (estado[i]) { 
        btn.classList.add("completa"); 
     } 

     btn.addEventListener("click", () => {
        estado[i] = !estado[i];
        btn.classList.toggle("completa");
        actualizarContador();
        guardar();
    });
    
     contenedor.appendChild(btn); 
    }

     actualizarContador(); 

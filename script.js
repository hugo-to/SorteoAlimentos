function sortear() {
    const productos = document.getElementById("productos").value.split("\n");
    const personas = document.getElementById("personas").value.split("\n");
    const resultados = [];
    
    if (productos.length === 0 || personas.length === 0) {
      alert("Debes cargar al menos un producto y una persona");
      return;
    }
    
    if (productos.length < personas.length) {
      alert("No hay suficientes productos para sortear");
      return;
    }
    
    for (let i = 0; i < personas.length; i++) {
      const producto = productos.splice(Math.floor(Math.random() * productos.length), 1);
      resultados.push( personas[i] + "     〰 Le toco ➡      " + producto);
    }
    
    const resultadosHtml = resultados.map(resultado => "<p>" + resultado + "</p>").join("");
    document.getElementById("resultados").innerHTML = resultadosHtml;
    
    // Guardar en el local storage
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("personas", JSON.stringify(personas));
  }

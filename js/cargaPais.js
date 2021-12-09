
const cargaPais = async (nombrePais) => {
    let url = `https://restcountries.com/v3.1/name/${nombrePais}`;
    let pais = await cargaDatos(url);
    let bandera = document.querySelector("#bandera");
    let escudo = document.querySelector("#escudo");
    let mapa = document.querySelector("#mapa");
  
    document.querySelector("posicion-menu").innerHTML = pais[0].name.common;
    document.querySelector("posicion-capital").innerHTML = pais[0].capital;
    document.querySelector("posicion-poblacion").innerHTML = parseFloat(pais[0].population).toLocaleString("es");
    document.querySelector("posicion-position").innerHTML = pais[0].latlng[0];
    document.querySelector("posicion-positionlong").innerHTML = pais[0].latlng[1];
    document.querySelector("posicion-tecnicos").innerHTML = parseFloat(pais[0].area).toLocaleString("es");
    document.querySelector("posicion-tecnicoszona").innerHTML = pais[0].timezones;
    mapa = document.querySelector("posicion-map").innerHTML = pais[0].maps.googleMaps;
    street = document.querySelector("posicion-mapStreet").innerHTML = pais[0].maps.openStreetMaps;
  
  
  
  
    if (pais[0].borders) {
      document.querySelector("posicion-geograficos").innerHTML = pais[0].borders;
    } else {
      document.querySelector("posicion-geograficos").innerHTML = "No tiene fronteras";
    };
  
    let lenguaje = Object.values(pais[0].languages);
    lenguaje.forEach(prop => {
      document.querySelector("posicion-lenguaje").innerHTML = prop;
    });
  
    let monedas = Object.values(pais[0].currencies);
    monedas.forEach((prop) => {
      document.querySelector("posicion-moneda").innerHTML = prop.name;
      if (prop.symbol) {
        document.querySelector("posicion-symbol").innerHTML = prop.symbol;
      } else {
        document.querySelector("posicion-symbol").innerHTML = "No dispone de símbolo";
      };
  
  
    });
  
    if (pais[0].coatOfArms.png) {
      escudo.src = pais[0].coatOfArms.png;
    } else {
      p = document.createElement("p");
      sineScudo = document.querySelector("#sinescudo")
      sineScudo.appendChild(p)
      p.innerHTML = "No dispone de escudo de armas"
    }
  
    bandera.src = pais[0].flags.png;
  
    let div = document.querySelector("#enlace");
    let a = document.createElement("a");
    a.href = mapa;
    a.target = "_blank";
    a.innerHTML = "Google Maps";
    div.appendChild(a);
  
  
    let st = document.querySelector("#street");
    let open = document.createElement("a");
    open.href = street;
    open.target = "_blank";
    open.innerHTML = "openStreet";
    st.appendChild(open);
  };
  
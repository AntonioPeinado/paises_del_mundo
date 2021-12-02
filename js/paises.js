const continentes = [
  { value: "europe", texto: "Europa" },
  { value: "africa", texto: "Africa" },
  { value: "asia", texto: "Asia" },
  { value: "americas", texto: "America" },
  { value: "oceania", texto: "Oceania" },
];

const cargaPaisesDeContinente = async (value) => {
  let url = `https://restcountries.com/v3.1/region/${value}`;
  let paises = await cargaDatos(url);
  let selectPaises = document.querySelector("#paises");
  selectPaises.innerHTML = "";
  let opttioInicio = document.createElement("option");
  opttioInicio.value = 0;
  opttioInicio.innerHTML = "Selecciona pais....";
  selectPaises.appendChild(opttioInicio);

  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.value = pais.name.common;
    option.innerHTML = pais.name.common;
    selectPaises.appendChild(option);
  });
};

const cargaDatos = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      resolve(response.json());
    });
  });
};
const cargaSelectContinentes = () => {
  let selectContinentes = document.querySelector("#continentes");
  continentes.forEach((continente) => {
    let option = document.createElement("option");
    option.value = continente.value;
    option.innerHTML = continente.texto;
    selectContinentes.appendChild(option);
  });
};

const cargaPais = async (nombrePais) => {
  let url = `https://restcountries.com/v3.1/name/${nombrePais}`;
  let pais = await cargaDatos(url);
  let bandera = document.querySelector("#bandera");
  let escudo = document.querySelector("#escudo");
  let mapa = document.querySelector("#mapa")

  document.querySelector("posicion-menu").innerHTML = pais[0].name.common;
  document.querySelector("posicion-capital").innerHTML = pais[0].capital;
  document.querySelector("posicion-poblacion").innerHTML = parseFloat(pais[0].population).toLocaleString("es")
  document.querySelector("posicion-position").innerHTML = pais[0].latlng[0];
  document.querySelector("posicion-positionlong").innerHTML = pais[0].latlng[1];
  document.querySelector("posicion-tecnicos").innerHTML = parseFloat(pais[0].area).toLocaleString("es")
  document.querySelector("posicion-tecnicoszona").innerHTML = pais[0].timezones;
  mapa = document.querySelector("posicion-map").innerHTML = pais[0].maps.googleMaps;




  if (pais[0].borders) {
    document.querySelector("posicion-geograficos").innerHTML = pais[0].borders;
  } else {
    document.querySelector("posicion-geograficos").innerHTML = "No tiene fronteras";
  }

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
    }


  });

  bandera.src = pais[0].flags.png;
  escudo.src = pais[0].coatOfArms.png;



  let div = document.querySelector("#enlace");
  let a = document.createElement("a");
  a.href = mapa;
  a.target = "_blank";
  a.innerHTML = "Mapa";
  div.appendChild(a);
};


let imagenes = document.querySelector("#banderas")
let generales = document.querySelector("#capitales")
let geograficos = document.querySelector("#geografia")
let tecnico = document.querySelector("#tecnico")


const visualizarBanderas = () => {

  tecnico.classList.remove("visible")
  tecnico.classList.add("invisible")
  imagenes.classList.add("visible")
  imagenes.classList.remove("invisible")
  generales.classList.add("invisible")
  generales.classList.remove("visible")
  geograficos.classList.add("invisible")
  geograficos.classList.remove("visible")

};

const visualizarGenerales = () => {

  tecnico.classList.remove("visible")
  tecnico.classList.add("invisible")
  imagenes.classList.add("invisible")
  imagenes.classList.remove("visible")
  generales.classList.add("visible")
  generales.classList.remove("invisible")
  geograficos.classList.add("invisible")
  geograficos.classList.remove("visible")

};

const visualizarGeografia = () => {

  tecnico.classList.remove("visible")
  tecnico.classList.add("invisible")
  imagenes.classList.add("invisible")
  imagenes.classList.remove("visible")
  generales.classList.add("invisible")
  generales.classList.remove("visible")
  geograficos.classList.add("visible")
  geograficos.classList.remove("invisible")

};

const visualizarTecnicos = () => {

  tecnico.classList.remove("invisible")
  tecnico.classList.add("visible")
  imagenes.classList.add("invisible")
  imagenes.classList.remove("visible")
  generales.classList.add("invisible")
  generales.classList.remove("visible")
  geograficos.classList.add("invisible")
  geograficos.classList.remove("visible")

};


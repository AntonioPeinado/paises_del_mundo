
const general = document.querySelector("#general");
const band = document.querySelector("#band");
const geogra = document.querySelector("#geogra");
const tecni = document.querySelector("#tecni");
const salir = document.querySelector("#salir");

const imagenes = document.querySelector("#banderas");
const generales = document.querySelector("#capitales");
const geograficos = document.querySelector("#geografia");
const tecnico = document.querySelector("#tecnico");

const bandera = () => {
  imagenes.classList.remove("visible");
  imagenes.classList.add("invisible");
}

const tecnicos = () => {
  tecnico.classList.remove("visible");
  tecnico.classList.add("invisible");
}

const gene = () => {
  generales.classList.remove("visible");
  generales.classList.add("invisible");
}

const geografico = () => {
  geograficos.classList.add("invisible");
  geograficos.classList.remove("visible");
}

band.addEventListener("click", () => {
  imagenes.classList.remove("invisible");
  imagenes.classList.add("visible");
  gene();
  tecnicos();
  geografico();
});


general.addEventListener("click", () => {
  generales.classList.add("visible");
  generales.classList.remove("invisible");
  tecnicos();
  geografico();
  bandera();
});

geogra.addEventListener("click", () => {
  geograficos.classList.add("visible");
  geograficos.classList.remove("invisible");
  tecnicos();
  bandera();
  gene();
});

tecni.addEventListener("click", () => {
  tecnico.classList.remove("invisible");
  tecnico.classList.add("visible");
  bandera();
  gene();
  geografico();

});
// let titulo = document.querySelector("title");
// let titulo = document.getElementById("title");
// let titulo = document.getElementsByTagName("h1");
// console.log(titulo);
// console.log(titulo[0].textContent);
// titulo[0].textContent = "Eso es un título desde JavaScript";
// if (false) {
//   titulo.textContent = "Es verdadero";
// } else {
//   // titulo[0].textContent = "Es Falso";
//   // titulo[0].style.color = "Red";
//   // titulo[0].style.fontSize = "50px"
//   titulo[0].classList.add("title");
// }

import { clientes } from "../model/clientes.js";

let listarClientes = document.getElementById("listarClientes");
console.log(listarClientes);
listarClientes.addEventListener("click", function () {
  clientes.map(function (index) {
    let cardCliente = document.createElement("div");
    cardCliente.classList.add("cliente-card");
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    let avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = index.nombre.split(" ").map((i)=> i[0]).join("")
    let badge = document.createElement("span");
    badge.classList.add("badge", "badge-activo");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let clienteNombre = document.createElement("h3");
    clienteNombre.classList.add("cliente-nombre");
    let clienteEmmpresa = document.createElement("p");
    clienteEmmpresa.classList.add("cliente-empresa");
    let clienteInfo = document.createElement("div");
    clienteInfo.classList.add("cliente-info");
    let infoItem = document.createElement("div");
    infoItem.classList.add("info-item");
    let infoIcon = document.createElement("span");
    infoIcon.classList.add("info-icon");
    let infoText = document.createElement("span");
    infoText.classList.add("info-text");
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    let btnDetalle = document.createElement("button");
    btnDetalle.classList.add("btn", "btn-primary");
    let btnContacto = document.createElement("button");
    btnContacto.classList.add("btn", "btn-secondary");

    cardFooter.append(btnDetalle, btnContacto)
    infoItem.append(infoIcon, infoText)
    clienteInfo.append(infoItem)
    cardBody.append(clienteNombre, clienteEmmpresa, clienteInfo)
    cardHeader.append(avatar, badge)
    cardCliente.append(cardHeader, cardBody,cardFooter)

    document.getElementById("clientes-grid").append(cardCliente)

  });
});

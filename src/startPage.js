import avatar from "../src/assets/img/avatar.png";
import { addNote } from "./utils";

const avatarImg = new Image();
avatarImg.src = avatar;
avatarImg.style.width = "1.6rem";
avatarImg.style.height = "auto";
avatarImg.style.borderRadius = "50%";

export function startPage() {
  const body = document.querySelector("body");

  //MODAL

  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  modalDiv.id = "modal";
  body.appendChild(modalDiv);

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalDiv.appendChild(modalHeader);

  const titleModal = document.createElement("div");
  titleModal.classList.add("title");
  titleModal.innerHTML = `Create new note`;
  modalHeader.appendChild(titleModal);

  const close = document.createElement("button");
  close.dataset.closeButton = "close";
  close.innerHTML = `&times`;
  modalHeader.appendChild(close);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalDiv.appendChild(modalBody);

  const overlayDiv = document.createElement("div");
  overlayDiv.id = "overlay";
  body.appendChild(overlayDiv);

  const content = document.createElement("div");
  content.classList.add("content");
  body.appendChild(content);

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");
  header.appendChild(leftContainer);

  const menu = document.createElement("span");
  menu.classList.add("material-symbols-outlined");
  menu.innerHTML = ` menu `;
  leftContainer.appendChild(menu);

  const home = document.createElement("span");
  home.classList.add("material-symbols-outlined");
  home.innerHTML = ` home `;
  leftContainer.appendChild(home);

  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");
  header.appendChild(rightContainer);

  const add = document.createElement("span");
  add.classList.add("material-symbols-outlined");
  add.innerHTML = `add`;
  rightContainer.appendChild(add);
  add.dataset.modalTarget = "#modal";
  add.classList.add("add");

  const help = document.createElement("span");
  help.classList.add("material-symbols-outlined");
  help.innerHTML = `help`;
  rightContainer.appendChild(help);

  const notif = document.createElement("span");
  notif.classList.add("material-symbols-outlined");
  notif.innerHTML = `notifications`;
  rightContainer.appendChild(notif);

  const avatar = document.createElement("div");
  avatar.appendChild(avatarImg);
  rightContainer.appendChild(avatar);

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  main.appendChild(sidebar);

  const h4InSidebar = document.createElement("h4");
  h4InSidebar.innerHTML = `Your Projects`;
  sidebar.appendChild(h4InSidebar);

  const ul = document.createElement("ul");
  sidebar.appendChild(ul);

  const p1 = document.createElement("li");
  p1.innerHTML = `Project 1`;
  ul.appendChild(p1);

  const rightMain = document.createElement("div");
  rightMain.classList.add("right-main");
  main.appendChild(rightMain);

  const info = document.createElement("div");
  info.classList.add("info");
  rightMain.appendChild(info);

  const notes = document.createElement("div");
  notes.classList.add("notes");
  rightMain.appendChild(notes);

  const h4InInfo = document.createElement("h4");
  h4InInfo.innerHTML = `Hover on note to see its description`;
  info.appendChild(h4InInfo);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `© 2022 Veanty`;
  content.appendChild(footer);

  // MODAL

  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal === null) return;

    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal === null) {
      return;
    }
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  const form = document.createElement("form");
  form.action = "";
  form.method = "POST";
  form.id = "myForm";
  form.onsubmit = function () {
    return false;
  };
  modalBody.appendChild(form);

  const field1 = document.createElement("div");
  field1.classList.add("field");
  form.appendChild(field1);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerHTML = "Note title";
  field1.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.id = "title";
  titleInput.required = true;
  field1.appendChild(titleInput);

  const field2 = document.createElement("div");
  field2.classList.add("field");
  form.appendChild(field2);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.innerHTML = "Due date";
  field2.appendChild(dueDateLabel);

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "dueDate";
  dueDateInput.id = "dueDate";
  dueDateInput.required = true;
  field2.appendChild(dueDateInput);

  const field3 = document.createElement("div");
  field3.classList.add("field");
  form.appendChild(field3);

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "desc");
  descLabel.innerHTML = "Description";
  field3.appendChild(descLabel);

  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.name = "desc";
  descInput.id = "desc";
  descInput.required = true;
  field3.appendChild(descInput);

  const field4 = document.createElement("div");
  field4.classList.add("field");
  form.appendChild(field4);

  const prioLabel = document.createElement("label");
  prioLabel.setAttribute("for", "prio");
  prioLabel.innerHTML = "Priority";
  field4.appendChild(prioLabel);

  const prioInput = document.createElement("input");
  prioInput.type = "number";
  prioInput.name = "prio";
  prioInput.id = "prio";
  prioInput.min = 1;
  prioInput.max = 10;
  prioInput.required = true;
  field4.appendChild(prioInput);

  const addNoteButton = document.createElement("button");
  addNoteButton.type = "submit";
  addNoteButton.textContent = "Add note";
  addNoteButton.addEventListener("click", addNote);
  form.appendChild(addNoteButton);
}

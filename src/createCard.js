export const createCard = (
  newNoteTitleValue,
  newNoteDescValue,
  newDueDateValue,
  newNotePrioValue
) => {
  const notes = document.querySelector(".notes");

  const card = document.createElement("div");
  card.classList.add("card");
  notes.appendChild(card);

  const cardMain = document.createElement("div");
  cardMain.classList.add("card-main");
  card.appendChild(cardMain);

  const title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = `${newNoteTitleValue} (${newNotePrioValue})`;
  cardMain.appendChild(title);

  const dueDate = document.createElement("div");
  dueDate.classList.add("dueDate");
  dueDate.innerHTML = newDueDateValue;
  cardMain.appendChild(dueDate);

  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.innerHTML = newNoteDescValue;
  card.appendChild(desc);
};

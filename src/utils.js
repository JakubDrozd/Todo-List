import { notesArray } from "./toDoClass";
import { toDo } from "./toDoClass";
import { createCard } from "./createCard";

export const deleteNote = (e) => {
  const index = notesArray.findIndex((note) => note.title === e.target.value);
  notesArray.splice(index, 1);
  localStorage.setItem("notesArray", JSON.stringify(notesArray));
  const parent = e.target.parentElement.parentElement.parentElement;
  parent.remove();
  console.log(notesArray);
};

export function addNote() {
  const newNoteTitle = document.querySelector("#title");
  const newDueDate = document.querySelector("#dueDate");
  const newNoteDesc = document.querySelector("#desc");
  const newNotePrio = document.querySelector("#prio");

  let newNoteTitleValue = newNoteTitle.value;
  let newDueDateValue = newDueDate.value;
  let newNoteDescValue = newNoteDesc.value;
  let newNotePrioValue = newNotePrio.value;

  if (
    (newNoteTitleValue === "") | (newDueDateValue === "") ||
    (newNoteTitleValue === "") | (newNotePrioValue === "") ||
    newNotePrioValue === ""
  ) {
    return;
  } else {
    const newNote = new toDo(
      newNoteTitleValue,
      newNoteDescValue,
      newDueDateValue,
      newNotePrioValue
    );
    notesArray.push(newNote);
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
    arraySort();
    const notes = document.querySelector(".notes");
    notes.replaceChildren();
    notesArray.forEach(function (note) {
      createCard(note.title, note.description, note.dueDate, note.priority);
    });
    console.log(notesArray);
  }
}

export const arraySort = () => {
  notesArray.sort(function (a, b) {
    let keyA = new Date(a.dueDate),
      keyB = new Date(b.dueDate);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
};

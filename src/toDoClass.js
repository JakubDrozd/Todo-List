export const projectsArray = [];
export const notesArray = [];

export class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

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
    console.log(notesArray);
  }
}

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
  console.log("works");
}

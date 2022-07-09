export function startPage() {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.classList.add("content");
  body.appendChild(content);

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);
  header.innerHTML = `Header`;

  const main = document.createElement("div");
  main.classList.add("main");
  content.appendChild(main);
  main.innerHTML = `Main`;
}

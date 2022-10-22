// ================================================================

//1
// Змініть стиль тексту абзацу за допомогою коду JavaScript
//
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>JS DOM paragraph style</title>
// </head>
// <body>
// <p id ='text'>JavaScript Exercises</p>
// <div>
//   <button id="jsstyle">Style</button>
// </div>
// </body>
// </html>
//
// При натисканні на кнопку буде змінено шрифт, розмір шрифту та колір тексту абзацу
// При наступному натисканні кнопки cтилі будуть знову змінюватись
// Після кожного кліку будуть підставлятись нові значення із масивів colors, fonts, fontSizes  послідовно

// const colors = ["gold", "green", "yellow", "blue", "black", "brown", "purple"];
// const fonts = [
//   "Arial",
//   "Roboto",
//   "Open Sans",
//   "Montserrat",
//   "Noto Sans",
//   "Raleway",
//   "Lato",
// ];
// const fontSizes = ["12px", "3rem", "15px", "4em", "24px", "48px", "8em"];

// const buttonEl = document.querySelector("#jsstyle");
// const textEl = document.querySelector("#text");
// console.log(buttonEl);

// buttonEl.addEventListener("click", onChangeStyles);
// let i = 0;

// function onChangeStyles() {
//   //   textEl.style.color = colors[i];
//   //   textEl.style.fontFamily = fonts[i];
//   //   textEl.style.fontSize = fontSizes[i];

//   textEl.style.cssText = `color: ${colors[i]}, font-family: ${onts[i]}, font-size: ${fontSizes[i]} `;

//   i += 1;

//   if (i === colors.length) {
//     i = 0;
//   }
// }

// ================================================================

//2
// Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх, вниз, вілво, вправо

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>Change the content of a cell</title>
// <style>
//   .cube {
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   background: green;
// }
// </style>
// </head>
// <body>
//
// <div class="cube" style="top: 0; left: 0;"></div>
// </body>
// </html>

// const cubeEl = document.querySelector(".cube");

// console.log(cubeEl);
// document.addEventListener("keydown", onChangePosition);

// function onChangePosition(evt) {
//   console.log(evt);
//   if (evt.code === "ArrowRight") {
//     cubeEl.style.left = `${parseInt(cubeEl.style.left) + 10}px`;
//   } else if (evt.code === "ArrowLeft") {
//     cubeEl.style.left = `${parseInt(cubeEl.style.left) - 10}px`;
//   } else if (evt.code === "ArrowUp") {
//     cubeEl.style.top = `${parseInt(cubeEl.style.top) - 10}px`;
//   } else if (evt.code === "ArrowDown") {
//     cubeEl.style.top = `${parseInt(cubeEl.style.top) + 10}px`;
//   }
// }

// ================================================================

////3
//// Напишіть функцію JavaScript для додавання рядків до таблиці.

// <!DOCTYPE html>
// <html>
// <head><meta charset=utf-8 />
//   <title>Insert row in a table</title>
// </head>
// <body>
// <table id="sampleTable" border="1">
//   <tr><td>Row1 cell1</td>
//     <td>Row1 cell2</td></tr>
//   <tr><td>Row2 cell1</td>
//     <td>Row2 cell2</td></tr>
// </table><br>
//   <input type="button" value="Insert row">
// </body>
// </html>

// const btnEl = document.querySelector("input");
// const tableEl = document.querySelector("#sampleTable");
// let counter = 0;

// btnEl.addEventListener("click", addString);

// function addString() {
//   const row = tableEl.insertRow(2);
//   counter += 1;

//   row.insertCell(0).textContent = `Row ${counter}`;
//   row.insertCell(1).textContent = `Row ${counter}`;
// }

// console.log(tableEl);

// ================================================================

//4
// // Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
//   <title>Remove items from a dropdown list</title>
// </head>
// <body>
// <form>
//   <select id="colorSelect">
//     <option>Red</option>
//     <option>Green</option>
//     <option>White</option>
//     <option>Black</option>
//   </select>
//   <input id="removeOption" type="button" value="Select and Remove">
//     <br/>
//     <br/>
//     <br/>
//     <label htmlFor="add">Add new option</label> <br/>
//     <input id="add" type="text" placeholder="New option">
//     <input id="addOption" type="button" value="Add option">
// </form>
// </body>
// </html>

// const selectEl = document.querySelector("#colorSelect");
// const selectBtn = document.querySelector("#removeOption");
// const inputEl = document.querySelector("#add");
// const addOption = document.querySelector("#addOption");

// selectBtn.addEventListener("click", onSelectRemove);

// function onSelectRemove() {
//   console.dir(selectEl);
//   selectEl.selectedOptions[0].remove();
// }

// addOption.addEventListener("click", onAddOption);

// function onAddOption() {
//   const option = document.createElement("option");
//   option.textContent = inputEl.value;
//   selectEl.appendChild(option);
//   inputEl.value = "";
// }

// ================================================================

//5
// Напишіть програму JavaScript TodoList для добавлення нових завдань у список

//<form>
// <label htmlFor="add">Add new task</label> <br/>
// <input id="add" type="text" placeholder="New task">
// <input id="addTask" type="button" value="Add task">

//<ul id="tasks"></ul>
//</form>

// const refs = {
//   button: document.querySelector("#addTask"),
//   addInput: document.querySelector("#add"),
//   taskList: document.querySelector("#tasks"),
// };

// refs.button.addEventListener("click", addTask);

// function addTask() {
//   const newTask = document.createElement("li");
//   newTask.textContent = refs.addInput.value;
//   refs.taskList.appendChild(newTask);
//   refs.addInput.value = "";
// }

// ================================================================

//6
// Напишіть програму JavaScript, щоб виділяти жирні слова (<strong>) наступного абзацу, наводячи курсор миші на посилання

// <head>
//   <meta charSet="UTF-8">
//     <title>Get And Style All Tags</title>
// </head>
// <body>
// <p>[<a href="#" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following
//   paragraph will be highlighted</a>]</p>
// <p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to
//   intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and
//   write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
// </body>
// const linkEl = document.querySelector("#link");
// const textEl = document.querySelector("#text");

// linkEl.addEventListener("mouseover", onLinkOver);
// linkEl.addEventListener("mouseout", onLinkOut);

// function onLinkOver() {
//   //   console.log("over");
//   changeColorStrong("green");
// }

// function onLinkOut() {
//   //   console.log("out");
//   changeColorStrong("black");
// }

// function changeColorStrong(color) {
//   const allStrongs = text.querySelectorAll("strong");
//   allStrongs.forEach((el) => {
//     el.style.color = color;
//   });
// }

// ================================================================

//7
// Напишіть програму на JavaScript, щоб отримати ширину та висоту вікна (щоразу, коли розмір вікна змінюється).
// Вивдіть ці значення на сторінку

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>Window Size : height and width</title>
// </head>
// <!-- Resize the window (here output panel) and see the result !-->
// <body onload="getSize()" onresize="getSize()">
// <div id="wh">
//   <!-- Place height and width size here! -->
// </div>
// <body>
// </body>
// </html>

// const box = document.querySelector("#wh");
// window.addEventListener("resize", onResize);

// function onResize() {
//   console.log(window);
//   const height = window.innerHeight;
//   const width = window.innerWidth;
//   box.textContent = `width: ${width}, height: ${height}`;
// }

// ================================================================

//8
// Делегування подій
// 1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
// 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// 3. Після перезавантаження сторінки активна комірка зберігається

// <style>
//   table {
//   margin: 0 auto;
//   border-collapse: collapse;
// }
//
//   td {
//   width: 30px;
//   height: 30px;
//   border: 1px solid #ccc;
//   cursor: pointer;
// }
//
//
//   .active {
//   background: #00e871;
// }
//
//
// </style>
//
// <body>
// <div class="board">
//   <table>
//     <tbody>
//     <tr style="display: block;">
//       <td className="active"></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     </tbody>
//   </table>
// </div>

// const boardEl = document.querySelector(".board");
// const tdEl = document.querySelector(".active");

// boardEl.addEventListener("click", onChangeColor);
// tdEl.addEventListener("click", onChangeColorTd);

// function onChangeColor(evt) {
//   console.log("tableFunction");
//   //   console.log("target", evt.target);
//   //   console.log("currentTarget", evt.currentTarget);
//   const currentEl = evt.target;
//   if (currentEl.tagName === "TD") {
//     currentEl.style.background = "green";
//   }
// }

// function onChangeColorTd(evt) {
//   evt.stopPropagation();
//   evt.target.style.background = "red";
//   console.log("tdFunction");
// }

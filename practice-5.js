// const form = document.querySelector('#message-form');
// const output = document.querySelector('#output');
// const LOCALSTORAGE_KEY = 'goit-example-message';

// updateOutput();
// form.addEventListener('submit', saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }

//==============================================================================

// Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

const selectEl = document.querySelector('#colorSelect');
const selectBtn = document.querySelector('#removeOption');

const inputEl = document.querySelector('#add');
const addOptionEl = document.querySelector('#addOption');

selectBtn.addEventListener('click', onSelectRemove);

function onSelectRemove() {
  console.dir(selectEl);

  selectEl.selectedOptions[0].remove();
}

addOptionEl.addEventListener('click', onAddOption);

function onAddOption() {
  const newEl = document.createElement('option');
  newEl.textContent = inputEl.value;

  selectEl.appendChild(newEl);
  inputEl.value = '';
}

//==============================================================================

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

//==============================================================================

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

//==============================================================================

// Напишіть програму JavaScript TodoList для добавлення нових завдань у список

// <form>
//   <label htmlFor="add">Add new task</label> <br/>
//   <input id="add" type="text" placeholder="New task">
//     <input id="addTask" type="button" value="Add task">
//
//       <ul id="tasks"></ul>
// </form>
//

//==============================================================================

// Напишіть функцію JavaScript для додавання рядків до таблиці.

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

//==============================================================================

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

// const colors = ['gold', 'green', 'yellow', 'blue', 'black', 'brown', 'purple'];
// const fonts = ['Arial', 'Roboto', 'Open Sans', 'Montserrat', 'Noto Sans', 'Raleway', 'Lato'];
// const fontSizes = ['12px', '3rem', '15px', '4em', '24px', '48px', '8em'];

//==============================================================================

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
// <div className="board">
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

//==============================================================================

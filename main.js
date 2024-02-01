/**
 * The shape of the Todo item
 * we stor
 *
 * @typedef {{
* id: number,
* title: string,
* isComplete: boolean,
* createdAt: Date,
* updatedAt: Date,
* }} Todo
*/

/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";

// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?

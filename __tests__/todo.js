/* eslint-disable no-undef */
const todoList = require("../index");

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Test the TodoList", () => {
  beforeAll(() => {
    add({
      title: "zero Task",
      dueDate: new Date().toISOString().split("T")[0],
      completed: false,
    });
  });
  test("add a new todo", () => {
    let len = all.length;
    add({
      title: "First Task",
      dueDate: new Date().toISOString().split("T")[0],
      completed: false,
    });
    expect(all.length).toBe(len + 1);
  });

  test("mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrive all todos which are overdue", () => {
    let arr = overdue();
    console.log(arr);
    expect(
      arr.every((todo) => {
        return todo.dueDate < new Date().toISOString().split("T")[0];
      })
    ).toBe(true);
  });

  test("retrive all todos which are due today", () => {
    let arr = dueToday();
    console.log(arr);

    expect(
      arr.every((todo) => {
        return todo.dueDate == new Date().toISOString().split("T")[0];
      })
    ).toBe(true);
  });

  test("retrive all todos which are dueLater", () => {
    let arr = dueLater();
    console.log(arr);

    expect(
      arr.every((todo) => {
        return todo.dueDate > new Date().toISOString().split("T")[0];
      })
    ).toBe(true);
  });
});

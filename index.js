/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  let today = new Date().toISOString().split("T")[0];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    return all.filter((todo) => {
      return todo.dueDate == today;
    });
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        return `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
          todo.dueDate === today ? "" : todo.dueDate
        }`.trim();
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

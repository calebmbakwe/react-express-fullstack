import { addNewTask, updateTask } from "./server";

(async () => {
  addNewTask({
    name: "My task",
    id: "12345"
  });

  updateTask({
    id: "12345",
    name: "The updated task"
  });
})();

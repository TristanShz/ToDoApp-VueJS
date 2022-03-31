import HomePage from "../HomePage";
import TodosPages from "../TodosPage";
import EditTodo from "../EditTodo";
export default [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/todos",
    component: TodosPages,
  },
  {
    path: "/edit/:id",
    component: EditTodo,
    name: "edit",
  },
];

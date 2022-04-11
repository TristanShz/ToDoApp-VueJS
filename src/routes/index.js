import HomePage from "../pages/HomePage";
import TodosPages from "../pages/TodosPage";
import EditTodo from "../pages/EditTodo";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
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
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

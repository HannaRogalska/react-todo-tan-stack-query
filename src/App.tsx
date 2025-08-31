import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() => import('./components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TodoPage = lazy(() => import('./pages/TodoPage/TodoPage'));
const FormPage = lazy(()=>import('./pages/FormPage/FormPage'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
    </Routes>
  );
}

export default App;

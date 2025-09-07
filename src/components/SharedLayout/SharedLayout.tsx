import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex  justify-between items-center p-[30px]">
        <img
          className="w-[40px]"
          src="https://cdn-icons-png.freepik.com/256/13077/13077693.png?semt=ais_white_label"
        ></img>
        <ul className="flex justify-between items-center gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
        </ul>
      </header>
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="p-2">
        <span>© 2025 Todo App</span>
      </footer>
    </div>
  );
};

export default SharedLayout;

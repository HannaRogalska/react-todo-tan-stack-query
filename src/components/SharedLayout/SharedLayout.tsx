import { Suspense } from "react"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return (
    <div>
      <header></header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}

export default SharedLayout

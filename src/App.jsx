import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from "./pages/About"
import HeroSection from "./pages/Home"

const router= createBrowserRouter([
  {
    path: '/',
    element: <HeroSection />,
  },
  {
    path: '/about',
    element: <About />,
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>     
    </>
  )
}

export default App

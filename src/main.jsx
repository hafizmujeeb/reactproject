import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Router, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import About from './components/about/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
const router = createBrowserRouter([
  { 
    path : "/",
    element: <Layout/>,
    children :[ 
      {
      path: "",
      element: <home />,
    },
    {
      path: "About",
      element: <About/>
    },
    {
      path: "Contact",
      element: <Contact/>
    },
    {
      path: "User/:userid",
      element: <User/>
    },
    {
      path: "Github",
      element: <Github/>
    }
  ]

}
])


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path= '/' element= {<Layout/>}>
//       <Route path= '' element= {<home/>}/>
//       <Route path= 'About' element= {<About/>}/>
//       <Route path= 'Contact' element= {<Contact/>}/>
//       <Route path= 'User/:userid' element= {<User/>}/>
//       </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

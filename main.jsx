import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import User from './User.jsx'
import About from './About.jsx'
import Contact from './contact.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.jsx'
const Router=createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/user',element:<User/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>}



])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<RouterProvider router={Router}/>
    </Provider>

)

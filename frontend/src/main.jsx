import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Home from './components/Home.jsx'
import Features from './components/Features.jsx'
import Gallery from './components/Gallery.jsx'
import FAQ from './components/Faq.jsx'
import Create from './components/Create.jsx'
import TextToImage from './components/TextToImage.jsx'
import ImageToImage from './components/ImageToImage.jsx'


const browser=createBrowserRouter([
  { 
    path:'',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/create',
        element:<Create/>,
      
      },
      {
            path:'/text',
            element:<TextToImage/>
          },{
            path:'/image',
            element:<ImageToImage/>
          },
      {
        path:'/features',
        element:<Features/>
      },
      {
        path:'/gallery',
        element:<Gallery/>
      },
      {
        path:'/faq',
        element:<FAQ/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browser}/>
    
  </StrictMode>,
)


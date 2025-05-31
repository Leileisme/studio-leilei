import { Navigate } from "react-router-dom"

import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import WorksPage from "../pages/WorksPage"
import ServicesPage from "../pages/ServicesPage"
import BlogPage from "../pages/BlogPage"
import NotFound from "../pages/NotFound"

import FrontLayout from "../layouts/FrontLayout"

const routes = [
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
        title: '首頁｜Home'
      },
      {
        path: 'about',
        element: <AboutPage />,
        title: '關於我｜About'
      },
      {
        path: 'works',
        element: <WorksPage />,
        title: '作品總覽｜Works'
      },
      {
        path: 'services',
        element: <ServicesPage />,
        title: '接案服務｜Services'
      },
      {
        path: 'blog',
        element: <BlogPage />,
        title: '部落格｜Blog'
      },
    ]
  },
  
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
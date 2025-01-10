import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CustomerReviews from '../components/CustomerReviews'
import BestProducts from '../components/BestProducts'
import Why from '../components/Why'
import Review from '../components/Review'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <>
            <Navbar />
            <Hero />
            <Review />
            <WhyChooseUs />
            <CustomerReviews />
            <BestProducts />
            <Why />
            <Footer />
          </>
        ),
      },
      {
        path: 'Contact',
        element: <Contact />,
      },

      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
])

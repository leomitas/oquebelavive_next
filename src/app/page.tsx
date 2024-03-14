import AboutMe from '@/components/AboutMe'
import AboutTheProducts from '@/components/AboutTheProducts'
import Contacts from '@/components/Contacts'
import FeedInstagram from '@/components/FeedInstagram'
import Footer from '@/components/Footer'
import Products from '@/components/Products'

export default function Home() {
  return (
    <>
      <AboutMe />
      <Products />
      <FeedInstagram />
      <Contacts />
      <Footer />
    </>
  )
}

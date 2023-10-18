
import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Container from '@/components/Container'
import MyServics from '@/components/MyServics'
import Image from 'next/image'


export default function Home() {
  return (
    <main >
      <Container>
        <Banner />
        <AboutMe />
        <MyServics />
      </Container>
    </main>
  )
}

import type { NextPage } from 'next'
import IntroBanner from '@components/molecules/IntroBanner/IntroBanner'
import Card from '@components/molecules/Card/Card'
import AdBanner from '@components/organisms/AdBanner/AdBanner'

const Home: NextPage = () => {
  return (
    <>
      <IntroBanner />
      <AdBanner />
    </>
  )
}

export default Home

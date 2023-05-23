import type { NextPage } from 'next'
import IntroBanner from '@components/molecules/IntroBanner/IntroBanner'
import AdBanner, { AdBannerProps } from '@components/organisms/AdBanner/AdBanner'
import { IMAGES } from '@styles/images'

const Home: NextPage = () => {
  const props = {
    cards: [{ card: { image: IMAGES.TEST1 } }, { card: { image: IMAGES.TEST2 } }, { card: { image: IMAGES.TEST3 } }],
  } as AdBannerProps

  return (
    <>
      <IntroBanner />
      <AdBanner {...props} />
    </>
  )
}

export default Home

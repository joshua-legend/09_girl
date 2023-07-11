import IntroBannerView from '@components/molecules/IntroBanner/IntroBannerView'

export type IntroBannerProps = {
  storeName?: string
}

const IntroBanner = (props: IntroBannerProps) => {
  return <IntroBannerView {...props} />
}

export default IntroBanner

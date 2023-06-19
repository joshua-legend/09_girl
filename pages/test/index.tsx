import type { NextPage } from 'next'

interface ParamsProps {
  id: string
}

const Index: NextPage<ParamsProps> = ({ id }: ParamsProps) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>You are currently viewing store with id: {id}</p>
    </div>
  )
}

export async function getServerSideProps(context: { params: ParamsProps }) {
  return {
    props: { id: 123 }, // will be passed to the page component as props
  }
}

export default Index

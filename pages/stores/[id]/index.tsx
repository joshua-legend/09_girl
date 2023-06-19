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
  const { id } = context.params
  return {
    props: { id }, // will be passed to the page component as props
  }
}

export default Index

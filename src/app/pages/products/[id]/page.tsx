import React from 'react'

interface ProductsPage {
  params: {
    id: any
  }
}

const Page = ({params: {id}}: ProductsPage) => {
  return (
    <div>{id}</div>
  )
}

export default Page
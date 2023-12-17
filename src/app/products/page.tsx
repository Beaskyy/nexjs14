import Link from "next/link"

const Products = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Products lists!</h1>
      <Link href={`products/1`}>Product 1</Link>
      <Link href={`products/2`}>Product 2</Link>
      <Link href={`products/3`}>Product 3</Link>
    </div>
  )
}

export default Products
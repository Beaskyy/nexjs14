import Link from "next/link";
import "./styles/global.css"

const Home = () => {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/blogs">Blogs</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;

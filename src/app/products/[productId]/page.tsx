import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = ({ params}: Props): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

const ProductId = ({ params }: Props) => {
  return <div>ProductId with id {params.productId}</div>;
};

export default ProductId;

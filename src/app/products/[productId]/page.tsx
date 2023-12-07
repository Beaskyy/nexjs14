const ProductId = ({ params }: { params: { productId: string } }) => {
  return <div>ProductId with id {params.productId}</div>;
};

export default ProductId;

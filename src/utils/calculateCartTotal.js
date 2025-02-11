const calculateCartTotal = (cartLitst) => {
    return cartLitst.reduce((acc, curr) => acc + curr.price * curr.orderQuantity, 0);
};

export default calculateCartTotal;
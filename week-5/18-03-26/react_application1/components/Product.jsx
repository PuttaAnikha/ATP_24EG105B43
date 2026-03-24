function Product(props){//{productsObj:{}}
    const {productObj}=props;
    //state
    //return  a react element
    return(
        <div className="shadow-md bg-gradient-to-r from-slate-500 to-slate-600">
            <h2 className="text-2xl">{productObj.title}</h2>
            <p className="text-amber-50">{productObj.price}</p>
            <p className="text-1xl">{productObj.description}</p>
        </div>
    )
}
export default Product;
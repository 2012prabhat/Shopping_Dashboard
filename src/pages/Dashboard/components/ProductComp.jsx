import ProductTable from "./ProductTable";
const ProductComp = ()=>{
    return <>
        <div className="proDashCont">
            <div style={{fontSize:'2em'}}>Best Selling products</div>
            <br />
            <ProductTable/>
        </div>
    </>
}


export default ProductComp;
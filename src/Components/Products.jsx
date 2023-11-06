
import Product from "./Product";
function Products({produits}) {
    return (
      <div className="container">
        <div className="row">
          {
            produits.map((produit, index)=>{
              return <Product key={index} data={produit} />
            })
          }
        </div>
      </div>
    )
}
export default Products;
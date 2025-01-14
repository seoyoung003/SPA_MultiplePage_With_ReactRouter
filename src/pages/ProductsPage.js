import { Link } from "react-router-dom";

const PRODUCTS = [ //더미 데이터터
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
]

function ProductsPage() {
 return (
    <>
     <h1>The products page</h1>
     <ul>
        {PRODUCTS.map((product) => (
            <li key={product.id}><Link to={product.id}>{product.title}</Link></li> //백틱문자를 이용해서 동적으로 설정정
        ))}

     </ul>


    </>
 )
 
 
}

export default ProductsPage;
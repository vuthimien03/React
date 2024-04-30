import useProductQuery from "../Hook/useProductQuery";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const { data: product } = useProductQuery(id ? parseInt(id) : undefined);
    if (!product) {
        return <div>Loading...</div>;
    }

    
    return (
        <div className="product-details">
            <h2>Chi tiết sản phẩm</h2>
            <div className="card" style={{ width: 300 }}>
                <img src={product.img} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
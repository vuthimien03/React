import { IProduct } from "../interface/name";
import useProductQuery from "../Hook/useProductQuery";
import { Link } from "react-router-dom";
import { useShoppingContext } from "../context/CartContext";

const Home = () => {
    const { data: products } = useProductQuery();
    const { addCartItem } = useShoppingContext();
    return (
        <div>
            <div className="container">
                <img className="img" src="src/img/Head-section.jpg" alt="" />
            </div>


            <div className="box1">
                <div className="box1-title">
                    <h1>long established</h1>
                    <p>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that....</p>
                    <div className="date">
                        <div>May 20th 2020</div>
                        <div className="">Read more</div>
                    </div>
                </div>
                <div className="box1-img">
                    <img src="src/img/image 1.jpg" alt="" />
                </div>

            </div>
            <div className="box2-Card">
                {products?.map((item: IProduct, index: number) => (
                    <div key={index}>


                        <div className="crad">
                            <div className="card" style={{ width: 18 }} />
                            <Link to={`/product/${item.id}`} key={item.id}>
                                <img src={item.img} className="card-img-top" alt="" />
                            </Link>

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.desc}</p>
                                <div className="date-card" >
                                    <div>May 20th 2020</div>
                                    <div className="add-cart"><button onClick={() => addCartItem(item)} type="button" className="btn btn-success">add cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="box3">
                <div className="box3_titel">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <ul>
                        <li>May 20</li>
                        <li>Read more</li>
                    </ul>
                </div>
                <div className="box3_img">
                    <img src="src/img/image 7.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;
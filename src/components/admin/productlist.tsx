import useProductQuery from "../../Hook/useProductQuery";
import { useProductMutation } from "../../Hook/useProductMutation";
import { IProduct } from "../../interface/name";
import { Link } from "react-router-dom";


const Productlist = () => {
    const { data: products } = useProductQuery();
    const { mutate } = useProductMutation({ action: "DELETE" });

    return (
        <div className="container-table">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">img</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">desc</th>
                        <th>
                            <a href="/admin/add"><button type="button" className="btn btn-success" >add product</button></a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item: IProduct, index: number) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td><img style={{ width: 150 }} src={item.img} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td style={{ width: 300 }}>{item.desc} </td>
                            <td>
                                <button onClick={() => mutate(item)} type="button" className="btn btn-danger">delete</button>
                                <Link to={`/admin/${item.id}/edit`}><button type="button" className="btn btn-warning">edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Productlist;

import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductContext } from "../../context/ProductContextProvider";
import { IProduct } from "../../interface/name";
import axios from "axios";

type FormValue = {
    name: string;
    img: string;
    price: number;
    desc: string;
};

const Editproduct = () => {
    const { products, dispatch } = useContext(ProductContext);

    const onHandleEdit = async (product: IProduct) => {
        try {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            // rerender
            dispatch({ type: "edit_PRODUCT", payload: data });

        } catch (error) { }
    };

        const { id } = useParams();
        const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
        } = useForm<FormValue>();

        const navigate = useNavigate();

        useEffect(() => {
            (async () => {
                const { data } = await axios.get(`http://localhost:3000/products/${id}`);
                reset(data);
            })();
        }, [id]);
        const onSubmit: SubmitHandler<FormValue> = (data) => {
            // console.log(data);
            onHandleEdit(data);
            navigate("/admin");
        };

        return (
            <div className="container_add">
                <h1>Edit product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">img</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" {...register("img")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" {...register("price")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">desc</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" {...register("desc", { required: true })} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    
}

export default Editproduct;
import React, { useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../../interface/name";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import axios from "axios";


type FormValue = {

    name: string;
    img: string;
    price: number;
    desc: string;
};

const ProductAdd = () => {
    const { products, dispatch } = useContext(ProductContext);

    const onHandleAdd = async (product: IProduct) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            // rerender
            dispatch({ type: "ADD_PRODUCT", payload: data });
            
        } catch (error) { }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        onHandleAdd(data);
        navigate("/admin");
    };


    return (
        <div className="container_add">
            <h1>Add product</h1>
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
                <a className="btn btn-primary" style={{margin:20}} href="/admin" role="button"> admin</a>

            </form>
        </div>
    )
}

export default ProductAdd;
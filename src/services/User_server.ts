import axiosInstance from "../config/axios";
import { IProduct } from "../interface/name";
import { useState } from "react";
import axios from "axios";
import { IUser } from "../interface/IUser";

export const createUser = async (user: IProduct) => {
    try {
        const { data } = await axiosInstance.post(`/User`, user);
        return data;
    } catch (error) {
        console.log(error)
    }
}

const useLogin = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.get<IUser[]>(`http://localhost:3000/User`, {
                params: { email, password }
            });
            setUser(response.data[0]);
            setError(null);
            return response.data[0];
        } catch (error) {
            setUser(null);
            setError("Invalid email or password");
        }
    };

    return { user, error, login };
};

export default useLogin;

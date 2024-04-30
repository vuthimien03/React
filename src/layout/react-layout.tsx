// import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

// interface IProps{
//     children: ReactNode
// }
// const ClientLayout:FC<IProps> = (Props) => {
//         const{} = Props
//     return (
//         <>
//             <Header />
//             {Props.children}
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </>
//     )
// }

const ClientLayout = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default ClientLayout;
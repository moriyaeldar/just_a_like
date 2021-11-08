import { FC } from "react";
import "../../styles/layout.css";
import Sidebar from "../../general/Sidebar/Sidebar";
import Header from "../../general/components/app-header";
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props) => (
  <div className="layout">
    <Sidebar />
    <Header/>
    <main>{props.children}</main>
  </div>
);

export default Layout;

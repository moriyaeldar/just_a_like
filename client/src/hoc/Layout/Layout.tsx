import { FC } from "react";
import "../../styles/layout.css";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props) => (
  <div className="layout">
    <Sidebar />
    <main>{props.children}</main>
  </div>
);

export default Layout;

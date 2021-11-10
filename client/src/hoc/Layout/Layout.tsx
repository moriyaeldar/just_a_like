import { FC } from "react";
import Sidebar from "../../general/Sidebar/Sidebar";
import { Header } from "../../general/components/app-header";
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = (props) => (
  <div className="layout">
    <div className="main">
      <Header />
      <main>{props.children}</main>
    </div>
    <Sidebar />
  </div>
);

export default Layout;

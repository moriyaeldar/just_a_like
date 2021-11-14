import { FC } from "react";
import Sidebar from "../../general/Sidebar/Sidebar";
import  Header  from "../../general/components/app-header";
interface Props {
  children: React.ReactNode;
  onLogoutClick: any;
  headerModal: boolean;
  handleHeaderModal: any;
  pageName: string;
}

const Layout: FC<Props> = (props) => (
  <div className="layout">
    <div className="main">
      <Header 
      isModalOpen={props.headerModal}
      handleModal={props.handleHeaderModal}
      page={props.pageName}/>
      <main>{props.children}</main>
    </div>
    <Sidebar onLogoutClick={props.onLogoutClick} />
  </div>
);

export default Layout;

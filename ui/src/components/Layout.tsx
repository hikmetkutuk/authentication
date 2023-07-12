import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
      <Header />
    </>
  );
}
export default Layout;

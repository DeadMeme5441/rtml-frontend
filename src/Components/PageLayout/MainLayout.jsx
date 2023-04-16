import SideBar from "./SideBar"


const MainLayout = () => {

  return (
    <div className="relative">
      <div className="fixed top-0 left-0">
        <SideBar />
      </div>
    </div>
  )
};

export default MainLayout;

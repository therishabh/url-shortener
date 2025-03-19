import Header from "@/components/header";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="">
      <main className="min-h-screen container m-auto">
        {/* header */}
       <Header/>
        {/* header */}

        {/* body */}
        <Outlet />
        {/* body */}
      </main>

      {/* footer */}
      <footer className="p-10 text-center bg-gray-800 mt-10 text-yellow-100">footer</footer>
      {/* footer */}
    </div>
  );
};

export default AppLayout;

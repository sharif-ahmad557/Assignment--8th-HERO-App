import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />

      {/* ✅ Page Navigation Loading Spinner */}
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="w-16 h-16 border-4 border-t-[#00d491] border-gray-300 rounded-full animate-spin"></div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[60vh]">
              <div className="w-16 h-16 border-4 border-t-[#00d491] border-gray-300 rounded-full animate-spin"></div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;

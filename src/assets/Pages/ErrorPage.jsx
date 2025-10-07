import React from "react";
import { useRouteError } from "react-router";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Header></Header>
      <div>{error.message}</div>;<Footer></Footer>
    </>
  );
};

export default ErrorPage;

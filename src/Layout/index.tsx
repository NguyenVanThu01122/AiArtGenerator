import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { saveUser } from "../redux/Actions/app";
import { privateAxios } from "../service/axios";
import { WrapperLayout } from "./styles";

export function Layout() {
  const login = useSelector((state: any) => state.app.login);
  const dispatch = useDispatch();
  // lấy user

  useEffect(() => {
    if (login) {
      privateAxios
        .get("/user/profile")
        .then((res) => {
          dispatch(saveUser(res.data?.data));
        })
        .catch((error) => {});
    }
  }, [login]);

  return (
    <WrapperLayout>
      <div className="box-content">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="parent-content">
            <Outlet />
          </div>
        </div>
      </div>
    </WrapperLayout>
  );
}

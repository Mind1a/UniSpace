import React from "react";
import {
  SContainer,
  SHeader,
  SMain,
  SSideBar,
  SFooter,
  SFooterLines,
} from "./Layout.styled";
import { FourthHeader } from "../Headers/FourthHeader";
import { SecondHeader } from "../Headers/SecondHeader";
import { Footer } from "../Footer";
import { SideBar } from "../SideBar";
import { useLocation } from "react-router-dom";
import { ThirdHeader } from "../Headers/ThirdHeader";
import { Header } from "../Headers/Header";

export const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <SContainer>
      <SHeader>
        <div className="header">
          {pathname === "/" ? (
            <ThirdHeader />
          ) : pathname === "/authentication" ||
            pathname === "/recovery-password" ? (
            <Header />
          ) : pathname === "/registration" || pathname === "/privacy-policy" ? (
            <SecondHeader />
          ) : (
            <FourthHeader />
          )}
        </div>
        <div className="line" />
      </SHeader>

      <SMain>{children}</SMain>

      <SSideBar>
        <SideBar />
      </SSideBar>

      <SFooter>
        <SFooterLines>
          <div>
            <span className="line" />
            <span className="circle" />
          </div>
          <div>
            <span className="circle" />
            <span className="line" />
          </div>
        </SFooterLines>
        <div className="footer">
          <Footer />
        </div>
      </SFooter>
    </SContainer>
  );
};

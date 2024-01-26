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

  const headerMap = {
    "/": <ThirdHeader />,
    "/authentication": <Header />,
    "/recovery-password": <Header />,
    "/registration": <SecondHeader />,
    "/privacy-policy": <SecondHeader />,
  };

  const getHeader = (pathname) => {
    return headerMap[pathname] || <FourthHeader />;
  };

  const sidebarPathnames = [
    "/student-list",
    "/add-questions",
    "/answer-questions",
    "/upload-project",
    "/upload-project-admin",
    "/portfolio",
    "/project",
  ];

  console.log(pathname);

  return (
    <SContainer>
      <SHeader>
        <div className="header">{getHeader(pathname)}</div>
        {pathname !== "/authentication" &&
          pathname !== "/recovery-password" && <div className="line" />}
      </SHeader>

      <SMain>
        <main>{children}</main>
      </SMain>

      {sidebarPathnames.includes(pathname) && (
        <SSideBar>
          <SideBar />
        </SSideBar>
      )}

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

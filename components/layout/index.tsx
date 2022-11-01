import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement[] | ReactElement }) => {
  return (
    <div className="max-w-screen-xl h-screen mx-auto transition-all">
      {children}
      <div className="h-20 w-full"></div>
    </div>
  );
};

export default Layout;

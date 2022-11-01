import type { NextPage } from "next";
import { Header, Info, People } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Info />
      <People />
    </div>
  );
};

export default Home;

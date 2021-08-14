import { NextPage } from "next";
import { RecoilButton } from '../components/Count/Button/Button';
import { RecoilDisplayCount } from '../components/Count/Display/Display';

const Home: NextPage = () => {
  return (
      <>
        <h1>Hello</h1>
        <RecoilButton />
        <RecoilDisplayCount />
      </>
  );
};

export default Home;

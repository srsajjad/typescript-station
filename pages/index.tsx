import type { NextPage } from "next";
import { Card } from "components";
import { store } from "store/store";
import { Provider } from "react-redux";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <Card />
      </Provider>
    </div>
  );
};

export default Home;

import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Features from "../components/Features";
import Head from "../components/Head";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Head />
      <Banner />
      <Features title="Why Us?" subTitle="Why you should shop here" />
      <Featured
        title="This week's best"
        subTitle="Most purchased items this week"
      />
      <Announcement title="Mobile App" subTitle="Download our mobile app" />
    </Layout>
  );
};

export default Home;

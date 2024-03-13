//import { useGetData } from '../../../store/data/portfolioActions';
//import { isSuccess } from '../../../common/serviceUtil';
import './Home.scss';

export interface IHomeProps {}

const Home = (props: IHomeProps) => {
  // Example using a store
  //const state = useGetData(1);
  //const data = state.data && isSuccess(state.data) ? state.data.value : undefined;
  // because ChildComponent1 is only one level deep we can pass event by prop (using propdrilling no need for a store)

  //if (!data || state.isLoading) return <p>Loading...</p>;

  return (
    <section className="home">
      <h1>HOME</h1>
      <hr />
    </section>
  );
};

export default Home;

import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Home</h2>
      <div className="content">
        <section>
          <h4>
            <Arrow /> Tasks Due Soon
          </h4>
        </section>
        <section>
          <h4>
            <Arrow /> Favorits
          </h4>
        </section>
        <section>
          <h4>
            <Arrow /> Recent Projects
          </h4>
        </section>
      </div>
    </div>
  );
};

import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <>
      <section className="team" id="team">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">OUR TEAM</h1>
            <p>
              Our team consists of highly skilled professionals who are
              dedicated to providing the best possible experience for our users.
              Each team member brings their unique skills and expertise to the
              table, ensuring that our products and services are of the highest
              quality.
            </p>
          </div>

          <div className="team_container">
            {data[0].team.map((element) => {
              return (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.name} />
                  <h3>{element.name}</h3>
                  <p>{element.designation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

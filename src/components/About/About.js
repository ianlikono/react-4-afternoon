import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Contact from "../Contact/Contact";
import History from "../History/History";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about">
            <h3 className="subnav_links">About</h3>
          </Link>
          <Link to="/about/history">
            <h3 className="subnav_links">History</h3>
          </Link>
          <Link to="/about/contact">
            <h3 className="subnav_links">Contact</h3>
          </Link>
        </div>
        <div className="box" />
        <Switch>
          <Route path="/about/history" component={History} />
          <Route path="/about/contact" component={Contact} />
          <Route
            path="/about"
            render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  quis minima commodi dicta quaerat nesciunt maiores
                  necessitatibus fugit sit id itaque quos, nulla accusamus, quod
                  perspiciatis assumenda impedit natus alias aperiam veniam
                  dolore aliquid! Odit temporibus vitae eveniet, corporis
                  repudiandae quas exercitationem sequi earum, eius aspernatur
                  quibusdam, eum magni tempora. Aspernatur laboriosam rerum
                  alias totam praesentium quidem blanditiis at itaque
                  consequuntur, incidunt quo quod? Nam qui similique maiores
                  molestiae libero minima, vel harum? Dolorum ducimus dolor
                  cumque modi distinctio deserunt aspernatur itaque, labore
                  eaque doloremque. Voluptatum, fugit! Accusantium ullam laborum
                  in quia nobis, maxime voluptate enim similique tempore totam
                  doloremque!
                </p>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

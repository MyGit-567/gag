import React from "react";

class TopRated extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      name: "",
      path: "",
      alt: "",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <form>
          <input type="text" placeholder="Your name" value={this.state.name} required />
          <input type="text"  placeholder="Meme title" value={this.state.title} required />
        </form>
        <div>
          <img className="img" src={this.state.path} alt="" />
          <h1>{this.state.name}</h1>
          <h1>{this.state.title}</h1>
        </div>
      </div>
    );
  }
}

export default TopRated;

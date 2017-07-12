import React from "react";

class ListingInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addBarOpen: false, value: "" };
    this.toggleAddBar = this.toggleAddBar.bind(this);
    this.renderAdd = this.renderAdd.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderPlaceholder = this.renderPlaceholder.bind(this);
  }

  toggleAddBar(e) {
    e.preventDefault();
    this.setState({ addBarOpen: !this.state.addBarOpen });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    switch (this.props.mode) {
      case "YOUTUBE":
        this.props.followYoutubeChannel(this.state.value);
        break;
      case "REDDIT":
        this.props.followSubreddit(this.state.value);
        break;
      case "TWITCH":
        break;
      default:
        break;
    }

    this.setState({ value: "" });
  }

  renderAdd() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={`listing-information ${this.props.mode.toLowerCase()}`}
      >
        <div className="input-group">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="add-listing"
            placeholder={this.renderPlaceholder()}
          />
          <div className="focus-bar" />
        </div>
        <button>ADD</button>
        <i onClick={this.toggleAddBar} className="ion-close" />
      </form>
    );
  }

  renderPlaceholder() {
    switch (this.props.mode) {
      case "YOUTUBE":
        return "Username or ID";
      case "REDDIT":
        return "Subreddit";
      case "TWITCH":
        return "Username";
      default:
        return "";
    }
  }

  renderDelete() {
    return (
      <div className={`listing-information ${this.props.mode.toLowerCase()}`}>
        {this.props.mode === "REDDIT" ? "DELETE SUBREDDITS" : "DELETE CHANNELS"}
        <div>
          <i onClick={this.props.toggleDeleteMode} className="ion-close" />
        </div>
      </div>
    );
  }

  renderDefault() {
    return (
      <div className={`listing-information ${this.props.mode.toLowerCase()}`}>
        {this.props.mode === "REDDIT" ? "SUBREDDITS" : "CHANNELS"}
        <div>
          <i onClick={this.props.toggleDeleteMode} className="ion-minus" />
          <i onClick={this.toggleAddBar} className="ion-plus" />
        </div>
      </div>
    );
  }

  render() {
    if (this.state.addBarOpen) {
      return this.renderAdd();
    } else if (this.props.deleteMode) {
      return this.renderDelete();
    } else {
      return this.renderDefault();
    }
  }
}

export default ListingInformation;

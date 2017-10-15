// @flow

import React from "react";

type Props = {
  mode: string,
  followYoutubeChannel: Function,
  followSubreddit: Function,
  followTwitchChannel: Function,
  toggleDeleteMode: Function,
};

type State = {
  addBarOpen: boolean,
  value: string,
};

class ListingInformation extends React.Component<Props, State> {
  toggleAddBar: Function;
  renderAdd: Function;
  renderDefault: Function;
  handleSubmit: Function;
  handleChange: Function;
  renderDelete: Function;
  renderPlaceholder: Function;
  focusInput: Function;

  constructor(props: Object) {
    super(props);
    this.state = { addBarOpen: false, value: "" };
    this.toggleAddBar = this.toggleAddBar.bind(this);
    this.renderAdd = this.renderAdd.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderPlaceholder = this.renderPlaceholder.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput(node: Object) {
    if (node) {
      node.focus();
    }
  }

  toggleAddBar(e: Object) {
    e.preventDefault();
    this.setState({ addBarOpen: !this.state.addBarOpen });
  }

  handleChange(e: Object) {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
  }

  handleSubmit(e: Object) {
    e.preventDefault();
    switch (this.props.mode) {
      case "youtube":
        this.props.followYoutubeChannel(this.state.value);
        break;
      case "reddit":
        this.props.followSubreddit(this.state.value);
        break;
      case "twitch":
        this.props.followTwitchChannel(this.state.value);
        break;
      default:
        break;
    }

    this.setState({ value: "", addBarOpen: false });
  }

  renderAdd() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={`listing-information ${this.props.mode}`}
      >
        <div className="input-group">
          <input
            ref={this.focusInput}
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
      case "youtube":
        return "Username or ID";
      case "reddit":
        return "Subreddit";
      case "twitch":
        return "Username";
      default:
        return "";
    }
  }

  renderDelete() {
    return (
      <div className={`listing-information ${this.props.mode}`}>
        {this.props.mode === "reddit" ? "DELETE SUBREDDITS" : "DELETE CHANNELS"}
        <div>
          <i onClick={this.props.toggleDeleteMode} className="ion-close" />
        </div>
      </div>
    );
  }

  renderDefault() {
    return (
      <div className={`listing-information ${this.props.mode}`}>
        {this.props.mode === "reddit" ? "SUBREDDITS" : "CHANNELS"}
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

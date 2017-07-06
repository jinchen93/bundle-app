import React, { Component } from "react";
import Channel from "../components/channel";
import { ListGroup } from "react-bootstrap";
import { SidebarForm, SidebarList } from "../../app/components/sidebar/modules";
import "../styles/channels.css";

const Channels = props => {

  const channels = props.channels;
  
  const onSelectClick = position => {
    props.selectChannel(position);
    props.fetchVideos(channels.all[position]);
    props.selectVideo(0);
  };
  
  const onDeleteClick = (id, position) => {
    props.deleteChannel({
      id: id,
      csrf_token: props.user.csrf_token,
    });
    if (position === channels.current) {
      if (position === channels.all.length - 1) {
        props.selectChannel(0);
        props.fetchVideos(channels.all[0]);
      } else {
        props.selectChannel(position);
        props.fetchVideos(channels.all[position + 1]);
      }
    }
  };

  return (
    <SidebarList
      sidebarHidden={props.sidebarHidden}
      navbarToggle={props.navbarToggle}
    >
      <div className="sidebar__wrapper__header">
        <h2>CHANNELS</h2>
      </div>
      <ListGroup>
        {channels.all.map(channel => (
          <Channel
            key={channel.id.toString()}
            id={channel.id.toString()}
            position={channels.all
              .map(channel => channel.username)
              .indexOf(channel.username)}
            name={channel.name}
            current={channels.current}
            onSelectClick={onSelectClick}
            onDeleteClick={onDeleteClick}
            status={
              channels.all[channels.current].name === channel.name
                ? "sidebar__wrapper__channel--selected"
                : "sidebar__wrapper__channel"
            }
            image={channel.thumbnail}
          />
        ))}
      </ListGroup>

      <SidebarForm
        inputVal={props.usernameInput}
        type="YOUTUBE"
        inputAction={props.onUsernameInput}
        csrf_token={props.user.csrf_token}
        deleteAction={props.deleteAllChannels}
        addAction={props.fetchChannel}
      />

    </SidebarList>
  );
};


export default Channels;

import React from "react";
import Linkify from "react-linkify";
import { ListGroupItem, Row, Col, Thumbnail } from "react-bootstrap";
import "../styles/postContent.css";

export default props => {
  const { url, id, title, content, media, preview } = props;
  const postText = content.split("\n");

  const decodeHTML = html => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const isImage = url => {
    const extension = url.split(".").pop();
    switch (extension) {
      case "png":
        return "IMAGE";
      case "jpg":
        return "IMAGE";
      case "gif":
        return "IMAGE";
      case "gifv":
        return "VIDEO";
      default:
        return false;
    }
  };

  const renderRedditImage = url => {
    if (
      (url.search("reddituploads") !== -1 || url.search("imgur") !== -1) && media === null &&
        isImage(url) !== "VIDEO"
    ) {
      return (
        <Row>
          <Col sm={12} md={4} className={`thumbnail--${id}`}>
            <Thumbnail
              src={preview.images[0].source.url}
              alt={title}
              onClick={
                () => document.querySelector(`.thumbnail--${id}`).classList.toggle("col-md-4")
              }
            />
          </Col>
        </Row>
      );
    } else {
      return "";
    }
  };

  const renderImage = url => {
    if (isImage(url) === "IMAGE") {
      return (
        <Row>
          <Col sm={12} md={4} className={`thumbnail--${id}`}>
            <Thumbnail
              src={url}
              alt={title}
              onClick={
                () => document.querySelector(`.thumbnail--${id}`).classList.toggle("col-md-4")
              }
            />
          </Col>
        </Row>
      );
    } else {
      return renderRedditImage(url);
    }
  };

  const renderGIFV = url => {
    if (isImage(url) === "VIDEO") {
      return (
        <Row>
          <div className="embed-container">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src={url.replace(".gifv", "/embed")}
                alt={title}
                className="embed-responsive-item"
              />
            </div>
          </div>
        </Row>
      );
    } else {
      return "";
    }
  };

  return (
    <Linkify>
      <ListGroupItem className={`redditPost${id}`}>
        <h6>{url}</h6>
        {renderImage(url)}
        {renderGIFV(url)}
        {media === null ? "" : (
              <div className="embed-container">
                <div
                  className="embed-responsive embed-responsive-16by9"
                  dangerouslySetInnerHTML={
                    {
                      __html: decodeHTML(
                        media.oembed.html.replace("embedly-embed", "embed-responsive-item")
                      )
                    }
                  }
                />
              </div>
            )}
        {postText.map((line, index) => <text key={index}>{line}<br /></text>)}
      </ListGroupItem>
    </Linkify>
  );
}

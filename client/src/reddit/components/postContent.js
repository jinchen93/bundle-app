import React from "react";
import { ListGroupItem, Row, Col, Thumbnail } from "react-bootstrap";

export default props => {
  const decodeHTML = html => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const isImage = url => {
    const extension = url.split(".").pop();
    switch (extension) {
      case "png":
        return true;
      case "jpg":
        return true;
      case "gif":
        return true;
      case "gifv":
        return true;
      default:
        return false;
    }
  };

  const { url, id, title, content, media } = props;
  const postText = content.split("\n");
  return (
    <ListGroupItem className={`redditPost${id}`}>
      <h6>{url}</h6>
      {isImage(url) === true ? (
            <Row>
              <Col sm={12} md={4} className={`thumbnail--${id}`}>
                <Thumbnail
                  src={url}
                  alt={title}
                  responsive={true}
                  onClick={
                    () => document.querySelector(`.thumbnail--${id}`).classList.toggle("col-md-4")
                  }
                />
              </Col>
            </Row>
          ) : ""}
      {
        media === null
          ? ""
          : (
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
          )
      }
      {postText.map(line => <text key={line}>{line}<br /></text>)}
    </ListGroupItem>
  );
}
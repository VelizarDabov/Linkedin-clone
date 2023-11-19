import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import InputOption from "./InputOption";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Velizar Dabov</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />

        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />

        <InputOption Icon={ShareOutlined} title="Share" color="gray" />

        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;

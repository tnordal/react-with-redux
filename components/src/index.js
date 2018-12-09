import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this!!
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="Today at 4:45AM"
          comment="Nice blog post!"
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Plai"
          timeAgo="Today at 6:45AM"
          comment="Excelent blog post!"
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Gif"
          timeAgo="Today at 7:45AM"
          comment="Super blog post!"
          fakeImg={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

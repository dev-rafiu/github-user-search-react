import React from "react";

function Users({ result }) {
  return (
    <div className="result-container">
      {result.map((item) => {
        const { id, html_url, login, avatar_url } = item;
        return (
          <article key={id} className="user">
            <img src={avatar_url} alt="" className="avarta" />
            <h3>{login}</h3>
            <a href={html_url}>Profile</a>
          </article>
        );
      })}
    </div>
  );
}

export default Users;

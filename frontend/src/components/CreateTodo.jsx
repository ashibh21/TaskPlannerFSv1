import React, { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />

      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="disc"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title,
              description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

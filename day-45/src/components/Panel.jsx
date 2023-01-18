import { useState } from "react";
export default function Panel({ title, children, onShow, isActive }) {
  return (
    <div className="container">
      <div className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <div>
            <p> {children}</p>
          </div>
        ) : (
          <button onClick={onShow}> Show</button>
        )}
      </div>
    </div>
  );
}

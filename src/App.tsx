import { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import useLocationChange from "./hooks/useLocationChange";

function App() {
  useLocationChange(location => {
    const { pathname } = location;
    console.log(location);
    if (google?.script) {
      console.log("google!");
      const now = new Date();
      const state = {
        timestamp: now.getTime(),
      };
      google.script.history.replace(state, {}, pathname);
    }
  });

  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem", }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App

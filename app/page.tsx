"use client";
import { useState } from "react";
import { logIn, logOut, chaneStatus } from "@/redux/features/auth/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");

  const authUsername = useAppSelector(
    (state) => state.authReducer.value.username
  );
  const authIsModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  const authIsLoggedIn = useAppSelector(
    (state) => state.authReducer.value.isAuth
  );

  const handleSignIn = () => {
    console.log("signing in");
    dispatch(logIn(username));
  };

  const handleSignOut = () => {
    console.log("signing out");
    dispatch(logOut());
  };

  const handleToggleModeratorStatus = () => {
    console.log("toggling moderator status");
    dispatch(chaneStatus());
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#282c34",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="username"
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "3rem",
          }}
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <button
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "3rem",
          }}
          onClick={handleSignIn}
        >
          Log in
        </button>
        <br />
        <button
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "3rem",
          }}
          onClick={handleSignOut}
        >
          Log Out
        </button>
        <h1>
          Username: <span style={{ color: "#f00" }}>{authUsername}</span>
        </h1>
        {authIsLoggedIn && (
          <button
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              fontSize: "3rem",
            }}
            onClick={handleToggleModeratorStatus}
          >
            Toggle Moderator Status
          </button>
        )}
        {
          <h1>
            Moderator Status:{" "}
            <span style={{ color: "#f00" }}>
              {authIsModerator ? "true" : "false"}
            </span>
          </h1>
        }
      </div>
    </div>
  );
}

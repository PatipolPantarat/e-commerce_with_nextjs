"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";
export default function Page() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleLogin = () => {
    signIn("credentials", {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <label>
        Username <input name="username" type="text" ref={username} />
      </label>
      <label>
        Password <input name="password" type="password" ref={password} />
      </label>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

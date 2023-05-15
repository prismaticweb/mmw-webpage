/** @jsxImportSource solid-js */

import type { Component } from "solid-js";

export type SignUpProps = {
};

export const SignUp: Component<SignUpProps> = (props) => {
  return (
    <form>
      <label>
        <span textContent={"E-Mail-Adresse"} />
        <input type="email" />
      </label>
      <button type="submit" textContent={"Absenden"} />
    </form>
  );
};
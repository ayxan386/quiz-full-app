import { Redirect } from "react-router-dom";
import React from "react";
const checkAuth = token => {
  const flag = token && token.length > 0;
  if (flag) return;
  return <Redirect to='/login'></Redirect>;
};

export const checkAuthFrom = token => {
  console.log("got called with " + token);

  const flag = token && token.length > 0;
  if (flag) return <Redirect to='/ss'></Redirect>;
  return null;
};

export default checkAuth;
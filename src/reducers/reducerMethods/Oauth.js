import Axios from "axios";

export const gitLogin = async () => {
  return async dispatch => {
    console.log("request send");

    const qParams = [
      `redirect_uri=${process.env.githubRedUrl}`,
      `prompt=consent`,
      `state=yrqhejfdnmvcewygdfhbvnc`,
      `client_id=${process.env.githubClientId}`
    ].join("&");
    //     Axios.get(`${process.env.githubRequestUrl}?${qParams}`).then(data =>
    //       console.log(data)
    //     );
    //   };
    // const qParams = [
    //   `redirect_uri=${Google.REDIRECT_URI}`,
    //   `scope=${Google.SCOPE}`,
    //   `login_hint=paramsinghvc@gmail.com`,
    //   `prompt=consent`,
    //   `state=google`
    // ].join("&");

    try {
      const response = await fetch(`/api/auth-url/google?${qParams}`);
      const url = await response.text();
      window.location.assign(url);
    } catch (e) {
      console.error(e);
    }
  };
};

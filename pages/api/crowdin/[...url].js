import axios from "axios";
import { getDynamicCrowdinURL } from "../../../helpers/crowdin";

const handler = async (req, res) => {
  const {
    query: { url },
  } = req;

  const urlString = url.join("/");

  const URL = getDynamicCrowdinURL(urlString);
  const response = await axios({
    method: "GET",
    url: URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ENV_CROWDIN_PERSONAL_TOKEN}`,
    },
  });
  res.json(response.data);
};

export default handler;

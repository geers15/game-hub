import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4b38548df89242dc932bfe364aec52da",
  },
});

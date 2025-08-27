import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f3de7e53ee5345d79b281c8dc76f72ac",
  },
});

import axios from "axios";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/jobs`);
  return response.data;
};

/*
{
  data: [],
  a,
  b,
  c,
}

*/

export default getJobs;

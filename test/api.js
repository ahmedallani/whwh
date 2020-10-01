const axios = require("axios");
let server = "http://localhost:3000";
let api = {
  users: {
    get: server + "/getall",
    post: server + "/post",
  },
  companies:{
    post: server + "/postC"
  }
};
let get = async (url) => {
  try {
    let response = await axios.get(url);
    console.log({ data: response.data });
  } catch (error) {
    console.log({ error });
  }
};
let post = async (url,data) => {
  try {
    let response = await axios.post(url,data);
    console.log({ data: response.data });
  } catch (error) {
    console.log({ error });
  }
};
// get(api.users.get);
let user = {
  name: "ahmed",
  password: "1509442",
  imageUrl:
    "https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/110203565_3078896145499444_2302676844259608181_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=I9CIv5CAHeAAX_y16PN&_nc_ht=scontent.fnbe1-1.fna&oh=f1a5e783ba6b17dba19571ae2cd917a3&oe=5F9B4CA4",
  key: "1234",
  myToDoList: [],
  companyToDoList: [],
  type: "user",
};
//post(api.users.post,user)

let company = {
  name: "RBK",
  password: "RBK",
  imageUrl: "https://d7ieeqxtzpkza.cloudfront.net/wp-content/uploads/2019/07/rbk.jpg",
  key: "azerty123",
  todos: [
    {
      name: "wala",
      todo: "join the meeting at 8am",
    },
  ],
  type: "company",
}
post(api.companies.post,company)
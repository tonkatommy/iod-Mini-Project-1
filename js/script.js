let axios = require("axios");
let data = JSON.stringify({
  collection: "profile",
  database: "EmployeeProfileDB",
  dataSource: "Cluster0",
  filter: {},
  projection: {},
});

let config = {
  method: "post",
  url: "https://ap-southeast-2.aws.data.mongodb-api.com/app/data-axhfd/endpoint/data/v1/action/find",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "i2OjjVaZBparoVoiiPWP6cdpzAkiDdbMp6Rk8C9ftYzUhINueg9JLXSLRLPwvewC",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

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
    "api-key": "i2OjjVaZBparoVoiiPWP6cdpzAkiDdbMp6Rk8C9ftYzUhINueg9JLXSLRLPwvewC",
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

const axios2 = require("axios");

axios2.defaults.headers.common["x-api-key"] = "live_Ev8ePMHoEtQrBVPRAZtDVrDFTign6M4uuLTQI7dSbpf5V7aUb4c1q5WPq8eDPESF";
axios2
  .get("https://api.thedogapi.com/v1/breeds")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

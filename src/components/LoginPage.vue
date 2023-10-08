<template>
    <div class="login-page">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="email">UserNo</label>
          <input
            type="text"
            class="form-control"
            id="text"
            v-model="userNo"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
          />
        </div>
        <div class="btn">
          <button type="submit" class="btn-primary" @click.prevent="login">
            Submit
          </button>
          <button type="regist" class="btn-primary" @click.prevent="regist">
            Regist
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        userNo: "",
        password: "",
      };
    },
    methods: {
      login() {
        // Perform login logic here
        // console.log('Logging in with email:', this.email, 'and password:', this.password);
        axios
          .get(
            "https://mybbswebapi20231008132930.azurewebsites.net/Login/" + this.userNo + "/" + this.password,
            {
              headers: {
                "Ocp-Apim-Subscription-Key": "8171626a36c746eabb90fb1518a0e703",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            var query = {
              UserNo: response.data.userNo,
              UserName: response.data.userName,
              Email: response.data.email,
              UserLevel: response.data.userLevel,
              id: response.data.id,
            };
            console.log("query=", query);
            this.$router.push({
              name: "ProductList",
              query: query,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      regist() {
        let params = {
          UserNo: this.userNo,
          UserName: this.userNo,
          Email: this.userNo + "@gmail.com",
          Password: this.password,
        };
        axios
          .post(
            "https://mybbswebapi20231008132930.azurewebsites.net/Login?userNo=" +
              params.UserNo +
              "&userName=" +
              params.UserName +
              "&email=" +
              params.Email +
              "&password=" +
              params.Password
              ,
            {
              headers: {
                "Ocp-Apim-Subscription-Key": "8171626a36c746eabb90fb1518a0e703",
              },
            }
          )
          .then((response) => {
            var res = response.data;
            if (res == "注册成功！") {
              alert("注册成功！");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin-top: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    margin-top: 20px;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
  </style>
  
  
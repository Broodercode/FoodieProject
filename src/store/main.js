import axios from "axios";
import { defineStore } from "pinia";
import cookies from "vue-cookies";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      cCreation: false,
      rCreation: false,
      cLogin: false,
      rLogin: false,
      restLoggedIn: false,
      clientLoggedIn: false,
      menuEdit: false,
      client: {
        email: undefined,
        username: undefined,
        firstName: undefined,
        lastName: undefined,
        password: undefined,
      },
      menuAdd: {
        name: undefined,
        description: undefined,
        price: undefined,
        image: undefined
      },
      restaurant: {
        name: undefined,
        address: undefined,
        bio: undefined,
        city: undefined,
        email: undefined,
        password: undefined,
        phoneNum: undefined,
      },
      menuArr: [
     
      ],
      orderArr: [

      ],
      orderNo: 0
    };
  },
  actions: {
    //create client
    async clientCreation(email, username, firstname, lastname, password) {

      //change data
      axios({
        method: "post",
        url: "https://www.foodierest.ml/api/client",
        data: {
          email: email,
          username: username,
          firstName: firstname,
          lastName: lastname,
          password: password,
        },
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
        },
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.response.data));
    },

    //create restaurant
    async restCreation(name, address, bio, city, email, phone, password) {
      console.log("v-model method");

      //change data
      axios({
        method: "post",
        url: "https://www.foodierest.ml/api/restaurant",
        data: {
          name: name,
          address: address,
          bio: bio,
          city: city,
          email: email,
          password: password,
          phoneNum: phone,
        },
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
        },
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.response.data));
    },

    //log client in
    async onClientLogin() {
      axios({
        method: "post",
        url: "https://www.foodierest.ml/api/client-login",
        data: {
          email: "john@gmail.com",
          password: "donuts",
        },
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
        },
      })
        .then((response) => {
          console.log(response);
          cookies.set("token", response.data.token);
          this.clientLoggedIn = true;
          this.restLoggedIn = false
          if (response.data.restaurantId) {
            console.log("restaurant");
          }
        })
        .catch((error) => console.log(error.response.data));
    },

    //log restaurant in
    async onRestLogin() {
      axios({
        method: "post",
        url: "https://www.foodierest.ml/api/restaurant-login",
        data: {
          email: "kikos@gmail.com",
          password: "supersecret123",
        },
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
        },
      })
        .then((response) => {
          console.log(response);
          cookies.set("token", response.data.token);
          this.restLoggedIn = true;
          this.clientLoggedIn = false;
          if (response.data.restaurantId) {
            console.log("restaurant");
          }
        })

        .catch((error) => console.log(error.response.data));
    },

    //I do'nt remember what I was using this for lol
    async patchRestaurant(name, address, bio, city, email, password, phone) {
      let userToken = cookies.get("token");
      axios({
        method: "patch",
        url: "https://www.foodierest.ml/api/restaurant",
        data: {
          name: name,
          address: address,
          bio: bio,
          city: city,
          email: email,
          password: password,
          phoneNum: phone,
        },
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
          token: userToken,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    async patchClient(email, username, firstname, lastname, password) {
      let userToken = cookies.get("token");
      axios({
        method: "patch",
        url: "https://www.foodierest.ml/api/restaurant",
        data: {
          email: email,
          username: username,
          firstName: firstname,
          lastName: lastname,
          password: password,
          
        },
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
          token: userToken,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },

    //changes to user signup, prob should have just been a toggle
    toggleUserSignup() {
      this.rCreation = false;
      this.cCreation = true;
      console.log(this.rCreation, this.cCreation);
    },

    //changes to restaurant signup, should have just been a toggle
    toggleRestSignup() {
      this.rCreation = true;
      this.cCreation = false;
      console.log(this.rCreation, this.cCreation);
    },

    //changes the user to logged in and ensures rest is logged out
    toggleUserLogin() {
      this.rLogin = false;
      this.cLogin = true;
      console.log(this.rLogin, this.cLogin);
    },
    //changes the restaurant to logged in and ensures the user is logged out
    toggleRestLogin() {
      this.rLogin = true;
      this.cLogin = false;
      console.log(this.rLogin, this.cLogin);
    },
    //toggles a login connection and stores the cookie
    async toggleLogin() {
      let userToken = cookies.get("token");
      axios({
        method: "get",
        url: "https://www.foodierest.ml/api/client",
        headers: {
          token: userToken,
          "x-api-key": process.env.VUE_APP_CONNECT_API,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            console.log("login successful");
            this.clientLoggedIn = true;
          }
        })
        .catch((error) => {
          console.log(error);
          this.onRestLogin();
        });
    },
    //deletes the token
    toggleLogout() {
      console.log("toggle logout successful");

      cookies.remove("token");

      this.restLoggedIn = false
      this.clientLoggedIn = false
      
    },

    //add things to menu
    async editMenu() {
      this.menuEdit = true
      
    },
    async updateMenu(name, description, price, image) {
      let token = cookies.get("token");
      console.log(token);
      console.log(name, description, price, image)
      let n = name
      let d = description
      let p = Number(price)
      let i = image
      axios({
        method: "post",
        url: "https://www.foodierest.ml/api/menu",
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
          token: token,
        },
        data: {
          name: n,
          description: d,
          price: p,
          image: i
        },
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    async viewMenu() {
      console.log("view menu works");
      axios({
        method: "get",
        url: "https://www.foodierest.ml/api/menu",
        headers: {
          "x-api-key": process.env.VUE_APP_CONNECT_API,
        },
      })
        .then((response) => {
          this.menuArr = response.data;
          console.log(this.menuArr);
        })
        .catch((error) => console.log(error));
    },
    getOrder(e) {
      
      this.orderArr.push( e)
      this.orderNo++ 
      console.log(this.orderArr)
    }
  },
});

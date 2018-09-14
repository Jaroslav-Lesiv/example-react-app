// import shortid from 'shortid';
import { observable } from "mobx";

class UserStore {
  @observable
  state = {
      firstname: "",
      lastname: "",
      isLogin: false,
  };

  get user() {
    return this.state;
  }

  setUser({ firstname, lastname }) {
    this.firstname(firstname);
    this.lastname(lastname);
    this.userLogin(true)
  }

  userLogin(bool) {
    this.state.isLogin = bool;
  }
  firstname(firstname) {
    this.state = { ...this.state, firstname };
  }
  lastname(lastname) {
    this.state = { ...this.state, lastname };
  }
}

const user = new UserStore();
export { user };

// import shortid from 'shortid';
import { observable } from "mobx"

class AppStore {
    @observable state = {
        isOpen: true,
        pending: false
    };

    get appState() {
        return {
            ...this.state
        }
    }

    report() {
        return {
            ...this.state
        }
    }

    toggleApp() {
        this.state.isOpen = !this.state.isOpen
    }
}

const app = new AppStore();
export {app}
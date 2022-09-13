import { observable, action, makeObservable } from "mobx"

class MainStore {
    @observable userName = ""

    @action initializeName(name) {

        this.userName = name
    }

    @action setSaved(saved) {

    }

    constructor() {
        // Just call it here
        makeObservable(this);
    }
}

const store = new MainStore();

export default store;
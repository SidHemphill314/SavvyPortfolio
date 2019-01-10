class Store{
    constructor(state){
        this.state = state;
        this.listeners = [];
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        this.listners.forEach(
            (listener) => listener(this.state)

        );
    }
    addListener(listener){
        this.listeners.push(listener);
    }
}

export default Store;
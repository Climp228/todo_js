const todo = {
    action(e) {},
    add() {},
    create(text) {},
    init() {},
    update() {},
    save() {}
};

init() {
    const fromStorage = localStorage.getItem('todo');
    if (fromStorage) {
        document.querySelector('.todo__items').innerHTML = fromStorage;
    }
    document.querySelector('.todo__options').addEventListener('change', this.update);
    document.addEventListener('click', this.action.bind(this));
};

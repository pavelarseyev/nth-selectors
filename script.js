let btnAdd = document.querySelector("#btn-add");
let btnRemove = document.querySelector("#btn-remove");
let list = document.querySelector(".list");

Element.prototype.remove = function () {
    if(this) {
        this.parentNode.removeChild(this);
    }
}

btnAdd.addEventListener("click", function () {
    let item = document.createElement("div");
    item.setAttribute("data-text-3", "three");
    item.setAttribute("data-text-4", "four");
    item.setAttribute("data-text-8", "eight");
    item.classList.add("item");

    list.appendChild(item);
});

btnRemove.addEventListener("click", function () {
    let item = list.querySelector(".item:last-child");

    if(item) {
        item.remove();
    }
});
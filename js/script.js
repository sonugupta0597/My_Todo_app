function showAddList() {

    document.getElementById('addListCard').style.filter = "blur(8px)";
    var cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "white";
    }

    document.getElementById("addListItem1").style.display = "block";



}

function addList() {
    var inputValue = document.getElementById("addListItem-input").value;
    if (inputValue.length != 0) {
        var element = document.getElementById("addListCard");
        var childElement = document.createElement("div");
        childElement.id = document.getElementsByClassName("card").length++;
        childElement.classList.add("card");
        childElement.innerHTML = '<h1 class="card-title">' + document.getElementById("addListItem-input").value + '</h1><div class="make-hide"><hr><label for="" class="card-result"><del>Completed Task</del></label><div class="card-checkbox"><input type="checkbox"> Pending Task<div></div><div ><i style="color: lightblue;" class="fa fa-plus-circle addTasks" aria-hidden="true" onclick="addItem()"></i></div>';

        element.appendChild(childElement);
    }

    removeBlurEffect();

}

function removeBlurEffect() {
    document.getElementById("addListItem1").style.display = "none";
    document.getElementById('addListCard').style.filter = "blur(0px)";
    var cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "#000";
    }

}

function addItem() {
    document.getElementById("addItem").style.display = "block";
}
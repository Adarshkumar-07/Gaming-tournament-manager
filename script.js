function addPlayer(){

    let playerInput = document.getElementById("playerInput");
    let playerName = playerInput.value.trim();

    if(playerName === ""){
        alert("Please enter a player name");
        return;
    }

    let li = document.createElement("li");

    li.textContent = playerName;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function(){
        li.remove();
    }

    li.appendChild(deleteButton);

    document.getElementById("playerList").appendChild(li);

    playerInput.value = "";
}
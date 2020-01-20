var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btnRemove = document.getElementById("remove");
var listLi = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var btn = document.createElement("BUTTON");
	btn.appendChild(document.createTextNode("del"));

	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";

	li.addEventListener("click", afterLiClick);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

btnRemove.addEventListener("click", afterRemoveClick);

function afterRemoveClick(){
	for(var i=0; i<listLi.length; i++){
		if(input.value === listLi[i].innerHTML)
		{
			listLi[i].remove();
		}
	}
}

for(var i=0; i<listLi.length; i++){
	listLi[i].addEventListener("click", afterLiClick)
}

function afterLiClick(id){
	
	if(id.target.innerHTML === "del")
	{
		id.target.addEventListener("click", removeItem(id));
	}
	else
	{
		id.target.classList.toggle("done");
	}	
}

function removeItem(id){
	id.target.parentElement.remove();
}

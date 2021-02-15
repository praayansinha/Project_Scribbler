
function viewPost(obj) {
   window.location = "post.html";
}

function editPost() {
    var editBtn = document.getElementById('edit-btn');
    editBtn.innerHTML = 'Save ';
    var saveIcon = document.createElement("i");
    saveIcon.setAttribute("class", "fas fa-save");
    editBtn.appendChild(saveIcon);
    var postData = document.getElementById("post-data");
    postData.contentEditable = "true";
    postHead = document.getElementById("post-head");
    postHead.contentEditable = "true";
    postData.style.border = "2px solid pink";
    postHead.style.border = "2px solid pink";
    editBtn.id = "save-btn";
    editBtn.className = "btn edit-btn";

    editBtn.addEventListener("click", () => {
        postData.contentEditable = "false";
        postHead.contentEditable = "false";
        postData.style.border = "none";
        postHead.style.border = "none";
        editBtn.id = "edit-btn";
        editBtn.className = "btn edit-btn";
        editBtn.innerHTML = 'Edit ';
        var editIcon = document.createElement("i");
        editIcon.setAttribute("class", "fa fa-edit");
        editBtn.appendChild(editIcon);
        editBtn.addEventListener("click", editPost);
    });

}
var clickCount = 0;

function likePost() {
    let BtnEle = document.querySelector("#like-btn");
    var likeIcon = document.createElement("i");
    BtnEle.innerHTML = ' Liked!'
    likeIcon.setAttribute("class","fas fa-thumbs-up");
    BtnEle.prepend(likeIcon);
    let resEle = document.querySelector("#no-likes");
    clickCount++;
    if (clickCount == 1) {
        resEle.innerHTML = "1 person likes this!";
    } else {
        resEle.innerHTML = clickCount + " people like this! ";
    }
}

function addComment() {
    var comment = document.getElementById('comment').value;
    var ul = document.getElementById("comment-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(comment));
    ul.insertBefore(li, ul.childNodes[0]);
    document.getElementById('comment').value = "";
}
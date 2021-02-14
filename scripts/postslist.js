var postNum;
function confirmDelPost(obj) {
    postNum = findPostNo(obj);
    document.body.classList.add("confirm-del-post");
}

function findPostNo(obj) {
    var postNo = obj.parentElement.parentElement.parentElement.getAttribute("id");
    return postNo;
}

function yesDel(elementId) {

    document.body.classList.remove("confirm-del-post");
    document.getElementById(postNum).style.display = "none";
}

function noDel() {
    document.body.classList.remove("confirm-del-post");
}
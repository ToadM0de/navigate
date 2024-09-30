import { changePage, checkSignIn } from "../model/model.js";

function initListeners() {
  Swal.fire({
    title: "Not Signed In",
    text: "Do you want to sign in?",
    icon: "info",
    confirmButtonText: "Yes",
    showCancelButton: true,
  });
}

// this function is used to grab the hash tag and the crrect page
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("route ", pageID);
  changePage(pageID);
}

// this function adds the url change listener to the window
function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  // initListeners();
  // checkSignIn(initSite);
  initSite();
  // only use this way to develop the pageXOffset
  //changePage("home");
});

import $ from "jquery";

import exercise01 from "./01-exercise";
import exercise02 from "./02-exercise";
import exercise03 from "./03-exercise";
import exercise04 from "./04-exercise";

$(document).ready(function () {
  $(".clear-ex").on("click", function () {
    $("#data, .ex4-container").empty();
  });

  $(".run-ex").on("click", function () {
    const val = $("#chooseMethod").val();

    if (val === "xmlrequest") {
      exercise01();
    } else if (val === "get") {
      exercise02();
    } else if (val === "fetch") {
      exercise03();
    } else if (val === "axios") {
      exercise04();
    }
  });
});

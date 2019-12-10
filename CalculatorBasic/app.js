var $ = jQuery = require("jquery");
var _ = require("lodash");




$(document).ready(function() {
    // console.log()
    $("#button1").click(function() {
        var getInput1 = $("#input1").val();
        var getInput2 = $("#input2").val();
        var getInput1 = Number(getInput1);
        var getInput2 = Number(getInput2);
        if (isNaN(getInput1) || isNaN(getInput2) || getInput2 == '' || getInput1 == '') {

            alert("Please input number!");

        } else {
            var result = getInput1 + getInput2;
            $("#result").val(result);
        }
    })
    $("#button2").click(function() {
        var getInput1 = $("#input1").val();
        var getInput2 = $("#input2").val();
        var getInput1 = Number(getInput1);
        var getInput2 = Number(getInput2);
        if (isNaN(getInput1) || isNaN(getInput2) || getInput2 == '' || getInput1 == '') {

            alert("Please input number!");

        } else {
            var result = getInput1 * getInput2;
            $("#result").val(result);
        }
    })
    $("#button3").click(function() {
        var getInput1 = $("#input1").val();
        var getInput2 = $("#input2").val();
        var getInput1 = Number(getInput1);
        var getInput2 = Number(getInput2);
        if (isNaN(getInput1) || isNaN(getInput2) || getInput2 == '' || getInput1 == '') {

            alert("Please input number!");

        } else {
            var result = getInput1 / getInput2;
            $("#result").val(result);
        }
    })
    $("#button4").click(function() {
        var getInput1 = $("#input1").val();
        var getInput2 = $("#input2").val();
        var getInput1 = Number(getInput1);
        var getInput2 = Number(getInput2);
        if (isNaN(getInput1) || isNaN(getInput2) || getInput2 == '' || getInput1 == '') {

            alert("Please input number!");

        } else {
            var result = getInput1 - getInput2;
            $("#result").val(result);
        }
    })
    $("#button5").click(function() {
        var getInput1 = $("#input1").val();
        var getInput2 = $("#input2").val();
        var getInput1 = Number(getInput1);
        var getInput2 = Number(getInput2);
        if (isNaN(getInput1) || isNaN(getInput2) || getInput2 == '' || getInput1 == '') {

            alert("Please input number!");

        } else {
            var result = getInput1 % getInput2;
            $("#result").val(result);
        }
    })




})
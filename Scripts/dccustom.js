$(function () {


    $("#mathBtn").click(function () {
        //get user data
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());

        // make calculations
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;

        $("#smallest").text("The smallest number is: " + smallest);
        $("#largest").text("The largest number is: " + largest);
        $("#sum").text("The sum number is: " + sum);
        $("#product").text("The product number is: " + product);
        $("#average").text("The average number is: " + average);



    });

    $("#clearBtn1").click(function () {

        $("#input1, #input2, #input3, #input4, #input5").val('');
        $("#smallest, #largest, #sum, #product, #average").text('');

    });

    //I need a click event handler for the button
    $("#btnFact").click(function () {

        //Step 1: Get the user data
        var number = +$("#fact").val();

        if (number > 170) {
            alert("Please enter positive numbers less than 171");
            $("#fact").val('');
            return;
        }

        else {
            //Step 2: Calculate the Factorial
            for (var loop = number - 1; loop > 1; loop--) {
                //How do we calculate the factorial
                //number = number * loop
                number *= loop;
            }

            //Step 3: Show the result
            $("#factOut").text(number);
        }


    });

    $("#btnClear2").click(function () {
        //Clear the input
        $("#fact").val('');
        $("#factOut").text('');


    });

    $("#btnPal").click(function () {
        var word = $("#palIn").val();
        //remove spaces set to upper or lower (either one)
        var revword = word.split('').reverse().join('');
        //var revword = (word).reverse();
        //radar
        for (var index = word.length - 1; index >= 0; index--) {

            revword += word[index];

        }

        var message = '';
        if (word === revword) {
            message = word + " reversed = True" + " therefore " + word + " is a Palindrome";
        }

        else {
            message = word + " reversed = False" + " therefore " + word + " is not a Palindrome";
        }

        $("#palOut").text(message);

        ////}
    });

    $("#btnClear3").click(function () {
        //Clear the input
        $("#palIn").val('');
        $("#palOut").text('');


    });

    $("#btnFb").click(function () {
        var num1 = +$("#fbIn1").val();
        var num2 = +$("#fbIn2").val();

        var fizzbuzzEntry = "<span class='fizzbuzz common'>Fizz-Buzz</span>";
        var fizzEntry = "<span class='fizz common'>Fizz</span>";
        var buzzEntry = "<span class='buzz common'>Buzz</span>";

        for (var counter = 1, output = []; counter <= 100; counter++) {
            if (counter % num1 == 0 && counter % num2 == 0) {
                output.push(fizzbuzzEntry);
            }
            else if (counter % num1 == 0) {
                output.push(fizzEntry);
            }
            else if (counter % num2 == 0) {
                output.push(buzzEntry);
            }
            else {
                output.push(counter);
            }


        }

        $("#fbOut").html(output.join(', '));


    });

    $("#btnClear4").click(function () {
        //Clear the input
        $("#fbIn").val('');
        $("#fbOut").html('');
    });

    $("#code").hide();

    $("#btnToggle").click(function () {
        $("#code").toggle();

        if ($(this).text() == "Hide Code") {
            $(this).text("Show Code");
        }
        else {
            $(this).text("Hide Code");
        }
    });

    $("#btnK").click(function () {
        //declare an empty array
        var myArray = new Array();

        //Get all the numbers
        myArray.push(+$("#input7").val());
        myArray.push(+$("#input8").val());
        myArray.push(+$("#input9").val());
        myArray.push(+$("#input10").val());
        myArray.push(+$("#input11").val());
        myArray.push(+$("#input12").val());

        var kValue = +$("#kValue").val();

        for (index = 0, found = false; index < myArray.length - 1; index++) {
            var position = myArray.indexOf(kValue - myArray[index], index + 1);
            if (position > 0) {
                found = true;
                break;
            }
        }

        if (found) {
            $("#out").html("<b>" + kValue + "</b> was found by adding array members " + "<span class='target'>" + myArray[index] +
                " </span> and <span class='target'>" + myArray[position] + "</span>");
        }
        else {
            $("#out").text("K was not found!");
        }

    });z

    $("#btnClear5").click(function () {
        //Clear the input
        $("#input7, #input8, #input9, #input10, #input11, #input12, #kValue").val('');
        $("#out").html('');


    });


});
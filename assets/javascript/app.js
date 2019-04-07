
// style button
$("button").attr("border", "3px solid black");

// make the button disapears 
$(document).ready(function(){
    var timerId = setInterval(countdown, 1000);
    var timerRunning;
    var x = document.getElementById('timer');
    $("#start").on("click", function(){
        timerRunning = 30;
        timerId;
        $("#start").hide(function(){
            $("#questions").fadeIn();

        });
        //  alert("start!"); -->testing
        });
        //Inizialiation timerRunning
        
        function countdown() {
            if (timerRunning == -1) {
                clearTimeout(timerId);
            
            } else {
                x.innerHTML = ' Time Remaining: ' + timerRunning + ' seconds';
                timerRunning--;
            }
        }

        //set resetRadios
        function resetRadios(){
            for(var i=1; i<=10; i++){
                $("input[name=group"+ i + "]").prop("checked", false);
            }

        }

        // click on the button start

        $("#done").on("click", result);

        //set the function result the questions 
        function result(){     
            var correctsAnswers = ["Toy Story", "Fred Spice", "Chicago Bulls", "Nirvana",
                                    "Ollie Johnston", "J. Stuart Blackton", "Émile Cohl", "91 years old",
                                    "Mortimer Mouse", "Ub Iwerks"];
            var totalCorrect = 0;
            var totalIncorrect = 0;
            var totalUnanswer = 0;    
            for(var i = 1; i <= correctsAnswers.length; i++){
                if ($("input[name=group"+i+"]").is(":checked")){
                    if($("input[name=group"+i+"]:checked").val() == correctsAnswers[i-1]){
                        totalCorrect ++;
                    }
                    else totalIncorrect ++;
                }
                else totalUnanswer ++;
                // alert('Corrects / Incorrects / Unanswered:' + totalCorrect + " / " + totalIncorrect + " / " + totalUnanswer) ;
                // --->testing
            }
            //display the box- result
                $("#back").css("display", "block"); //display ->block is by default
                $("#box-result").show(function(){
                    $("#final-result").text("All Done!!!");
                    $("#correct").text("Correct Answers: " + totalCorrect);
                    $("#incorrect").text("Incorrect Answers: " + totalIncorrect);
                    $("#unselect").text("Unanswers: " + totalUnanswer);
                });
                $("#questions").hide();
        }
            //make click on back-button and return to the 1st. page
            $("#back").on("click", function(){
                $("#start").show();
                $("#box-result").hide();
                $("#back").css("display", "none"); //display, none-->block is by default   
                resetRadios();
            
            });
        });
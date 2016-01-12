var characterList = ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ", "ㅣ", "ㅏ", "ㅓ", "ㅗ", "ㅎ", "ㄹ", "ㅇ", "ㄴ", "ㅁ", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ"];
// Index for position in characterList array
var index = 0;

$(document).ready(function () {
    // Shuffle the characterList array for a "unique" experience each time.
    shuffle(characterList);
    $(characterBuffer).html(characterList[index]);

    // onkeypress listener for the textbox which the user uses to match the character
    $("#input").keypress(function (event) {
        // if the keypress is "enter", that is submit.
        if (event.which == 13) {
            var value = $("#input").val();
            // if the character entered matches the character displayed
            if (value == characterList[index]) {
                // inform the user it was correct, clear the textbox, and maintain focus on the textbox for them.
                $("#status").html("correct!");
                $("#input").val('');
                $("#input").focus();
                index++;
            }
            else {
                $("#status").html("Incorrect!");
                $("#input").val('');
                $("#input").focus();
                index++;
            }
            // once the user has been informed it was correct and the index is incremented, display the next symbol 
            displayNextSymbol();
        }
    });
});


function displayNextSymbol()
{
    $(characterBuffer).html(characterList[index]);
}

/*
 *  Unbiased Fisher-Yates algorithm for shuffling an array and other "list-like" data structures 
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
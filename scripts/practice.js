﻿/*
    Special Thanks to Miss Minji H. for translations.
*/

var AllowTries = true;
var IsCorrect = false;

var IsInitialDifficulty = false;
var CurrentIndex = 0;
var CurrentCharacterList;

var EasyCharacterList = ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ", "ㅣ", "ㅏ", "ㅓ", "ㅗ", "ㅎ", "ㄹ", "ㅇ", "ㄴ", "ㅁ", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ"];
var MediumCharacterList = ["가", "구", "나", "무", "두", "모", "다", "누", "오", "모", "게", "르", "두", "개", "내", "사", "리", "네", "부", "라", "머", "로", "소", "부", "시", "마"];
var HardCharacterList = ["ㅃ", "ㄲ", "구토", "처녀", "부여하다", "바코드", "여보", "지혜", "캐나다", "키스", "좋아", "십일", "필요하다", "졸업", "좋아", "낙지", "맥주", "맙소사", "있다", "닻줄", "불고기", "짬뽕", "오빠", "예쁘다", "쓰다", "싸다", "빠지다", "비싸다", "깜짝 놀라다", "가깝다", "코끼리", "원숭이", "까다롭다"];

$(document).ready(function () {
    $(characterDisplay).css("font-size", "3em");
    $(characterDisplay).html("Choose a difficulty Above");

    $("#AllowTries").attr("class", "form-control btn-success");
    $("#AllowTries").attr("value", "yes");

    // Click listener for the toggle keyboard link
    $("#toggleKeyboard").click(function () {
        if ($("#toggleKeyboard").text() == "Hide Keyboard") {
            $("#koreanKeyboard").fadeOut("slow");
            $("#toggleKeyboard").text("Show Keyboard");
        }
        else {
            $("#koreanKeyboard").fadeIn("slow");
            $("#toggleKeyboard").text("Hide Keyboard");
        }
    }); // toggle keyboard link click listener



    $("#AllowTries").click(function () {
        var value = $("#AllowTries").attr("value");
        if (value == "yes") {
            $("#AllowTries").attr("value", "no");
            $("#AllowTries").attr("class", "form-control btn-danger");
        }
        else if (value == "no") {
            $("#AllowTries").attr("value", "yes");
            $("#AllowTries").attr("class", "form-control btn-success");
        }
    });

    $("#input").keypress(function (event) {
        // if the keypress is "enter".
        if (event.which == 13) {
            // If the typed character matches the displayed character
            if ($("#input").val() == CurrentCharacterList[CurrentIndex]) {
                // Flash the background colour green to let the user know they got it right
                $("#characterDisplay").animate({ backgroundColor: "green" }, 50).animate({ backgroundColor: jQuery.Color($(".jumbotron"), "background-color") });
                // Clear the input
                $("#input").val('');
                // Maintain focus for more seamless typing
                $("#input").focus();
                CurrentIndex++;
            }
            else {
                $("#characterDisplay").animate({ backgroundColor: "red" }, 50).animate({ backgroundColor: jQuery.Color($(".jumbotron"), "background-color") });
                $("#input").val('');
                $("#input").focus();
                CurrentIndex++;
            }

            if (CurrentIndex == CurrentCharacterList.length) {
                $("#characterDisplay").html("Well Done! - 참 잘했어요!");
            }
            else {
                setTimeout(displayNextSymbol(CurrentCharacterList, CurrentIndex), 300);
            }
        } // event.which == 13
    });
});

function displayNextSymbol(characterList, index) {
    $("#characterDisplay").html(characterList[index]);
}

function BeginQuiz(difficulty) {
    switch (difficulty) {
        case "Easy":
            CurrentCharacterList = Shuffle(EasyCharacterList);
            break;
        case "Medium":
            CurrentCharacterList = Shuffle(MediumCharacterList);
            break;
        case "Hard":
            CurrentCharacterList = Shuffle(HardCharacterList);
            break;
        default:
            CurrentCharacterList = [1];
            CurrentCharacterList[0] = "Uh Oh, something went terribly wrong! Feel free to Email me at whabanks@hotmail.com and let me know what you were up to when this happened";
            break;
    }
    // Shuffle the characterList array for a "unique" experience each time.
    $(characterDisplay).html(CurrentCharacterList[CurrentIndex]);
} // BeginQuiz()

/*
 *  Unbiased Fisher-Yates algorithm for shuffling an array and other "list-like" data structures 
 */
function Shuffle(array) {
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
} // Shuffle(array)
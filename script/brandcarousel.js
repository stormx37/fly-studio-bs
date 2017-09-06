$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 175;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
    console.log(elementsCount)
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 175;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
        else {
            currentLeftValue = minimumOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 175;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }   
        else {
            currentLeftValue = maximumOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

});
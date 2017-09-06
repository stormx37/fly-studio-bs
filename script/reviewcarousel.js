$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left2');
    var rightUIEl = $('.carousel-arrow-right2');
    var elementsList = $('.carousel-list2');
 
    var pixelsOffset = 100;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    elementsList.find('li').css('width', (100 / elementsCount) + "%");
    elementsList.css('width', (100 * elementsCount) + "%");
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;
    console.log(elementsCount)
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 100;
            elementsList.animate({ left : currentLeftValue + "%"}, 500);
        }
        else {
            currentLeftValue = minimumOffset;
            elementsList.animate({ left : currentLeftValue + "%"}, 500);
        }
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 100;
            elementsList.animate({ left : currentLeftValue + "%"}, 500);
        }   
        else {
            currentLeftValue = maximumOffset;
            elementsList.animate({ left : currentLeftValue + "%"}, 500);
        }
    });

});
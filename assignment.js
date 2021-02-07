//kilometerToMeter
function kilometerToMeter(kilometer){
    var totalKilometer = 0;
    if (kilometer <= 0) {
        return 'Error! please enter valid number'
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(3)
console.log(result);

//budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = 0;
    var phonePrice = 0;
    var laptopPrice = 0;
    if(watch <= 0 || phone <= 0 || laptop <= 0){
        return 'Please enter valid number'
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
    
}
var totalBudget = budgetCalculator(15, 20, 7);
console.log(totalBudget);

//hotelCost
function hotelCost(days){
    var totalDays = 0;
    if(days <= 0){
        return 'Error! Please enter Valid number';
    }
    else if (days <= 10){
        totalCost = days * 100;
    }
    else if (days <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var thirdMoreDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + thirdMoreDays;
    }
    
    return totalCost;
}
var result = hotelCost(5);
console.log(result);

//megaFriend
function megaFriend(arr) {
    var largeName = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element.length <= 0) {
            return 'Error! Name field cannot be empty.';
        }
        else if (largeName.length < element.length) {
            largeName = element;
        }
    }
    return largeName;
}

var nameList = ['alamgir', 'rubel', 'tan', 'tanisarasel'];
var largestName = megaFriend(nameList);
console.log(largestName);
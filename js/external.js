
    console.log("Hello from external JavaScript");
    alert("Welcome to my Website!");
    let userInput = prompt("Enter your favorite color!");
    console.log("Great," + userInput + " is my favorite color too!")
//#1
    let dailyRentalRateDollars = prompt ("How much was your daily rental?");

    let littleMermaidDaysRented = prompt ('How many days did you rent the little mermaid?');
    let brotherBearDaysRented = prompt ('How many days did you rent brother bear?');
    let herculesDaysRented = prompt ('How many days did you rent hercules');

    let totalRentalCost;

    totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
alert(totalRentalCost)
//#2

let userGoogleRate = prompt ('How much do you make per hour at google?') ;
let userAmazonRate = prompt ('How much do you make per hour at amazon?');
let userFacebookRate = prompt ('How much do you make per hour at facebook?') ;

let userHoursForGoogle = prompt ('How many hours did you work at google?') ;
let userHoursForAmazon = prompt ('How many hours did you work at amazon?') ;
let userHoursForFacebook = prompt  ('How many hours did you work at facebook?') ;

let googlePayment = userGoogleRate * userHoursForGoogle ;
let amazonPayment = userAmazonRate * userHoursForAmazon ;
let facebookPayment = userFacebookRate * userHoursForFacebook ;

let totalPayment = googlePayment + amazonPayment + facebookPayment;

console.log("Total payment for the week : $" + totalPayment);
alert(totalPayment)

//#3

    let classIsNotFull; prompt ('Is the class full?')
    let classScheduleDoesNotConflict; prompt ('Does the class fit within your schedule?')

    let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;


//#4
    let numberOfItems; prompt ('Did you buy more than 2 items?');
    let offerIsValid; prompt ('Is the offer valid?')
    let isPremiumMember; prompt ('Are you a premium member?')

    let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);


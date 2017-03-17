/*** Does the age verification stuff***/
   function checkAge(){
   var min_age = 18;
   var year = parseInt(document.forms["age_form"]["year"].value);
   var month = parseInt(document.forms["age_form"]["month"].value) - 1;
   var day = parseInt(document.forms["age_form"]["day"].value);

   var theirDate = new Date((year + min_age), month, day);
   var today = new Date;

   if ( (today.getTime() - theirDate.getTime()) < 0) {
   alert("You are too young to enter this site!");
   return false;
   }
   else {

   return true;
   }
   }

	 
	 
/*** Does the card slipping stuff***/
(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();

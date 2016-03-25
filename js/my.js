$(document).ready(function(){
  $('form#vacationForm').submit(function(event){
    event.preventDefault();
    var personality = parseInt($('#personality').val());
    var art = parseInt($('#art').val());
    var color = parseInt($('#color').val());
    var music = parseInt($('#music').val());
    var school = parseInt($('#school').val());
    var ibiza = 0;
    var iceland = 0;
    var newZealand = 0;
    var amsterdam = 0;

    if (personality === 1){
      iceland += 1;
    } else if (personality === 2){
      amsterdam += 1;
    } else if (personality === 3){
      newZealand += 1;
    } else if (personality === 4){
      ibiza += 1;
    }

    if (art === 1){
      iceland += 1;
    } else if (art === 2){
      amsterdam += 1;
    } else if (art === 3){
      newZealand += 1;
    } else if (art === 4){
      ibiza += 1;
    }

    if (color === 1){
      iceland += 1;
    } else if (color === 2){
      amsterdam += 1;
    } else if (color === 3){
      newZealand += 1;
    } else if (color === 4){
      ibiza += 1;
    }

    if (music === 1){
      iceland += 1;
    } else if (music === 2){
      amsterdam += 1;
    } else if (music === 3){
      newZealand += 1;
    } else if (music === 4){
      ibiza += 1;
    }

    if (school === 1){
      iceland += 1;
    } else if (school === 2){
      amsterdam += 1;
    } else if (school === 3){
      newZealand += 1;
    } else if (school === 4){
      ibiza += 1;
    }

    if (iceland >= 3){
      $('#columnA').removeClass("col-sm-offset-4");
      $('#newZealand').hide();
      $('#ibiza').hide();
      $('#amsterdam').hide();
      $('#iceland').fadeIn();
    } else if (amsterdam >= 3) {
      $('#columnA').removeClass("col-sm-offset-4");
      $('#newZealand').hide();
      $('#ibiza').hide();
      $('#iceland').hide();
      $('#amsterdam').fadeIn();
    } else if (newZealand >= 3) {
      $('#columnA').removeClass("col-sm-offset-4");
      $('#iceland').hide();
      $('#ibiza').hide();
      $('#amsterdam').hide();
      $('#newZealand').fadeIn();
    } else if (ibiza >= 3){
      $('#columnA').removeClass("col-sm-offset-4");
      $('#iceland').hide();
      $('#newZealand').hide();
      $('#amsterdam').hide();
      $('#ibiza').fadeIn();
    } else {
      alert("Hmm... We couldn't figure you out.  Please try again.")
    }
  });
});

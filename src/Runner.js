(params) => {
  var vacationEvent = api.run("this.OnVacationToday");
  var onVacation = false;
  if (vacationEvent.length > 0) {
    api.run("this.slack_set_vacation");
    onVacation = true;
  } else {
   	api.run("this.slack_clear_status"); 
  }
  
  return {
    onVacation: onVacation;
  };
}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */
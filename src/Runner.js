(params) => {
  var vacationEvent = api.run("this.OnVacationToday")[0];
  var onVacation = false;
  if (vacationEvent.summary) {
    api.run("this.slack_set_vacation");
    onVacation = true;
  } else {
   	api.run("this.slack_clear_status"); 
  }
  
  return {
    onVacation: onVacation
  };
}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */
(params) => {
  var vacationEvent = api.run("this.OnVacationToday");
  if (vacationEvent.length > 0) {
    api.run("this.slack_set_vacation");
  } else {
   	api.run("this.slack_clear_status"); 
  }
  
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */
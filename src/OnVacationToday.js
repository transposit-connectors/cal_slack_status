(params) => {
  var moment = require('moment-timezone-with-data.js');
  var today = moment();
  var tomorrow = moment().add(1, 'days');
  
  var sqlQuery = "SELECT summary, start FROM google_calendar.get_calendar_events" +
      "  WHERE calendarId='primary'" +
      "  AND timeMin ='" + today.format() + "'" +
      "  AND timeMax ='" + tomorrow.format() + "'" +
      "  AND q in ('PTO', 'DTO', 'Vacation')" +
      "  LIMIT 1";
  
  return api.query(sqlQuery);
}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */
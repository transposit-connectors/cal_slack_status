(params) => {
  var moment = require('moment-timezone-with-data.js');  
  var timezone = api.query("SELECT timeZone from google_calendar.get_calendar WHERE calendarId= 'primary'")[0].timeZone;
  var today = moment().tz(timezone);
  
  var sqlQuery = "SELECT summary FROM google_calendar.get_calendar_events" +
      "  WHERE calendarId='primary'" +
      "  AND timeMin ='" + today.startOf("day").format() + "'" +
      "  AND timeMax ='" + today.endOf("day").format() + "'" +
      "  AND q IN ('PTO', 'DTO', 'Vacation')" +
      "  LIMIT 20";
  
  return api.query(sqlQuery);
}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */
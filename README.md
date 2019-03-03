# Slack Vacation Helper

This app will change your Slack status to "On vacation" if your Google Calendar says you are.

To use it: go to the [hosted app](https://cal-slack-status-p7i9u.transposit.io/), sign in, and add authenticate with your Google Calendar and Slack accounts. That's it! (If you want to test that it really works, create a Calendar event with the title "Vacation" for today and refresh the hosted app page.)

## How it's built:

A scheduled task runs every day in the morning to check each signed-in user's calendar for the day. This is done in the `OnVacationToday` operation, which uses a combination of JavaScript to get the formatted times and SQL to execute the Google Calendar call. If there's an event that has the words "PTO", "DTO", or "Vacation" in it, we'll assume the user's on vacation and change their slack status. If there's no such event, we'll clear the user's slack status.

## Make this app your own:
Fork this app to get your own personal copy. You could add a feature to change the user's status every time they're in a meeting. Or, if you add a data-store connector like Airtable, you could let the user customize their vacation message.






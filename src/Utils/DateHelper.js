import moment from "moment";

const TIMESTAMP_FORMAT = "x";

export function timeStampX() {
  return moment().format(TIMESTAMP_FORMAT);
}

export function minutesSinceTime(prev) {
  let now = timeStampX();
  let momentdiff = moment().diff(moment(prev, TIMESTAMP_FORMAT), "minutes");

  return momentdiff;
}

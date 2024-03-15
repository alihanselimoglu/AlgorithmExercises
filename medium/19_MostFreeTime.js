/*************************************************************************
 *                                                                        *
 *  Using the JavaScript language, have the function MostFreeTime(strArr) *
 *  read the strArr parameter being passed which will represent a full    *
 *  day and will be filled with events that span from time X to time Y in *
 *  the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM.      *
 *  For example, strArr may be                                            *
 *  ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program *
 *  will have to output the longest amount of free time available         *
 *  between the start of your first event and the end of your last event  *
 *  in the format: hh:mm. The start event should be the earliest event    *
 *  in the day and the latest event should be the latest event in the     *
 *  day. The output for the previous input would therefore be 01:30       *
 *  (with the earliest event in the day starting at 09:10AM and the       *
 *  latest event ending at 02:45PM). The input will contain at least 3    *
 *  events and the events may be out of order.                            *
 *                                                                        *
 *************************************************************************/

export function MostFreeTime(strArr) {
  const newArr = [];
  let mostFree = 0;
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(toMinute(strArr[i].split('-')[0]));
    newArr.push(toMinute(strArr[i].split('-')[1]));
  }

  for (let i = 1; i < newArr.length; i += 2) {
    let min = newArr[i + 1] - newArr[i];
    if (mostFree < min) mostFree = min;
  }

  return toHour(mostFree);
}

function toMinute(str) {
  let hour = str.split(':')[0];
  let minute = str.split(':')[1].slice(0, -2);
  let sumMinute = 0;
  if (hour != 12) sumMinute += Number(hour * 60);
  sumMinute += Number(minute);
  if (str.includes('PM')) sumMinute += 720;

  return sumMinute;
}

function toHour(num) {
  let min = (num % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let hour = ((num - min) / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

  return hour + ':' + min
}

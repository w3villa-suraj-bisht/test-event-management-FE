export const convertTo12Hour = (timeArray: string[]): string[] =>
  timeArray.map((time: string): string => {
    const [hours, minutes]: string[] = time.split(":");
    let hour: number = parseInt(hours);
    let period: string = "AM";

    if (hour >= 12) {
      period = "PM";
      if (hour > 12) hour -= 12;
    }

    if (hour === 0) hour = 12;

    return `${hour}:${minutes} ${period}`;
  });

  export const convertTo24Hour = (timeArray: string[]): string[] =>
    timeArray.map((time: string): string => {
      let [timePart, period]: string[] = time.split(' ');
      let [hours, minutes]: string[] = timePart.split(':');
      let hour: number = parseInt(hours);
  
      if (period === 'AM' && hour === 12) {
        hour = 0;
      } else if (period === 'PM' && hour < 12) {
        hour += 12;
      }
  
      const hourString = hour < 10 ? `0${hour}` : `${hour}`;
  
      return `${hourString}:${minutes}`;
    });

export const isValidTime = (value: any) => {
  const regex = /^(?:[0-5]\d):(?:[0-5]\d)$/;
  return regex.test(value);
};

export const validateTimeInput = (input: any) => {
  let value = input.replace(/[^\d:]/g, '');

  if (value.length > 5) {
    value = value.slice(0, 5);
  }

  // Add colon if needed
  if (value.length > 2 && !value.includes(':')) {
    value = value.slice(0, 2) + ':' + value.slice(2);
  }

  // Handle backspace
  if (value.length === 3 && value.includes(':')) {
    value = value.slice(0, 2);
  }

  // Validate minutes and seconds
  const [minutes, seconds] = value.split(':');

  if (minutes && parseInt(minutes) > 59) {
    value = '59' + (value.includes(':') ? value.slice(2) : '');
  }

  if (seconds && parseInt(seconds) > 59) {
    value = value.slice(0, 3) + '59';
  }

  return value;
};
export const capitalizeFirstLetter = (input: string) => {
  if (!input) return input;
  if (input == 'PRE_SELECTION') {
    return "Pre-selection"
  } else {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }
};

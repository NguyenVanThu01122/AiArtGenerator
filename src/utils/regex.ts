export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  username: /^[a-zA-Z0-9]{3,}$/,
  name: /^[a-zA-Z]{3,}$/,
  phone: /^[0-9]{10,}$/,
  number: /^[0-9]*$/,
  url: /^(http|https):\/\/[^ "]+$/,
  date: /^\d{4}-\d{2}-\d{2}$/,
  time: /^\d{2}:\d{2}$/,
  dateTime: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
  alpha: /^[a-zA-Z]*$/,
  alphaNumeric: /^[a-zA-Z0-9]*$/,
};

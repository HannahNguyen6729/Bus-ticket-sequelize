const callBackFunction = (errors, value) => {
  if (errors) {
    return new Error(errors);
  }
  console.log(value);
  return value;
};
callBackFunction(null, "./public");

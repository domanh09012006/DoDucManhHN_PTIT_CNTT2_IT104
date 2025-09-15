type Callback = (message: string) => void
const checkCondition = (condition: boolean, callback: Callback): void => {
  const run = () => {
    if (condition) {
      callback("Dung");
    } else {
      callback("SAI");
    }
    setTimeout(run, 1000)
  };

  run()
}
const printMessage: Callback = (message: string): void => {
  console.log(message);
}
checkCondition(true, printMessage)

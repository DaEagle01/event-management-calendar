export const generateEventId = () => {
    let timestamp = Date.now(); // current time as a string
    let randomNum = Math.floor(Math.random() * 1000); // random number
    return `${timestamp}-${randomNum}`;
}

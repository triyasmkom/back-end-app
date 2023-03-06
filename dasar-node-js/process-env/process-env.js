const cpuInformation = process.memoryUsage();

console.log(cpuInformation);

// node app.js harry potter
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

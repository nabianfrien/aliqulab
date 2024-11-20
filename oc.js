const mainPid = process.pid;

console.log(`The current process ID is: ${mainPid}`);

// Example of usage:
setTimeout(() => {
    console.log(`The process with ID ${mainPid} is still running.`);
}, 5000);

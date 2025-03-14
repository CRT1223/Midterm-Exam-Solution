function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 2000);
}

delayedGreeting("Peter"); // This will print "Hello, Peter!" after 2 seconds

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Trying to think of cool shit to say!');
    await sleep(5000);
  }
}

main();

const TEXT = process.env.PHRASE
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(TEXT);
    await sleep(5000);
  }
}

main();

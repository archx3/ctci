/**
 * sleep
 * @description sleep for a given number of milliseconds before resolving the promise with undefined value after the given number of milliseconds has elapsed since the promise started sleeping. This is useful for testing purposes. It is also useful for delaying execution of a function. For example, if you want to delay execution of a function for 100 milliseconds, you can do this: await sleep(100) and then call the function you want to delay execution for.
 * @param millis
 * @returns {Promise<unknown>}
 */

async function sleep(millis) {
  let timeout;
  return new Promise(function (resolve, reject) {
    timeout = setTimeout(() => {
      clearTimeout(timeout)
      resolve();
    }, millis)
  })
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

const BASE_URL = "http://localhost:9000";
const TOTAL_REQUESTS = 10000;
const CONCURRENCY = 25; // DB-safe load

async function runTest(endpoint) {
  console.log(`\n🚀 Starting test for ${endpoint}`);
  console.log(`Total requests: ${TOTAL_REQUESTS}`);
  console.log(`Concurrency   : ${CONCURRENCY}\n`);

  let inFlight = 0;
  let completed = 0;

  let times = [];
  let successCount = 0;
  let failureCount = 0;

  return new Promise((resolve) => {
    function next() {
      while (
        inFlight < CONCURRENCY &&
        completed + inFlight < TOTAL_REQUESTS
      ) {
        inFlight++;

        fetch(`${BASE_URL}${endpoint}`)
          .then(async (res) => {
            if (!res.ok) {
              throw new Error(`HTTP ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            successCount++;
            times.push(data.elapsed);
          })
          .catch((err) => {
            failureCount++;
            console.error(`❌ Failed request: ${err.message}`);
          })
          .finally(() => {
            inFlight--;
            completed++;

            if (completed === TOTAL_REQUESTS) {
              const avg =
                Math.round(
                  (times.reduce((a, b) => a + b, 0) / times.length) * 100
                ) / 100;

              const min = times.length ? Math.min(...times) : 0;
              const max = times.length ? Math.max(...times) : 0;

              console.log(`\n✅ ${endpoint} TEST COMPLETE`);
              console.log(`Success requests : ${successCount}`);
              console.log(`Failed requests  : ${failureCount}`);
              console.log(`Avg latency      : ${avg} ms`);
              console.log(`Min latency      : ${min} ms`);
              console.log(`Max latency      : ${max} ms`);

              resolve();
            } else {
              next();
            }
          });
      }
    }
    next();
  });
}

(async () => {
  console.log("🔥 Warming up connection pool...");
  for (let i = 0; i < 50; i++) {
    await fetch(`${BASE_URL}/pool`).catch(() => {});
  }

  await runTest("/old");
  await runTest("/pool");

  console.log("\n🎯 LOAD TEST FINISHED");
})();

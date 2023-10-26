// <reference lib="webworker" />

addEventListener('message', async ({ data }) => {
  postMessage({
    received: data,
    complete: true
  });
});
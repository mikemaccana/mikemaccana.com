const log = console.log.bind(console);

const contentTypeHandlers = {
  "application/json": (response) => response.json(),
  "text/plain": (response) => response.text(),
  "text/markdown": (response) => response.text(),
  "text/html": (response) => response.text(),
};

export const http = {
  get: async function (url) {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type").split(";")[0];
    if (Object.keys(contentTypeHandlers).includes(contentType)) {
      // Sadly we can't override the inbuilt useless raw 'body'
      response.decodedBody = await contentTypeHandlers[contentType](response);
    } else {
      log(`Unknown content type: ${contentType}`);
    }
    if (!response.ok) {
      throw new Error(`oh no response didn't work`);
    }
    return response;
  },
};

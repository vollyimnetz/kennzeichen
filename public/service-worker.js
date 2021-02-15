import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { setCatchHandler } from 'workbox-routing';

workbox.setConfig({modulePathPrefix: '/third-party/workbox-v6.1.0' });

workbox.core.setCacheNameDetails({prefix: "kennzeichen"});
workbox.core.skipWaiting();

// Ensure your build step is configured to include /offline.html as part of your precache manifest.
precacheAndRoute(self.__WB_MANIFEST);


// Catch routing errors, like if the user is offline
setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('./index.html');
  }

  return Response.error();
});
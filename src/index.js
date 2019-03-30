'use strict';

(async () => {
  const alert =
    process.env.TYPE === 'node'
      ? await import(/* webpackChunkName: "alert-node" */ 'alert-node').then(
          ({ default: alert }) => alert
        )
      : window.alert;

  while (1) {
    alert('hi!');
  }
})();

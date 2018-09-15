import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'nextflowcomponent',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};

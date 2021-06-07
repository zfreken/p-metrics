import {getTTFB,getFCP} from 'web-vitals';

window.onload = () => {
  console.log('page is fully loaded');

  getFCP(console.log);

  getTTFB((metric) => {
    const requestTime = ( metric?.value - metric?.entries[0]?.requestStart );
    console.log('TTFB with web-vital:', requestTime);
  });

  let ttfb = ( window.performance?.timing?.responseStart - window.performance?.timing?.requestStart )
  let fcb =  window.performance.getEntriesByType('paint')[1];
  if (fcb) {
    console.log('FCB:',fcb.startTime);
  }
  console.log('TTFB:',ttfb);
  
  console.log('Dom Load Time:', window.performance?.timing?.domComplete -window.performance?.timing?.domLoading);

  const resourceTiming = window.performance.getEntriesByType('resource');
  if (resourceTiming) {
    const result = resourceTiming.filter(item => item.initiatorType === 'css').map(item => [item.initiatorType,item.name,item.duration]);
    console.table(result)
  }

};

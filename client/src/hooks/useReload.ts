import { useState } from 'react';

function useReload() {
  const [_, setReloadTrigger] = useState(false);
  return () => setReloadTrigger(prev => !prev);
}

export { useReload };

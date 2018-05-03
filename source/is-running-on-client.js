const isRunningOnClient =
  typeof window !== 'undefined' && window.document ? true : false;

export default isRunningOnClient;

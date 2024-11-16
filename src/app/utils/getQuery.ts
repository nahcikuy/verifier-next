type Query = {
  machine_code?: string
  activation_code?: string
}

const getQuery = () => {
  const usp = new URLSearchParams(window.location.search.slice())
  return Object.fromEntries(usp.entries()) as Query
}

export {type Query, getQuery};

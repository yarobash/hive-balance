export default (err: any) => {
  return Object.keys(err.errors).reduce((str, e, i, a) => {
    if (i < a.length - 1) return `${str}${err.errors[e].message}, `;
    return `${str}${err.errors[e].message}`;
  }, '');
};

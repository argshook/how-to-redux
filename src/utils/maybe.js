/* global Promise */
export default fn => new Promise((resolve, reject) => {
  try {
    const result = fn();
    if (result) {
      return resolve(result);
    }

    return reject(result);
  } catch (e) {
    reject(e);
  }
});

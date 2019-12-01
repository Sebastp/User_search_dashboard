/**
 * @param {string} email - string to check
 * @return {boolean} if string = valid email
 */
const validateEmail = (email: string | number): boolean => {
  if (typeof email != 'string') {
    return false
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export default validateEmail

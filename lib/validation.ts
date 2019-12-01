/**
 * @param {string} email - string to check
 * @return {boolean} if string = valid email
 */
export const validateEmail = (email: string | number): boolean => {
  if (typeof email != 'string') {
    return false
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * @param {string} value - string to check
 * @param {string} type - type of validation
 * @return {boolean} if string = valid
 */
export const validateQuery = (value: string, type: string | void): boolean => {
  if (!type) {
    return false
  }

  switch (type) {
    case 'login':
      return value.length > 2 //if lenght more than 2
      break
    case 'name':
      return value.length > 2 && !/\d/.test(value) //if contains num and lenght more than 2
      break
    case 'email':
      return validateEmail(value)
      break
    default:
      return false
  }
}

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

interface validationInterface {
  valid: boolean
  message: string | void
}

/**
 * @param {string} value - string to check
 * @param {string} type - type of validation
 * @return {boolean} if string = valid
 */
export const validateQuery = (
  value: string,
  type: string | void
): validationInterface => {
  let valid = true,
    message

  if (!type) {
    valid = false
  } else {
    switch (type) {
      case 'login':
        if (value.length < 2) {
          //if lenght shorter than 3
          valid = false
          message = 'Login is too short'
        }
        break
      case 'name':
        if (value.length < 2) {
          //if lenght shorter than 3
          valid = false
          message = 'Name is too short'
        } else if (/\d/.test(value)) {
          //if contains num
          valid = false
          message = 'Name should not contain numbers'
        }
        break
      case 'email':
        if (!validateEmail(value)) {
          //if not valid email
          valid = false
          message = 'Email is not valid'
        }
        break
      default:
        valid = false
    }
  }

  return {
    valid,
    message,
  }
}

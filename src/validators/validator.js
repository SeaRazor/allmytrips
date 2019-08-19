export default {
  emailRules () {
    return [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  },
  passwordRules (minLength) {
    return [
      v => !!v || 'Password is required',
      v =>
        (v && v.length >= minLength) ||
        'Password must be not less than ' + minLength + ' characters'
    ]
  },
  confirmRules (passwordToConfirm) {
    return [
      v => !!v || 'Password is required',
      v =>
        (v && v === passwordToConfirm) ||
        'Passwords should match'
    ]
  }
}

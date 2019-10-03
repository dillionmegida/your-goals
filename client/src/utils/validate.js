export const validator = state => {
  if (typeof state !== 'object') return new Error(`Invalid state object, expected and object but got ${JSON.stringify(state)}`)

  let valid = false

  if (!state.name || typeof state.name !== 'string' || state.name.length < 3) return valid
  if (!state.username || typeof state.username !== 'string' || state.username.length < 3) return valid
  if (!state.email || typeof state.email !== 'string' || state.email.length < 3) return valid
  if (!state.password || typeof state.password !== 'string' || state.password.length < 3) return valid
  if (!state.confirmPassword || state.confirmPassword !== state.password) return valid

  return valid = true
}
/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/new-verification']

/**
 * An array of routes that are used for authentication
 * Logged-in users will be redirected to /settings or /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  '/sign-in',
  '/sign-up',
  '/membership-module'
  // '/membership-module/my-profile'
  // '/error',
  // '/reset',
  // '/new-password'
]

/**
 * The prefix for API Authentication routes
 * Rotues that start with this prefix are used for API Authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'

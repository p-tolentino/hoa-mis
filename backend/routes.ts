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
  '/login',
  '/register'
<<<<<<< HEAD
  // '/admin/membership',
  // '/admin/membership/user-management',
  // '/admin/membership/association-contact-directory',
  // '/admin/membership/property-management',
  // '/admin/membership/membership-form',
  // '/admin/finance-management'
=======

  // Membership Module
  // '/admin/membership',
  // '/admin/membership/user-management/homeowners-directory',
  // '/admin/membership/user-management/admin-officers-directory',
  // '/admin/membership/property-management/browse-house-lots',
  // '/admin/membership/property-management/property-information-form',
  // '/admin/membership/user-registration/membership-form'
>>>>>>> 1-membership
]

/**
 * The prefix for API Authentication routes
 * Routes that start with this prefix are used for API Authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * Default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/user/setup'

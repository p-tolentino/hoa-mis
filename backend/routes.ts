/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/new-verification"];

/**
 * An array of routes that are used for authentication
 * Logged-in users will be redirected to /settings or /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  "/sign-in",
  "/sign-up",
  "/system-admin",
  "/system-admin/my-profile",
  "/system-admin/dashboard",
  "/system-admin/membership",
  "/system-admin/membership/user-management",
  "/system-admin/membership/association-contact-directory",
  "/system-admin/membership/membership-card",
  "/system-admin/membership/property-management",
  "/system-admin/finance-management",
  "/system-admin/community-engagement",
  "/system-admin/dispute-resolution",
  "/system-admin/violation-monitoring",
  "/system-admin/facility-reservation",
  "/system-admin/maintenance-handling",
  "/system-admin/election-management",
  "/system-admin/settings",
];

/**
 * The prefix for API Authentication routes
 * Routes that start with this prefix are used for API Authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";

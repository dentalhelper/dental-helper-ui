export const environment = {
  production: true,
  api: 'https://dental-helper-api.herokuapp.com',

  tokenWhitelistedDomains: [new RegExp('dental-helper-api.herokuapp.com')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};

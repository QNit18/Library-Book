export const oktaConfig = {
    clientId: '0oaei2g74oBL00eUa5d7',
    issuer: 'https://dev-64790387.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
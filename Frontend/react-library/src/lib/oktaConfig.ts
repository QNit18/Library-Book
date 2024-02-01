export const oktaConfig = {
    // clientId: '0oaei2g74oBL00eUa5d7',
    clientId:'0oaeukjq2ceOfGjwt5d7',
    // issuer: 'https://dev-64790387.okta.com/oauth2/default',
    issuer:'https://dev-68061772.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
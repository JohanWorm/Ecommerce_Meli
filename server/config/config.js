const apiConfig = {
    port: process.env.APP_PORT || 3002,
    host: process.env.APP_HOST || '127.0.0.1',
    apiMeli: {
        url: 'https://api.mercadolibre.com/',
        region: 'sites/MLA'
    },
    getAuthor: () => ({
        name: 'Johan',
        lastname: 'Cuberos'
    })
}

export { apiConfig };
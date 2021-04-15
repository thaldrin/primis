module.exports = {
    async rewrites() {
        return [
            {
                source: '/invite',
                destination: 'https://discordapp.com/oauth2/authorize?client_id=434662676547764244&scope=bot&permissions=379968',
            },
        ]
    },
}
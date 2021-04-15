module.exports = {
    async rewrites() {
        return [
            {
                source: '/invite',
                destination: 'https://t8.pm/legacy-invite',
            },
            {
                source: '/support',
                destination: 'https://discord.gg/xNAcF8m',
            },
            {
                source: '/source',
                destination: 'https://werewolf.codes/t/thaldrin',
            },
        ]
    },
}
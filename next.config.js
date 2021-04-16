module.exports = {
    // future: {
    //     webpack5: true
    // },

    async rewrites() {
        return [
            // ! API Rewrites


            // ! Important Rewrites, though they could also be Redirects

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
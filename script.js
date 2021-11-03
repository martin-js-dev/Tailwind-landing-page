const setup = () => {
    return {
        isNavOpen: false,

        billPlan: 'monthly',

        plans: [
        {
            name: 'Easy',
            discretion: 'All the basics for businesses that are just getting started.',
            price: {
            monthly: 29,
            annually: 29 * 12 - 199,
            },
            features: ['One project', 'Your dashboard'],
        },
        {
            name: 'Basic',
            discretion: 'Better for growing businesses that want more customers.',
            price: {
            monthly: 59,
            annually: 59 * 12 - 100,
            },
            features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts'],
        },
        {
            name: 'Custom',
            discretion: 'Advanced features for pros who need more customization.',
            price: {
            monthly: 139,
            annually: 139 * 12 - 100,
            },
            features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support'],
        },
        ],
    }
}

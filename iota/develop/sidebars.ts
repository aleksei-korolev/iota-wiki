module.exports = {
    develop: [
      {
        type: 'category',
        label: 'Smart Contracts',
        collapsed: true,
        items: [
            {
                label: 'Documentation',
                type: 'link',
                href: '/smart-contracts/overview',
            },
            {
                label: 'Node (WASP)',
                type: 'link',
                href: '/smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
                label: 'Schema Tool',
                type: 'link',
                href: '/smart-contracts/guide/schema'
            }
        ],
      },
      {
        type: 'category',
        label: 'Libraries',
        collapsed: true,
        items: [
            {
                label: 'Client.rs',
                type: 'link',
                href: '/iota.rs/welcome',
            },
            {
                label: 'Identity',
                type: 'link',
                href: '/identity.rs/introduction',
            },
            {
                label: 'Streams',
                type: 'link',
                href: '/streams/welcome',
            },
            {
                label: 'Stronghold',
                type: 'link',
                href: '/stronghold.rs/welcome',
            },
            {
                label: 'Wallet.rs',
                type: 'link',
                href: '/wallet.rs/welcome',
            },
        ],
      },
      {
        type: 'category',
        label: 'Nodes',
        collapsed: true,
        items: [
            'nodes/about-nodes',
            'nodes/become-a-node-operator',
            'nodes/node-software',
            'nodes/api_reference',
            {
              type: 'category',
              label: 'Explanations',
              collapsed: false,
              items: [
                  'nodes/explanations/nodes_101',
                  'nodes/explanations/security_101',
              ]
            },
        ],
      },
      {
        type: 'category',
        label: 'Node Software',
        collapsed: true,
        items: [
            {
                label: 'Hornet',
                type: 'link',
                href: '/hornet/welcome',
            },
            {
                label: 'Bee',
                type: 'link',
                href: '/bee/welcome',
            },
        ],
      },
      {
        type: 'link',
        label: 'Chronicle',
        href: '/chronicle/welcome',   
      },
      {
        type: 'category',
        label: 'Networks',
        items: [
            'networks/iota-1.5-chrysalis',
            'networks/iota-2.0-coordicide',
            'networks/testnets',
            'networks/network-token-migration',
            {
                type: 'link',
                label: 'Chrysalis',
                href:  '/introduction/welcome'
            },
        ],
      },
      {
        type: 'link',
        label: 'Tutorials',
        href: '/tutorials',
      },
    ]
  };
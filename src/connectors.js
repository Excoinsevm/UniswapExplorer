import { InjectedConnector } from '@web3-react/injected-connector'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    7171, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    97,
  ],
})

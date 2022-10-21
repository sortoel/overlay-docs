# Oracles

Pricing data on Overlay markets is based on values intermittently fetched from oracles. Oracles are third-party services that help protocols get information/data (related to price data or other data) required from outside of the protocol’s smart contract ecosystem. Any tool that helps get price data about an asset is a “price oracle.” Overlay has the ability to onboard nearly any oracle, as long as the oracle feed is non-manipulable and non-predictable. 


> TIP   
> To learn more about oracles, a great place to start is the Ethereum Foundation's doc on oracles [here](https://ethereum.org/en/developers/docs/oracles/) or Chainlink's introduction [here](https://chain.link/education/blockchain-oracles).


The first oracle that will be used by Overlay is the Uniswap v3 TWAP oracle. Overlay markets using this oracle will use the price feed from pre-existing market pairs on Uniswap v3. Which market pairs will be onboarded as Overlay markets will be decided through governance.  TWAP oracles help deter frontrunning of the oracle feed and protect the protocol from price oracle attacks.


> TIP    
> To learn more about Uniswap v3 TWAP oracles, a great place to start is Uniswap's doc on TWAP oracles [here](https://ethereum.org/en/developers/docs/oracles/) and Chaos Labs' more accessible writeup [here](https://chaoslabs.xyz/posts/chaos-labs-uniswap-v3-twap-deep-dive-pt-1).


The second type of oracle to be implemented by Overlay would be Chainlink oracle feeds. Adding Chainlink feeds would help provide Overlay with the ability to offer any market/data stream available on Chainlink. This would also offer the protocol the ability to offer non-traditional markets based on data streams, like the Consumer Price Index (CPI), a metric for the level of inflation. Adding Chainlink oracles and other markets are a governance decision. 

<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Oct 18, 2022</strong></em></p>

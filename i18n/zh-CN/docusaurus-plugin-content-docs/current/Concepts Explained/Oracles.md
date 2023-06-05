# Oracles

Overlay市场的价格数据是基于从预言机间歇性获取的数值。预言机是帮助协议从智能合约生态外获取所需信息/数据（与价格数据或其他数据有关）的第三方服务。任何帮助获取资产价格数据的工具都是“价格预言机”。只要数据源是不可操纵和不可预测的，Overlay就有能力接入几乎任何预言机。


> 提示   
> 要了解更多关于预言机的信息，可以访问以太坊基金会的预言机[文档](https://ethereum.org/en/developers/docs/oracles/)或Chainlink的[介绍](https://chain.link/education/blockchain-oracles)。


Overlay将使用的第一个预言机是Uniswap v3 TWAP预言机。使用此预言机的Overlay市场将使用Uniswap v3上现有交易对的价格数据。哪些交易对会上线Overlay市场将由治理决定。TWAP预言机有助于防止对预言机数据源的抢先交易（frontrunning），保护协议免受价格预言机的攻击。


> 提示    
> 要了解更多关于Uniswap v3 TWAP预言机的信息，可以从Uniswap的TWAP预言机[文档](https://ethereum.org/en/developers/docs/oracles/) 或Chaos Labs的更通俗易懂的[文章](https://chaoslabs.xyz/posts/chaos-labs-uniswap-v3-twap-deep-dive-pt-1)开始。


Overlay将实施的第二种预言机类型是Chainlink预言机数据源。添加Chainlink预言机源将有助于Overlay提供Chainlink上可用的任何市场/数据流的能力。这也将允许协议提供基于数据流的非传统市场，例如消费者价格指数（CPI），即通货膨胀水平的衡量标准。同样的，添加Chainlink预言机源和其他市场是社区治理决定。

<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Oct 18, 2022</strong></em></p>

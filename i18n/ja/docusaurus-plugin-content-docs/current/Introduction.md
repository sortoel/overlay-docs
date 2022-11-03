---
slug: /
sidebar_position: 1
---

# Overlayの紹介


## Overlayってなに？

Overlay ProtocolはEthereum上に構築された分散型プラットフォームで、従来のカウンターパーティ（流動性供給者やマーケットメーカー）をポジションの反対側として相手取ることなく、マーケットやデータストリーム上でポジションを構築する能力をユーザーに提供します。理想的には、（i）価格データフィードと（ii）非操作可能かつ非予測可能なデータフィードに基づく市場を提供するプロトコルです。



> 参考情報
> Overlay Protocol の詳細については、[ホワイトペーパー](https://planckcat.mypinata.cloud/ipfs/QmVMX7DH8Kh22kxMyDFGUJcw1a3irNPvyZBtAogkyJYJEv)を参照してください。




## マーケットの種類

Overlayは、価格データフィードと操作不可能および予測不可能なデータフィードに基づいて、数種類のマーケットを提供することを目的としています。これには以下が含まれます：


* ハッシュレート、ガス、BTC難易度、NFTフロア、ソーシャルトークン、イールドレートなどのポジションをユーザーが構築できる市場など、従来と異なった暗号資産に関わる市場
* eスポーツやスポーツ、スニーカー価格、スカラー社会・政治市場、自然・科学市場などの従来と異なった市場
* 従来同様の暗号資産市場
* その他多数

## Overlay はどのように取引相手のいない市場を提供しますか？

ユーザーはプロトコル全体に対して、つまり他のすべてのOVL保有者に対して、同時にポジションを構築します。これにより、Overlay市場は流動性プロバイダーや従来のスワップベースのカウンターパーティ（マーケットメーカーを含む）を必要とせずに、多くの流動性を持つことができます。このメカニズムがもたらす潜在的なOVLインフレリスクを否定するプロトコルの詳細については、こちらの記事を参照してください。

## オラクルフィードに基づく価格設定

Overlay市場の価格設定は、従来の意味で、動的なものではなく、オラクルから断続的に取得される値に基づいています。オラクルから取得される値は、プロトコルに組み込まれたメカニズムによって調整されます（詳細については、Overlayの価格設定に関する記事をご覧ください）。Overlayは、オラクルからの取得値が操作不可能かつ予測不可能である限り、ほぼすべてのオラクルを搭載可能です。

## 取引はどのように行われますか（例えば、担保と PnLは）？

ユーザーは、OVL をOverlay市場におけるポジションの担保としてロックする必要があります。PnLはOVL建てで支払われます。OVLはプロトコルによって生成され、ポジションの利益が上がればPnLとしてユーザーに送られますが、一方、ポジションの利益が無ければ、ロックされたOVLは（損失の範囲内で）燃やされます。


## OVL

OVL is the proposed native token of Overlay Protocol. It is an ERC-20 token on the Ethereum Mainnet. OVL serves a dual purpose and will be used to participate in trading and DAO governance after launch. OVL acts as liquidity and governance in the Overlay system - all PnL for users is denominated in OVL, creating a flywheel effect where utility, liquidity and community incentives are fed back into the system. For more on OVL, please refer to our section on OVL here.


## Nature of Contracts entered by users

Positions on Overlay Protocol resemble perpetual futures contracts (perps) - similar to perps, the contracts keep rolling over, with no expiration date or actual settlement. However, contracts offered on Overlay markets have several key features differing from conventional perps. For more on this, please refer to our section on this.


> DISCLAIMER
> Building positions can result in financial loss, especially with the use of leverage. Do your research about Overlay Protocol and the markets it offers before deploying your resources. A good rule of thumb is to not build positions with more than you can afford to lose. Overlay Protocol is a nascent and untested technology. While measures have been taken to secure the code/network/protocol, that does not ensure real funds cannot be lost.


<p style={{textAlign: 'right'}}>
<em>Last updated on <strong>Oct 18, 2022</strong></em></p>

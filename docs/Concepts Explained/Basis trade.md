---
sidebar_position: 3
---
# Basis Position


## Introduction

The basis position on Overlay enables users to earn yield on delta neutral positions. If a user takes a position on Overlay that earns funding, the user can hedge that position (by opening a second position of the same size on the opposite side of the market), and get paid funding rates while maintaining no/minimal market exposure. 


> WARNING      
> EXECUTING THE BASIS POSITION REQUIRES CONSTANT SUPERVISION OF POSITIONS TAKEN AND THE FUNDING RATES INVOLVED.



## When is funding paid to users on Overlay Markets?

If the open interest (OI) of long positions is greater than the OI of short positions on an Overlay market, short positions earn funding on that market. The opposite also holds true, if OI of shorts are greater than that of longs. 


<table>
  <tr>
   <td>OI imbalance
   </td>
   <td>Funding paid to
   </td>
  </tr>
  <tr>
   <td>OI<sub>shorts</sub> > OI<sub>longs</sub>
   </td>
   <td>Longs
   </td>
  </tr>
  <tr>
   <td>OI<sub>longs</sub> > OI<sub>shorts</sub>
   </td>
   <td>Shorts
   </td>
  </tr>
</table>



## Executing the basis position using Overlay

To execute the basis position, a user may

(i) take a position on the side of an Overlay market that is currently earning funding (only one earns funding at any given time), and then 

(ii) take a converse position to hedge out the market exposure of the first position by using



* spot assets
* perps
* lending markets


## Purpose of the basis position on Overlay

Funding is paid on traditional crypto exchanges offering perpetual futures (perps, the most popular derivative contract in crypto) in order to make the price of the perp contract trend towards the spot price of the underlying asset. Funding rates incentivise users to take positions on a particular side of the market in order to reduce the “basis”, that is, the gap between the spot price and the derivative price of an asset.


> To learn more about the basis trade and how to execute it on Overlay, please read our detailed article on that [here](https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/BWarv3spOc4YLQBLM7DlchqOzYt6-v2fpF378mRKzpU).


However, pricing on Overlay occurs through an oracle fetch. Funding rates are not required to bring the price of the derivative in line with the spot asset - price data for assets is simply fetched from oracle feeds. 


> To learn more about oracles on Overlay, please refer to our docs here


Overlay requires funding rates in order to narrow OI imbalances between the long and short side of a market. Due to the mechanics of PnL being paid out by the protocol in the form of OVL, passive OVL holders face the potential of OVL inflation risk in case of OI imbalances - this risk increases the greater the OI imbalance. The funding rates are used to narrow the OI imbalances as much as possible, thus reducing OVL inflation risks.  

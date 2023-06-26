# 智能合约审计

Overlay的v1合约已经经过了两次审计，首先是由[Spearbit](https://spearbit.com/)进行的，然后是[Least Authority](https://leastauthority.com/)。

<table>
  <tr>
   <td><strong>审计公司</strong>
   </td>
   <td><strong>日期</strong>
   </td>
   <td><strong>报告</strong>
   </td>
  </tr>
  <tr>
   <td>Spearbit
   </td>
   <td>2022年5月5日
   </td>
   <td><a href="https://github.com/spearbit/portfolio/blob/master/pdfs/Overlay-Spearbit-Security-Review.pdf">Spearbit Overlay安全审查</a>
   </td>
  </tr>
  <tr>
   <td>Least Authority
   </td>
   <td>2022年6月8日
   </td>
   <td><a href="https://github.com/overlay-market/v1-core/blob/main/audits/leastauthority/audit.pdf">Least Authority安全审计报告</a>
   </td>
  </tr>
</table>

## _Spearbit_

Spearbit Overlay安全审查历时23天，审查了Overlay市场[合约](https://github.com/overlay-market/)。在此次审查中，Spearbit发现了31个问题，其中21个问题是矿工费优化和信息问题相关的，没有发现重大风险问题。

<table>
  <tr>
   <td><strong>类型</strong>
   </td>
   <td><strong>问题数量</strong>
   </td>
   <td><strong>状态</strong>
   </td>
  </tr>
  <tr>
   <td>关键风险
   </td>
   <td>0
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>高风险
   </td>
   <td>2
   </td>
   <td>已修复
   </td>
  </tr>
  <tr>
   <td>中风险
   </td>
   <td>2
   </td>
   <td>已修复
   </td>
  </tr>
  <tr>
   <td>低风险
   </td>
   <td>5
   </td>
   <td>已修复
   </td>
  </tr>
</table>

## _Least Authority_

Least Authority的初步代码审查于2022年4月4日至5月9日进行，审查了[此处](https://github.com/overlay-market/v1-core)的代码存储库。Least Authority的报告对他们的方法和Overlay的代码有一些评论。

Least Authority向Overlay提出了9个建议，其中4个得到了解决。其中五个建议与代码质量和最佳实践有关，其中有4个已得到解决。3个建议涉及系统设计和测试。最后一个建议涉及更好的协议文档，Overlay正在解决这个问题。

以下是一些选定的摘录：

“常规评论”部分：

_“...我们的团队试图通过执行一次闪电贷攻击来强制清算现有头寸。该攻击试图建立大量后续头寸，以导致现有头寸失去价值。然而，这种攻击被熔断机制阻止了。我们观察到maintenanceMarginFraction 和 liquidationFeeRate 两个风险参数在防止闪电贷攻击方面至关重要，且应通过安全的治理机制谨慎设置。_

_我们还试图创建许多小头寸作为替代方法来操纵现有头寸的价值，但发现燃气成本太高。鉴于访问数据流创建机制的能力没有受到保护，我们探索griefing攻击可能造成的危害，但没有发现任何问题。我们的团队发现该协议设计良好且实现得很好。但是，该项目基于复杂的金融结构，大大增加了审计复杂性。”_

“系统设计”部分：

_“我们发现在Overlay协议的设计中，安全性得到了考虑，这通过对角色的仔细划分和授予权限得以体现。我们团队注意到，输入验证已经在恰当的地方实施，此外还有一些阻止攻击的机制，如上限、基差和由协议治理设置的市场相关参数...“_

_Overlay的代码组织良好，遵循最佳实践，例如通过合理分配存储变量来优化存储空间，将逻辑移入库以最小化代码，适当使用require函数确保合约状态转换的有效性，以及使用接口提高可读性并通过抽象代码功能来促进代码推理...“_

“代码质量”部分：

_Overlay的代码组织良好，遵循最佳实践，例如通过合理分配存储变量来优化存储空间，将逻辑移入库以最小化代码，适当使用require函数确保合约状态转换的有效性，以及使用接口提高可读性并通过抽象代码功能来促进代码推理。_







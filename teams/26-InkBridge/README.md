InkBridge

InkBridge 使用Wasm合约技术构建转接桥。可以部署到所有支持Wasm合约的平行链，把多条公链(BTC, ETH等)的转接桥下沉为平台，而不是单一应用。社区项目方可以调用合约形态存在的已有功能，还可以使用合约改造已有功能。我们仅提供转接桥的基础功能，支持自定义格式的跨链交易验证，交由上层应用自由发挥产品。

以比特币转接桥为例，任何人都可以提交比特币区块头，InkBridge合约可以根据PoW难度验证并得出最长链。任何人都可以申请比特币交易验证，合约可以根据Merkle证明验证是否在最长链上，并且得出确认块数。交易内容本身交给上层合约应用来定义和解析。
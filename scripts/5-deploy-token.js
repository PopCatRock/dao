import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x52f9EA85EBd3fAb3F60B7d7a227D20543b7E2243");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "HomeBuyingDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "SCAM",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("📛 Failed to deploy token module.", error);
  }
})();

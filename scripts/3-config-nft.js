import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x30aA5216bCBCb3bc6072B1e58FaC593117acD94F",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Credit is a Scam",
        description: "This NFT will give you access to HomeBuyingDAO.",
        image: readFileSync("scripts/assets/homebuying.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("📛 Failed to create the new NFT.", error);
  }
})()

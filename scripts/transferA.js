const hre = require("hardhat");

const CONTRACT_ADDRESS = "0xD324c3B60B94b9Fe8aaA66F4A44a5b3a3Dbcb811"; // 确保这是正确的合约地址

async function main() {
  const contractFactory = await hre.ethers.getContractFactory("Faucet");
  const contract = await contractFactory.attach(CONTRACT_ADDRESS);

  //   const amount = hre.ethers.utils.parseEther("0.1");

  try {
    const withdrawTransaction = await contract.withdraw(0);

    await withdrawTransaction.wait();

    console.log("Transaction hash:", withdrawTransaction.hash);
  } catch (error) {
    console.error("Error during contract interaction:", error);
    process.exitCode = 1;
  }
}

main();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);
  const DeFiWallet = await ethers.getContractFactory("DeFiWallet");
  const wallet = await DeFiWallet.deploy();
  await wallet.deployed();
  console.log("DeFiWallet deployed to:", wallet.address);
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});

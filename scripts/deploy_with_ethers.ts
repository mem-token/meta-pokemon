import { deploy } from './ethers-lib'

(async () => {
    try {
        const result = await deploy('MyToken', ['0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3','0x73c38e1498102Cd42E402511455e6F95F8Dd1606','0x73c38e1498102Cd42E402511455e6F95F8Dd1606'])
        console.log(`address: ${result.address}`)
    } catch (e) {
        console.log(e.message)
    }
  })()
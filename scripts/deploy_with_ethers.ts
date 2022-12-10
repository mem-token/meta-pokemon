import { deploy } from './ethers-lib'

(async () => {
    try {
        const result = await deploy('MyToken', ['0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3','0xA82bC8D792E20B74E0Dd81555b7b741A0cb13440','0xA82bC8D792E20B74E0Dd81555b7b741A0cb13440'])
        console.log(`address: ${result.address}`)
    } catch (e) {
        console.log(e.message)
    }
  })()

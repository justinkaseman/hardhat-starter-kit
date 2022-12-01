const creditScore = 99

// We must pad the start so that the length is always 32 bytes because Solidity data is encoded in 32 byte chunks
// (64 hex characters = 32 bytes)
const creditScoreAsUint = creditScore.toString(16).padStart(64, '0')

const addressWithout0x = '0x2334dE553AB93c69b0ccbe278B6f5E8350Db6204'.slice(2)

const scoreAndAddressHexString = creditScoreAsUint + addressWithout0x.padStart(64, '0')

// Values returned by the script must be encoded as a Buffer
const bytesToWriteOnChain = Buffer.from(scoreAndAddressHexString, 'hex')

return bytesToWriteOnChain

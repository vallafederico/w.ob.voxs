/* eslint-disable no-undef */
import {providers} from 'ethers';
import Moralis from 'moralis';

export async function getWalletAddress() {
  await ethereum?.request({method: 'eth_requestAccounts'});
  const provider = new providers.Web3Provider(ethereum);
  const [address] = await provider.listAccounts();
  return address;
}

// TODO these need to change for production
export const WALLET_API_URL = 'https://tcnnusd5pe.execute-api.us-east-1.amazonaws.com/staging'
export const MORALIS_SERVER_URL = 'https://tfbny1ckxvhi.usemoralis.com:2053/server';
export const SOULS_APP_ID = '1TAJesc6sdg4cBPl9NtNxTFryCFbFVo9GWmjcX8B';
export const IPFS_GATEWAY = 'https://vox.mypinata.cloud/ipfs/'
export const MORALIS_CHAIN = 'rinkeby'
export const SOULS_MINT_CONTRACT = '0xe078e649026c72ff9372e38097edfed100b7d501';

export async function getVOXs(walletAddress) {
  if (!walletAddress) {
    walletAddress = await getWalletAddress();
  }

  let result = await fetch(
    `${WALLET_API_URL}/api/wallet?address=${walletAddress}`,
    {
      method: 'GET',
    },
  ).then((response) => response.json());
  let flatData = []
  if (result && !result.error) {
    for (const key in result) {
      result[key].forEach((d) => flatData.push({...d, contract_type: "ERC721"}))
    }
  } else {
    console.error(result.error)
  }
  console.log('getVoxs', flatData)
  return flatData;
}

export const TokenTypeStrings = {
  ERC1155_STRING: "ERC1155",
  ERC721_STRING: "ERC721"
}

function rewriteIpfsUrl(url = '') {
  return url.replace('ipfs://', IPFS_GATEWAY);
}

export function normalizeUri(uri) {
  return /^ipfs:\/\//.test(uri) ? rewriteIpfsUrl(uri) : uri;
}

export function startMoralis() {
  const serverUrl = MORALIS_SERVER_URL;
  const appId = SOULS_APP_ID;
  Moralis.start({ serverUrl, appId });
}

async function signNfts(nfts, walletAddress) {
  try {
    const body = JSON.stringify({
      address: walletAddress,
      tokenInfo: nfts.map(({ tokenId, tokenAddress }) => ({ tokenId: tokenId.toString(), tokenAddress }))
    });
    return await fetch(
      `${WALLET_API_URL}/api/sign`,
      {
        headers: {'content-type': 'application/json'},
        method: 'POST',
        body }).then((response) => response.json());
  } catch (e) {
    console.log('signNfts error', e)
  }
}

export async function mint(nfts = [], walletAddress) {
  const signatureData = await signNfts(nfts, walletAddress);
  const multiple = nfts.length > 1;
  const functionName = multiple ? 'batchMintLunchboxes' : 'mintLunchbox';

  const contractOptions = {
    chain: MORALIS_CHAIN,
    contractAddress: SOULS_MINT_CONTRACT,
    functionName,
    abi: [
      {
        inputs: inputs(multiple),
        name,
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    params: params(walletAddress, multiple, signatureData, nfts),
    gasLimit: 100000,
  };

  await Moralis.enableWeb3();
  await Moralis.executeFunction(contractOptions)
}

function params(walletAddress, multiple, {signature, tokens}, nfts) {
  return {
    account: walletAddress,
    id: multiple ? nfts.map(o => o.tokenId) : nfts[0].tokenId,
    _contract: multiple ? nfts.map(o => o.tokenAddress) : nfts[0].tokenAddress,
    mintTime: multiple ? tokens.map((t) => t.mintedTime) : tokens[0].mintedTime,
    sig: signature
  }
}

function inputs(multiple) {
  return multiple ? [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    },
    {
      "internalType": "address[]",
      "name": "_contract",
      "type": "address[]"
    },
    {
      "internalType": "uint256[]",
      "name": "id",
      "type": "uint256[]"
    },
    {
      "internalType": "uint256[]",
      "name": "mintTime",
      "type": "uint256[]"
    },
    {
      "internalType": "bytes",
      "name": "sig",
      "type": "bytes"
    }
  ] : [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_contract",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "mintTime",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "sig",
      "type": "bytes"
    }
  ]
}
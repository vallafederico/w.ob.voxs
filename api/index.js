var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// app/signup/newsletter-signup.js
var require_newsletter_signup = __commonJS({
  "app/signup/newsletter-signup.js"(exports, module2) {
    init_react();
    var import_node = require("@remix-run/node");
    require("dotenv").config();
    var auth = process.env.AC_API_KEY;
    var baseURL = process.env.AC_BASE_URL;
    var subscribeHandler3 = async (email, context, callback) => {
      const tag = 82, headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-token": auth
      };
      const addContactOptions = {
        method: "POST",
        headers,
        body: JSON.stringify({
          contact: {
            email
          }
        })
      };
      try {
        const subResponse = await fetch(baseURL + "contact/sync", addContactOptions);
        if (!subResponse.ok) {
          throw new Error(`Error response from contact/sync: ${subResponse.status}: ${await subResponse.text()}`);
        }
        const contact = await subResponse.json();
        const contactTagsResponse = await fetch(baseURL + "contactTags", {
          method: "POST",
          headers,
          body: JSON.stringify({
            contactTag: { contact: contact.contact.id, tag }
          })
        });
        if (!contactTagsResponse.ok) {
          throw new Error(`Error response from contactTags: ${contactTagsResponse.status}: ${await contactTagsResponse.text()}`);
        }
        const responseTag = await contactTagsResponse.json();
        return {
          statusCode: 200,
          body: JSON.stringify({
            result: "Success V1"
          }),
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
          }
        };
      } catch (error) {
        console.error(error);
        return {
          statusCode: 500,
          body: error.message,
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
          }
        };
      }
    };
    module2.exports = { subscribeHandler: subscribeHandler3 };
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZC2ZMU2D.css";

// app/styles/global.css
var global_default = "/build/_assets/global-N32FFNVQ.css";

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/root.jsx
var import_react3 = require("react");

// app/web3.helpers.js
init_react();
var import_ethers = require("ethers");
var import_moralis = __toESM(require("moralis"));
async function getWalletAddress() {
  await (ethereum == null ? void 0 : ethereum.request({ method: "eth_requestAccounts" }));
  const provider = new import_ethers.providers.Web3Provider(ethereum);
  const [address] = await provider.listAccounts();
  return address;
}
var WALLET_API_URL = "https://tcnnusd5pe.execute-api.us-east-1.amazonaws.com/staging";
var MORALIS_SERVER_URL = "https://tfbny1ckxvhi.usemoralis.com:2053/server";
var SOULS_APP_ID = "1TAJesc6sdg4cBPl9NtNxTFryCFbFVo9GWmjcX8B";
var MORALIS_CHAIN = "rinkeby";
var SOULS_MINT_CONTRACT = "0xe078e649026c72ff9372e38097edfed100b7d501";
async function getVOXs(walletAddress) {
  if (!walletAddress) {
    walletAddress = await getWalletAddress();
  }
  let result = await fetch(`${WALLET_API_URL}/api/wallet?address=${walletAddress}`, {
    method: "GET"
  }).then((response) => response.json());
  let flatData = [];
  if (result && !result.error) {
    for (const key in result) {
      result[key].forEach((d) => flatData.push(__spreadProps(__spreadValues({}, d), { contract_type: "ERC721" })));
    }
  } else {
    console.error(result.error);
  }
  return flatData;
}
function startMoralis() {
  const serverUrl = MORALIS_SERVER_URL;
  const appId = SOULS_APP_ID;
  import_moralis.default.start({ serverUrl, appId });
}
async function signNfts(nfts, walletAddress) {
  try {
    const body = JSON.stringify({
      address: walletAddress,
      tokenInfo: nfts.map(({ tokenId, tokenAddress }) => ({ tokenId: tokenId.toString(), tokenAddress }))
    });
    return await fetch(`${WALLET_API_URL}/api/sign`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body
    }).then((response) => response.json());
  } catch (e) {
    console.log("signNfts error", e);
  }
}
async function mint(nfts = [], walletAddress) {
  if (!nfts.length)
    return;
  const signatureData = await signNfts(nfts, walletAddress);
  const multiple = nfts.length > 1;
  const name = multiple ? "batchMintLunchboxes" : "mintLunchbox";
  const contractOptions = {
    chain: MORALIS_CHAIN,
    contractAddress: SOULS_MINT_CONTRACT,
    functionName: name,
    abi: [
      {
        inputs: inputs(multiple),
        name,
        outputs: [],
        stateMutability: "payable",
        type: "function"
      }
    ],
    params: params(walletAddress, multiple, signatureData, nfts),
    gasLimit: 1e5
  };
  await import_moralis.default.enableWeb3();
  await import_moralis.default.executeFunction(contractOptions);
}
function params(walletAddress, multiple, { signature, tokens }, nfts) {
  return {
    account: walletAddress,
    id: multiple ? nfts.map((o) => o.tokenId) : nfts[0].tokenId,
    _contract: multiple ? nfts.map((o) => o.tokenAddress) : nfts[0].tokenAddress,
    mintTime: multiple ? tokens.map((t) => t.mintedTime) : tokens[0].mintedTime,
    sig: signature
  };
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
  ];
}
var localStorage = void 0;
if (typeof window !== "undefined") {
  localStorage = window.localStorage;
}
var nftStorageKey = ({ tokenId }) => {
  return `pending_token_${tokenId}`;
};
function mapPending(nfts) {
  return nfts.map((n) => {
    var _a;
    let pending = JSON.parse(localStorage.getItem(nftStorageKey(n)) ?? "false");
    if (((_a = n.soul) == null ? void 0 : _a.name) || pending && new Date().getTime() - pending > 72e5) {
      pending = false;
      localStorage.setItem(nftStorageKey(n), "false");
    }
    return __spreadProps(__spreadValues({}, n), {
      pending
    });
  });
}
function setPending(nfts) {
  nfts.forEach((n) => {
    n.pending = new Date().getTime();
    localStorage.setItem(nftStorageKey(n), JSON.stringify(n.pending));
  });
}
function setupPendingPolling(nfts, updateFn) {
  if (!nfts.length)
    return void 0;
  const pending = nfts.filter((n) => n.pending);
  if (pending.length) {
    return pollingTimer(updateFn);
  }
}
async function getCollection() {
  const address = await getWalletAddress();
  const vox = await getVOXs(address);
  return {
    address,
    nfts: mapPending(vox.map((v) => __spreadProps(__spreadValues({}, v), {
      selected: false
    })))
  };
}
function pollingTimer(updateFn) {
  return setTimeout(async () => {
    const vox = await getVOXs();
    const nfts = mapPending(vox.map((v) => __spreadProps(__spreadValues({}, v), {
      selected: false
    })));
    updateFn(nfts);
    if (nfts.some((n) => n.pending)) {
      pollingTimer(updateFn);
    }
  }, 10 * 1e3);
}
function watchForWallet(updateFn) {
  return setTimeout(async () => {
    try {
      const { nfts } = await getCollection();
      updateFn(nfts);
    } catch (e) {
      watchForWallet(updateFn);
    }
  }, 1e3);
}

// app/src/img/Vox-Souls-Website.png
var Vox_Souls_Website_default = "/build/_assets/Vox-Souls-Website-54IN3WSF.png";

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "Avatars that DeFi, now with real Souls | VOX",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default }
];
function App() {
  (0, import_react3.useEffect)(() => {
    startMoralis();
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement("meta", {
    property: "og:title",
    content: "Avatars that DeFi, now with real Souls | VOX"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: metadesc
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image",
    content: Vox_Souls_Website_default
  }), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
var metadesc = `The VOX collection of unique and generative NFT "Avatars that DeFi" are even more unique then ever. A single soul may be minted for each VOX in existence for series 1, 2 or 3. What makes your VOX tick? Find out by uniting it with its Soul.`;

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  action: () => action,
  default: () => Index,
  links: () => links2
});
init_react();
var import_react9 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-55DNWN2R.css";

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/routes/about.jsx
var import_react10 = require("react");

// app/c/Nav.jsx
init_react();
var import_gsap2 = __toESM(require("gsap"));
var import_react5 = require("react");
var import_react6 = require("@remix-run/react");

// app/c/sh/Svg.jsx
init_react();
function Svg({ children, className }) {
  return /* @__PURE__ */ React.createElement("figure", {
    className: `Svg ${className}`
  }, children);
}
function LogoVox({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox sm:max-w-[100px] max-w-[70px] fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 106 54",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zm47.8-14.4c.2-4.2.5-8.5.7-12.8-12-.6-24-1.3-36-2l-.6 10.5c-7-5.2-16-4.9-23.1 0 .2-1 .4-1.9.6-2.9 1.4-.3 2.8-.5 4.2-.8-.9-4.7-2-9.4-2.9-14.1C32.1 4 16.5 7 .8 10.1l3 14.1c1.4-.3 2.8-.6 4.3-.9 6.2 10.1 12.3 20.4 18.4 30.6 5.1-1 10.2-2 15.2-3 .3-2.7.7-5.3 1-8 4.6 6 11.7 8.5 19 6.8 2.8-.6 5.3-2.7 8.1-2.4 11.1.6 22.2 1.2 33.4 1.8.2-4.2.5-8.5.7-12.7-1.5-.1-3.1-.3-4.6-.5-1.5-2.2-2.9-4.5-4.5-6.7 1.9-2.2 3.8-4.4 5.7-6.5 1.6.1 2.9.1 4.3.2zM38.6 48c-3.5.7-6.9 1.4-10.4 2-6-10.2-12.2-20.3-18.3-30.5-1.1.2-2.2.4-3.4.6-.5-2.4-1-4.8-1.5-7.3 5.9-1.2 11.8-2.4 17.8-3.5l1.5 7.2c-1.3.2-2.6.5-3.8.8 3.5 7 7.8 13.6 10.8 20.9-.2-7.7 1-15.5 1.5-23.2-1.3.2-2.6.5-3.9.7l-1.5-7.2C33.2 7.3 39.1 6.1 45 5l1.5 7.2c-1.1.2-2.2.5-3.3.8-1.5 11.6-3.1 23.3-4.6 35zM25.7 20c1-.2 2.1-.5 3.2-.7-.2 1.8-.3 3.7-.5 5.5-.9-1.6-1.9-3.2-2.7-4.8zm41.4 23.1c-6.5 6-18.3 4.2-22.3-3.8-3.8-7.1-.9-16.6 6.7-19.6 6.1-2.4 13.6-1.1 17.6 4.4 4.2 5.6 3.4 14.3-2 19zm4.2-22.5c3.1 1 4.5 4.6 6.4 7.1-.8 1-1.5 2.1-2.2 3.1-.8-3.8-2.2-6.8-4.2-10.2zM90.6 29c2.4 3.5 4.8 6.9 7.2 10.4.9.1 1.7.1 2.6.2-.1 1.9-.2 3.9-.3 5.8-4.5-.2-9.1-.5-13.6-.8.1-1.9.2-3.8.3-5.8l2.8.1c-1.3-2-2.7-3.9-4-5.9l-4.2 5.4 2.7.3-.3 5.7c-4.3-.2-8.7-.4-13-.7.1-1.9.2-3.8.3-5.8.8 0 1.7 0 2.5.1 2.8-3.3 5.6-6.7 8.5-10-2.2-3.5-4.6-6.9-7-10.3-.9 0-1.7-.1-2.6-.1.1-1.9.2-3.9.3-5.8 4.5.3 9 .5 13.5.8l-.3 5.7h-2.8c1.3 1.9 2.5 3.8 3.8 5.6 1.4-1.8 2.8-3.5 4.2-5.2-.9-.1-1.7-.1-2.6-.2.1-1.9.2-3.9.3-5.8 4.3.3 8.5.5 12.8.7-.1 1.9-.2 3.9-.2 5.8-.9 0-1.7-.1-2.6-.1-2.7 3.3-5.5 6.7-8.3 9.9zm-36.4-3.8c-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.2-3.1 4.4-9.9.6-13.4-2.2-1.8-5.3-2.3-7.8-.9zM57 37.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zm47.8-14.4c.2-4.2.5-8.5.7-12.8-12-.6-24-1.3-36-2l-.6 10.5c-7-5.2-16-4.9-23.1 0 .2-1 .4-1.9.6-2.9 1.4-.3 2.8-.5 4.2-.8-.9-4.7-2-9.4-2.9-14.1C32.1 4 16.5 7 .8 10.1l3 14.1c1.4-.3 2.8-.6 4.3-.9 6.2 10.1 12.3 20.4 18.4 30.6 5.1-1 10.2-2 15.2-3 .3-2.7.7-5.3 1-8 4.6 6 11.7 8.5 19 6.8 2.8-.6 5.3-2.7 8.1-2.4 11.1.6 22.2 1.2 33.4 1.8.2-4.2.5-8.5.7-12.7-1.5-.1-3.1-.3-4.6-.5-1.5-2.2-2.9-4.5-4.5-6.7 1.9-2.2 3.8-4.4 5.7-6.5 1.6.1 2.9.1 4.3.2zM38.6 48c-3.5.7-6.9 1.4-10.4 2-6-10.2-12.2-20.3-18.3-30.5-1.1.2-2.2.4-3.4.6-.5-2.4-1-4.8-1.5-7.3 5.9-1.2 11.8-2.4 17.8-3.5l1.5 7.2c-1.3.2-2.6.5-3.8.8 3.5 7 7.8 13.6 10.8 20.9-.2-7.7 1-15.5 1.5-23.2-1.3.2-2.6.5-3.9.7l-1.5-7.2C33.2 7.3 39.1 6.1 45 5l1.5 7.2c-1.1.2-2.2.5-3.3.8-1.5 11.6-3.1 23.3-4.6 35zM25.7 20c1-.2 2.1-.5 3.2-.7-.2 1.8-.3 3.7-.5 5.5-.9-1.6-1.9-3.2-2.7-4.8zm41.4 23.1c-6.5 6-18.3 4.2-22.3-3.8-3.8-7.1-.9-16.6 6.7-19.6 6.1-2.4 13.6-1.1 17.6 4.4 4.2 5.6 3.4 14.3-2 19zm4.2-22.5c3.1 1 4.5 4.6 6.4 7.1-.8 1-1.5 2.1-2.2 3.1-.8-3.8-2.2-6.8-4.2-10.2zM90.6 29c2.4 3.5 4.8 6.9 7.2 10.4.9.1 1.7.1 2.6.2-.1 1.9-.2 3.9-.3 5.8-4.5-.2-9.1-.5-13.6-.8.1-1.9.2-3.8.3-5.8l2.8.1c-1.3-2-2.7-3.9-4-5.9l-4.2 5.4 2.7.3-.3 5.7c-4.3-.2-8.7-.4-13-.7.1-1.9.2-3.8.3-5.8.8 0 1.7 0 2.5.1 2.8-3.3 5.6-6.7 8.5-10-2.2-3.5-4.6-6.9-7-10.3-.9 0-1.7-.1-2.6-.1.1-1.9.2-3.9.3-5.8 4.5.3 9 .5 13.5.8l-.3 5.7h-2.8c1.3 1.9 2.5 3.8 3.8 5.6 1.4-1.8 2.8-3.5 4.2-5.2-.9-.1-1.7-.1-2.6-.2.1-1.9.2-3.9.3-5.8 4.3.3 8.5.5 12.8.7-.1 1.9-.2 3.9-.2 5.8-.9 0-1.7-.1-2.6-.1-2.7 3.3-5.5 6.7-8.3 9.9zm-36.4-3.8c-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.2-3.1 4.4-9.9.6-13.4-2.2-1.8-5.3-2.3-7.8-.9zM57 37.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z"
  })));
}
function LogoGala({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Gala ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 107.42 52.55"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 13.58c1.09.63 2.17 1.26 3.26 1.87a.55.55 0 0 1 .31.56v20.38a.69.69 0 0 0 .38.68l14.36 8.83.47.27v-17.2a.65.65 0 0 0-.37-.65q-2.18-1.23-4.32-2.49a.54.54 0 0 1-.28-.36v-3.88a1.38 1.38 0 0 1 .23.09l8.07 4.64a.47.47 0 0 1 .26.47v25.75l-.37-.19L.38 39.07c-.12-.08-.25-.13-.38-.2ZM107.42 28.09h-2.73a.51.51 0 0 1-.37-.25c-.34-.66-.66-1.34-1-2a.46.46 0 0 0-.48-.3h-5.72a.45.45 0 0 0-.48.3c-.31.69-.63 1.37-1 2a.43.43 0 0 1-.29.24h-2.81L100 13.3c.19.37.36.68.52 1q3.36 6.69 6.7 13.38c.06.11.14.22.2.33Zm-5.31-4.86L100 18.81l-2.07 4.42ZM43.3 19.76l-1.84 1.06q-6.49 3.75-13 7.49a.69.69 0 0 0-.39.68v5.07a.58.58 0 0 1-.2.45c-1.07.65-2.16 1.27-3.31 1.93v-9.6a.56.56 0 0 1 .32-.56l21.64-12.51.32-.16V38.44a.56.56 0 0 1-.29.58L25 52.31l-.41.24V48.75a.58.58 0 0 1 .34-.59l17.99-11.09a.69.69 0 0 0 .39-.69V20.25ZM31.86 19.71l-2.49 1.44-5.62 3.25a.51.51 0 0 1-.61 0L1.65 12l-.27-.18 2.36-1.28L23 .15a.83.83 0 0 1 .93 0Q34.5 5.89 45.12 11.62l.36.22-.39.23c-1 .56-1.93 1.1-2.88 1.67a.6.6 0 0 1-.71 0L23.78 4.15a.56.56 0 0 0-.61-.06Q16.09 7.93 9 11.76l-.3.24 3 1.71c3.76 2.14 7.56 4.29 11.3 6.53a.69.69 0 0 0 .79 0c1.38-.82 2.78-1.62 4.17-2.43a.51.51 0 0 1 .61 0c1 .58 2 1.14 2.94 1.71ZM62.89 20.42h6.35a10.25 10.25 0 0 1-.62 3.89 6.19 6.19 0 0 1-6 4.11 7.9 7.9 0 0 1-6.77-3.13 7.32 7.32 0 0 1 4.69-11.55 8.93 8.93 0 0 1 6.46 1.2c.24.14.45.32.7.5l-1.32 2A6.38 6.38 0 0 0 62.23 16a4.61 4.61 0 0 0-4.79 3.87 5 5 0 0 0 3.94 6 4.24 4.24 0 0 0 4.55-1.73 9.31 9.31 0 0 0 .61-1.44h-3.65ZM75.25 13.28l7.43 14.82h-2.84c-.1 0-.24-.17-.3-.3-.33-.66-.65-1.32-1-2a.38.38 0 0 0-.4-.28h-5.83a.58.58 0 0 0-.39.28c-.35.67-.65 1.36-1 2a.46.46 0 0 1-.32.26h-2.78Zm2.11 10-2.13-4.42-2.08 4.42ZM86.07 25.64H92v2.42h-8.57V13.93h2.64ZM83.16 31.88h1.78a1.91 1.91 0 0 1 1.86 1.22 2 2 0 0 1-.37 2.25 4 4 0 0 1 .52.36 2 2 0 0 1 .65 2.18A1.89 1.89 0 0 1 86 39.4a25.89 25.89 0 0 1-2.79 0Zm1.13 4.18v2.39a12.44 12.44 0 0 0 1.45-.15 1 1 0 0 0 .77-1.06 1 1 0 0 0-.78-1 14.51 14.51 0 0 0-1.44-.18Zm0-.94c.55 0 1.07.05 1.41-.45a1.29 1.29 0 0 0 0-1.34 1.38 1.38 0 0 0-1.4-.33ZM76 31.34l3.67 8.16h-1.18c-.08 0-.17-.14-.21-.23-.21-.44-.38-.9-.6-1.34a.52.52 0 0 0-.37-.24h-2.73a.51.51 0 0 0-.37.25c-.23.44-.42.91-.64 1.35a.47.47 0 0 1-.32.21h-1ZM76 34l-1.16 2.53h2.27ZM96 33l-.93.57a1.2 1.2 0 0 0-1.35-.74 1 1 0 0 0-.88.78.85.85 0 0 0 .57.9c.52.25 1.08.44 1.59.72a2.22 2.22 0 0 1 1.08 2.83 2.45 2.45 0 0 1-2.71 1.57 2.32 2.32 0 0 1-2-2.25l1.13-.25c.05.18.08.36.13.53a1.17 1.17 0 0 0 1.17.89 1.21 1.21 0 0 0 1.2-.83 1.14 1.14 0 0 0-.47-1.42c-.45-.27-1-.45-1.43-.68a2.33 2.33 0 0 1-1.33-1.28 2 2 0 0 1 1.6-2.59A2.31 2.31 0 0 1 96 33ZM65.65 31.88h1.11v6.5H69v1.11h-3.35Z"
  })));
}
function Arrow({ className, isBack = false }) {
  const flipCss = isBack ? "rotate-180" : null;
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Arrow fill-black min-w-[40px] ${className} ${flipCss}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 104.27 105.87",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M43.62 105.87 30.87 90.83l31.07-26.59H0l3.49-20.72h65.93l-25.4-30.48L59.26 0l45.02 53.88-60.66 51.99z"
  })));
}

// app/c/sh/Button.jsx
init_react();
var import_gsap = __toESM(require("gsap"));
var import_react4 = require("react");
function Button({ children, className, onClick, childRef = null }) {
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    ref: childRef,
    className: `Button cursor-pointer ${className}`
  }, children);
}
function MintButton({
  className,
  childRef,
  text = "Connect Wallet",
  onClick
}) {
  return /* @__PURE__ */ React.createElement("a", {
    href: "/mint"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick,
    childRef,
    className: `bg-red text-white pt-4 pb-3 md:px-14  px-8 sm:px-2 rounded-lg tx-display uppercase font-display md:text-[1.2em] sm:text-[1em] text-[.8em] leading-[.8em] ${className}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, "Mint Yours", /* @__PURE__ */ React.createElement("span", {
    className: " text-[.6em] font-sans hidden sm:block"
  }, text))));
}
function ConfirmMintButton({
  className,
  childRef,
  text = "Connect Wallet",
  title = "Mint Yours",
  onClick
}) {
  return /* @__PURE__ */ React.createElement(Button, {
    onClick,
    childRef,
    className: `bg-red text-white pt-4 pb-3 md:px-14  px-8 sm:px-2 rounded-lg tx-display uppercase font-display md:text-[1.2em] sm:text-[1em] text-[.8em] leading-[.8em] ${className}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, title, /* @__PURE__ */ React.createElement("span", {
    className: " text-[.6em] font-sans hidden sm:block"
  }, text)));
}
function AMintButton({ className, isIn = true }) {
  const A = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => animateIn(A.current, isIn), [isIn]);
  return /* @__PURE__ */ React.createElement("div", {
    ref: A,
    className: "relative"
  }, /* @__PURE__ */ React.createElement(MintButton, {
    className
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute an-flash bottom-0 text-xs text-white w-full text-center translate-y-[8vh]"
  }, "SCROLL TO DISCOVER"));
}
function animateIn(item, bool) {
  const val = bool ? 1 : 0;
  import_gsap.default.to(item, {
    duration: 1,
    autoAlpha: val,
    ease: "expo.out"
  });
}

// app/c/Nav.jsx
function Nav({ isAbout, isMint = false, isIn = true }) {
  const navRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (!isIn)
      import_gsap2.default.set(navRef.current, { autoAlpha: 0 });
  }, []);
  (0, import_react5.useEffect)(() => {
    if (isIn) {
      import_gsap2.default.to(navRef.current, {
        autoAlpha: 1,
        duration: 1,
        delay: 7
      });
    }
  }, [isIn]);
  return /* @__PURE__ */ React.createElement("nav", {
    ref: navRef,
    className: "Nav fixed text-black flex justify-between items-center w-screen px-10 pb-5 pt-10 z-[99] backdrop-blur-sm"
  }, /* @__PURE__ */ React.createElement(NavLinks, {
    className: "lg:w-1/3",
    isAbout
  }), /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/",
    className: "lg:w-1/3 w-1/3 "
  }, /* @__PURE__ */ React.createElement(LogoVox, {
    className: "lg:mx-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end items-center lg:w-1/3"
  }, !isMint ? /* @__PURE__ */ React.createElement(MintButton, null) : null, /* @__PURE__ */ React.createElement(MenuBtn, null)));
}
function MenuBtn() {
  const [isOpen, setIsOpen] = (0, import_react5.useState)(false);
  const menuDisplay = () => {
    if (!isOpen) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "rotate-90 relative lg:hidden"
      }, /* @__PURE__ */ React.createElement("span", null, "|"), /* @__PURE__ */ React.createElement("span", null, "|"), /* @__PURE__ */ React.createElement("span", null, "|"));
    } else {
      return /* @__PURE__ */ React.createElement("div", {
        className: "mx-1"
      }, "X");
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => setIsOpen(!isOpen),
    className: "p-4 pr-0 flex relative font-display"
  }, menuDisplay(), /* @__PURE__ */ React.createElement(Menu, {
    isOpen
  }));
}
function Menu({ isOpen }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `${isOpen ? "" : "hidden"} absolute top-0 right-0 translate-y-[10vh] w-[50vw] z-20 bg-light p-4 rounded-lg drop-shadow-lg`
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "uppercase font-display"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    to: "/",
    className: ({ isActive }) => isActive ? "hidden" : ""
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    to: "/about",
    className: ({ isActive }) => isActive ? "hidden" : ""
  }, "About")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "py-3 my-3",
    target: "_blank",
    rel: "noreferrer",
    href: "https://linktr.ee/thevoxverse"
  }, "Opensea")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "py-3 my-3",
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.instagram.com/gogalagames/"
  }, "Instagram")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "py-3 my-3",
    target: "_blank",
    rel: "noreferrer",
    href: "https://twitter.com/TheVOXverse"
  }, "Twitter")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "py-3 my-3",
    target: "_blank",
    rel: "noreferrer",
    href: "https://gogalagames.medium.com/"
  }, "Medium")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "py-3 my-3",
    target: "_blank",
    rel: "noreferrer",
    href: "https://discord.com/invite/JtnCNMFnnK"
  }, "Discord")), /* @__PURE__ */ React.createElement("li", {
    className: "my-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "py-3 my-3",
    target: "_blank",
    rel: "noreferrer",
    href: "https://linktr.ee/thevoxverse"
  }, "Collectvox.com"))));
}
function NavLinks({ className, isAbout = false }) {
  return /* @__PURE__ */ React.createElement("ul", {
    className: `flex-row hidden lg:flex text-[.9rem] uppercase font-display ${className}`
  }, /* @__PURE__ */ React.createElement("li", {
    className: `${isAbout ? "hidden" : ""}`
  }, /* @__PURE__ */ React.createElement("a", {
    className: "px-5 py-2",
    href: "/#slider"
  }, "Find Your Soul")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    className: ({ isActive }) => isActive ? "hidden" : "px-5 py-2",
    to: "/about"
  }, "About"), /* @__PURE__ */ React.createElement(import_react6.NavLink, {
    className: ({ isActive }) => isActive ? "hidden" : "px-5 py-2",
    to: "/"
  }, "Home")));
}

// app/c/sh/Section.jsx
init_react();
function Section({ children, className, id, childRef }) {
  return /* @__PURE__ */ React.createElement("section", {
    id,
    ref: childRef,
    className: `Section min-h-[50vh] py-[10vh] ${className}`
  }, children);
}

// app/c/sh/Main.jsx
init_react();
function Main({ children, canScroll = false }) {
  return /* @__PURE__ */ React.createElement("main", {
    className: `w ${canScroll ? "" : "max-h-screen overflow-hidden"}`
  }, children);
}

// app/c/sh/Wrapper.jsx
init_react();
function Wrapper({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-auto min-h-screen"
  }, children);
}

// app/c/sh/Cont.jsx
init_react();
var import_gsap3 = __toESM(require("gsap"));
var import_react7 = require("react");
function Cont({ children, className, isIn = true }) {
  const wrapper = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    if (isIn) {
      import_gsap3.default.to(wrapper.current, {
        autoAlpha: 1,
        duration: 0.6,
        delay: 6.5,
        ease: "expo.in"
      });
    } else {
      import_gsap3.default.set(wrapper.current, {
        autoAlpha: 0
      });
    }
  });
  return /* @__PURE__ */ React.createElement("div", {
    ref: wrapper,
    className: `Cont w-[80vw] mx-auto ${className}`
  }, children);
}

// app/c/Footer.jsx
init_react();

// app/c/sh/Newsletter.jsx
init_react();
var import_react8 = require("@remix-run/react");
function Newsletter({ formData }) {
  const newsletterDisplay = () => {
    if ((formData == null ? void 0 : formData.statusCode) === 200) {
      return /* @__PURE__ */ React.createElement(SuccessMessage, {
        subText: "You're In!"
      });
    } else if ((formData == null ? void 0 : formData.statusCode) === 500) {
      return /* @__PURE__ */ React.createElement(SuccessMessage, {
        text: "Already Subscribed.",
        subText: "You're In!"
      });
    }
    return /* @__PURE__ */ React.createElement(FormToSub, null);
  };
  return newsletterDisplay();
}
function SuccessMessage({ text = "Subscribed Successfully!", subText = "" }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-2 my-5 text-red font-display text-center"
  }, text, " ", /* @__PURE__ */ React.createElement("span", {
    className: "block font-sans uppercase text-white"
  }, subText));
}
function FormToSub() {
  return /* @__PURE__ */ React.createElement(import_react8.Form, {
    method: "post",
    className: "Newsletter py-2 my-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    className: "bg-transparent border block md:inline border-red rounded-md p-5 mr-3 md:w-[25vw] w-full"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-white text-red p-5 md:mr-3 md:mt-0 mt-5 w-full md:w-auto  rounded-md uppercase"
  }, "Subscribe ", "->")), /* @__PURE__ */ React.createElement("div", {
    className: "flex my-4"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    required: "required"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "block text-[.6em] max-w-[50ch] px-5"
  }, "I agree to the terms and conditions and privacy policy and to receive promotional materials from and about VOX, and I understand that I can withdraw my consent at any time.")));
}

// app/c/sh/Icon.jsx
init_react();
function Icon({ children, className }) {
  return /* @__PURE__ */ React.createElement("figure", {
    className: `Icon w-[10px] ${className}`
  }, children);
}
function IconMedium({ className }) {
  return /* @__PURE__ */ React.createElement(Icon, {
    className: `${className} SocialIcon`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 500 500"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M277.4 250c0 67.07-54 121.45-120.62 121.45S36.16 317.08 36.16 250s54-121.45 120.62-121.45S277.4 182.92 277.4 250M409.72 250c0 63.14-27 114.32-60.31 114.32S289.1 313.14 289.1 250s27-114.32 60.31-114.32 60.31 51.18 60.31 114.32M463.85 250c0 56.57-9.5 102.43-21.21 102.43S421.43 306.57 421.43 250s9.5-102.43 21.21-102.43 21.21 45.86 21.21 102.43"
  })));
}
function IconInstagram({ className }) {
  return /* @__PURE__ */ React.createElement(Icon, {
    className: `${className} SocialIcon`
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    id: "Bold",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 500 500",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M362.4 62.6H137.6c-41.4 0-75 33.7-75 75v224.9c0 41.4 33.7 75 75 75h224.8c41.4 0 75-33.7 75-75V137.6c0-41.4-33.6-75-75-75zM250 362.4c-62.1 0-112.4-50.4-112.4-112.4 0-62.1 50.3-112.4 112.4-112.4 62.1 0 112.4 50.3 112.4 112.4 0 62-50.4 112.4-112.4 112.4zm121.9-206c-15.5 0-28.1-12.6-28.1-28.1s12.6-28.1 28.1-28.1c15.5 0 28.1 12.6 28.1 28.1s-12.6 28.1-28.1 28.1z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "250",
    cy: "250",
    r: "75"
  })));
}
function IconTwitter({ className }) {
  return /* @__PURE__ */ React.createElement(Icon, {
    className: `${className} SocialIcon`
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    id: "Bold",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 500 500",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M418.9 163c17.3-12.7 32.3-27.7 43.8-45-16.1 6.9-32.3 11.5-49.6 13.8 18.4-10.4 32.3-27.7 38-48.4-17.3 9.2-35.7 16.1-55.3 20.7-16.1-17.3-39.2-27.7-63.4-27.7-48.4.1-86.4 39.3-86.4 86.6 0 6.9 1.2 13.8 2.3 19.6-73.8-2.3-137.2-38-179.8-89.9-6.9 12.7-11.5 27.7-11.5 43.8 0 30 15 56.5 38 72.6-13.8 0-27.7-4.6-39.2-10.4v1.2c0 42.6 30 77.2 69.2 85.3-6.9 2.3-15 3.5-23.1 3.5-5.8 0-11.5 0-16.1-1.2 11.5 34.6 43.8 59.9 80.7 61.1-30 23.1-66.9 36.9-108.3 36.9-6.9 0-13.8 0-20.7-1.2 38 25.4 84.1 39.2 133.7 39.2 154.3-2.3 254.6-130.3 247.7-260.5z"
  })));
}
function IconDiscord({ className }) {
  return /* @__PURE__ */ React.createElement(Icon, {
    className: `${className} SocialIcon`
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    id: "Bold",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 500 500",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M403.6 148c-45.8-32.9-88.5-34.2-96.6-34.4l-5.2 5c58.4 16.3 86.7 41.9 86.7 41.9-50.2-24.3-97.6-32.8-138.5-33.3-41 .5-88.3 9-138.5 33.3 0 0 28.2-25.5 86.7-41.9l-5.2-5c-8.2.2-50.9 1.6-96.7 34.4 0 0-51.2 85.9-51.2 191.3 1.8-2.1 31.7 45.4 109.2 47 0 0 13-14.5 22.4-27.3-45.2-12.8-62.1-38.4-62.1-38.4 46.8 28.9 90.7 40.1 135.3 38.7 44.6 1.6 88.4-9.6 135.3-38.7 0 0-17.1 25.5-62.1 38.4 9.4 12.8 22.4 27.3 22.4 27.3 77.4-1.7 107.4-49 109.2-47 .1-105.4-51.1-191.3-51.1-191.3zM187 306.4c-19.8 0-35.8-16.3-35.8-36.5s16-36.5 35.8-36.5v.2c19.5 0 35.7 16.3 35.8 36.5 0 20-15.9 36.3-35.8 36.3zm126 0c-19.8 0-35.8-16.3-35.8-36.3 0-20.2 16.1-36.5 35.8-36.5v-.2c19.8 0 35.8 16.3 35.8 36.5s-16 36.5-35.8 36.5z"
  })));
}

// app/c/Footer.jsx
function Footer({ formData }) {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "Footer bg-black p-[5vw] text-white md:flex content-center justify-between items-center"
  }, /* @__PURE__ */ React.createElement(Credits, null), /* @__PURE__ */ React.createElement(Newsletter, {
    formData
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "md:min-w-[10vw] text-xs uppercase font-display"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    className: "",
    href: "https://www.instagram.com/gogalagames/"
  }, /* @__PURE__ */ React.createElement(IconInstagram, {
    className: " fill-white inline max-w-[1em]"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline"
  }, "Instagram"))), /* @__PURE__ */ React.createElement("li", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    className: "",
    href: "https://twitter.com/TheVOXverse"
  }, /* @__PURE__ */ React.createElement(IconTwitter, {
    className: " fill-white inline max-w-[1em]"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline"
  }, "Twitter"))), /* @__PURE__ */ React.createElement("li", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    className: "",
    href: "https://discord.com/invite/JtnCNMFnnK"
  }, /* @__PURE__ */ React.createElement(IconDiscord, {
    className: " fill-white inline max-w-[1em]"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline"
  }, "Discord"))), /* @__PURE__ */ React.createElement("li", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    className: "",
    href: "https://gogalagames.medium.com/"
  }, /* @__PURE__ */ React.createElement(IconMedium, {
    className: " fill-white  inline"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline"
  }, "Medium")))));
}
function Credits() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Credits border2 text-xs "
  }, /* @__PURE__ */ React.createElement(LogoGala, {
    className: "fill-white xl:w-[7vw] lg:w-[15vw] md:w-[20vw] w-[50vw] pb-9"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://collectvox.com/terms-and-conditions",
    target: "_blank",
    rel: "noreferrer"
  }, "Terms and Conditions"), " ", "|", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://app.gala.games/privacy-policy",
    target: "_blank",
    rel: "noreferrer"
  }, " ", "Privacy Policy", " "), /* @__PURE__ */ React.createElement("div", {
    className: "py-5"
  }, "\xA9 Gala Labs. All rights reserved.", /* @__PURE__ */ React.createElement("span", {
    className: "block text-xs font-light"
  }, "All other logos and trademarks are property of their owners."))));
}

// app/c/Cta.jsx
init_react();

// app/src/content.js
init_react();

// app/src/img/vox-img-1.png
var vox_img_1_default = "/build/_assets/vox-img-1-BT43EBFO.png";

// app/src/img/vox-img-2.png
var vox_img_2_default = "/build/_assets/vox-img-2-YHWFTTZF.png";

// app/src/img/soul_img.png
var soul_img_default = "/build/_assets/soul_img-EA2BXA4D.png";

// app/src/souls.js
init_react();
var SLIDER_CONTENT = {
  SOULS: [
    {
      title: "Artisan",
      tagline: "Sees and creates things that others cannot",
      content: `The passionate creativity of an Artisan Soul can rarely be contained. They wield a mastery of their craft, however strange or silly it may be. A voice deep inside The Artisan cries out, "Hey, you! Make something fabulous!" and they burst at the seams to comply. In The Artisan's hands, a pile of junk can be transformed into a work of art or a machine unlike anything VOX society has ever seen.`,
      stats: [
        { title: "Smarts", value: "0.83%" },
        { title: "Wit", value: "2.5%" },
        { title: "Agility", value: "0.83%" },
        { title: "Swagger", value: "0.84%" }
      ],
      adds: {
        symbol: "",
        great: "Making an impact",
        strengths: {
          content: "The Artisan Soul is characterized by their boundless imagination, unique ideas, and ingenuity. They can be found dreaming up new structures to craft or new trinkets and items to forge, often creating what others said was impossible.",
          list: ["Creative", "Passionate", "Resourceful"]
        },
        weaknesses: {
          content: "The Artisan is their own worst critic. When their visions don't come to fruition, they can turn inwards, losing track of the task. Like a magpie chasing after the next shiny bauble, The Artisan can drop an unsatisfactory project for a new, exciting one.",
          list: ["Dreamy", "Impractical", "Distracted"]
        },
        friend: "The Artisan is a procrastinator, so when slipping behind or feeling unmotivated to finish a pressing project, they enlist the assistance of The Leader. One of their speeches usually provides enough pep for fifteen minutes. When picking themselves apart or battling a case of imposter syndrome, no one cheers them up more than The Star\u2026 and all the taverns The Star drags them too.",
        clashes: "The Artisan lives to create art and contraptions\u2026 and apparently, scrapes and bruises too. Their relationship with The Healer grows more strained with every housecall. The Artisan also strains to see the point of knowledge if The Scholar doesn't use it to create anything. As for The Sage, they once showed The Artisan a painting in their study; The Sage prattled on for hours about the deeper meaning of shoe polish. A mistake they won't make again.",
        quirks: [
          "Leaves half-finished works of art everywhere",
          "Always forgets their own birthday",
          "Can space out completely while someone is talking to them",
          "Notorious for turning others' cooking pots into contraptions without permission",
          "Repaints their home at least seven times a year"
        ]
      }
    },
    {
      title: "Hermit",
      tagline: "Brings an outsider's fresh perspective to everything",
      content: "The Hermit Soul is capable, tough, and mysterious. They're most at home in the wilderness, priding themselves on being resilient and fiercely independent. All they need for an adventure is the clothes on their back and a good sense of direction. At the end of the day, they treasure the simple things in life: peace and quiet, their own company, strong coffee, and yelling at kids to get off their lawn.",
      stats: [
        { title: "Endurance", value: "3.33%" },
        { title: "Agility", value: "1.67" }
      ],
      adds: {
        symbol: "",
        great: "Taking on challenges",
        strengths: {
          content: "A lone wolf, The Hermit thrives on adventure\u2026 and a good helping of alone time. Their fierce independence and individuality results in their being able to handle whatever life throws at them.",
          list: ["Adaptable", "Mysterious", "Pragmatic"]
        },
        weaknesses: {
          content: "While independence and resilience can be extremely valuable, too much alone time sometimes has its downfalls. Or at least, that's what the voices said. A Hermit that spends too long in the wilderness or on the outskirts of VOX society can become:",
          list: ["Reclusive", "Unemotional", "Distant"]
        },
        friend: `The Hermit doesn't care for the prattle of most people. However, they couldn't choose better company on the road than The Warrior and The Hunter. They're not sure how "Stay off my grass!" translated to "Join my adventuring party," but somehow these other two Souls have stuck close ever since. The Hermit respects the wild intensity of The Hunter and the courage of The Warrior.`,
        clashes: "The Hermit works best alone and trusts their instincts to guide them on the right path. They certainly don't need The Maverick telling them that up is down and left is right. They're fed up with The Wanderer roaming through their territory like a lost puppy, ruining the perfectly good trail they were following and alerting every creature in the vicinity to their presence. And the less said about that lackadaisical Trickster, the better\u2014that Soul has no place in the wilderness, thank you very much!",
        quirks: [
          "Lone wolf",
          "Knows how to make a roll of duct tape last and last and last",
          "Is secretly delighted when social plans are canceled",
          "Has trouble opening up and letting others in",
          "Intense, serious, private, and highly perceptive"
        ]
      }
    },
    {
      title: "Hunter",
      tagline: "Resolute and watchful, unaffected by others",
      content: "The resolute and watchful Hunter Soul is always on its toes. Wild at heart, The Hunter trusts their strange instincts which allow them to react quickly to dangerous situations, like being attacked by a snake. Unfortunately, these reflexes also apply to more mundane situations, like avoiding the stream from a lawn sprinkler. The Hunter sees the clues that everyone else misses, allowing them to avoid dangers others may fall victim to\u2026 like mysterious packages from The Trickster.",
      stats: [
        { title: "Might", value: "0.83%" },
        { title: "Endurance", value: "0.83%" },
        { title: "Agility", value: "3.34%" }
      ],
      adds: {
        symbol: "",
        great: "Taking on challenges",
        strengths: {
          content: "Like a loosened arrow, The Hunter finds their target and stops at nothing to hit their mark. They have keen eyes, are highly observant, and can see right through people.",
          list: ["Determined", "Perceptive", "Agile"]
        },
        weaknesses: {
          content: "The Hunter is all about forward momentum. When they can't make progress towards their goals or keep moving, they become crabby, restless, and impatient. Their radical self-reliance means they've built high walls around themselves, which can lead to feeling:",
          list: ["Impatient", "Cautious", "Reclusive"]
        },
        friend: `The Hunter and The Hermit share similar philosophies: silence is golden, stoicism is a way of life, and "If I want it done right, I'll do it myself." Having spent a long time in the wilderness, they are a fearsome duo when teaming up on an adventure. The Hunter's natural instincts are complemented by The Hermit's knowledge of nature and the terrain. The Hunter also has a deep respect for The Warrior's might and physical prowess. Both are Souls that thrive off the adrenaline of battle and single-mindedness in achieving their goals. The agility of The Hunter pairs well with the might of The Warrior, enabling them to overcome any foe.`,
        clashes: `As a Soul driven by physical prowess, The Hunter clashes with the flighty nature of The Maverick, The Wanderer, and The Trickster. Since The Hunter moves through the world with clear-eyed purpose, they are irritated by the meandering, dreamy,"let's see where life takes us!" manner of The Wanderer Soul. On the other hand, The Hunter begrudgingly respects the fierce individuality of The Maverick and The Trickster Souls in charting their own path, but finds them flighty, unreliable, and self-obsessed.`,
        quirks: [
          "Has an internal compass that always knows which way is north",
          "Could listen to the rustling of leaves all day",
          "Is the worst person to borrow money from\u2014they will find you!",
          "Never has to worry about what they're eating for dinner",
          "Always wins staring contests",
          "Clocks all the exits as soon as they walk in"
        ]
      }
    },
    {
      title: "Leader",
      tagline: "Rallies people around them and their cause",
      content: "The Leader Soul is confident and tenacious, one who seeks total mastery of both inner and outer strength. Known for taking situations by the reins and making things happen (often with extreme results), they have the respect of both friends and foes. Once they have a plan of action, chances are The Leader will have people following them and shouting (possibly with pitchforks and torches) within the hour.",
      stats: [
        { title: "Wit", value: "0.8%" },
        { title: "Might", value: "2.5%" },
        { title: "Swagger", value: "1.7%" }
      ],
      adds: {
        symbol: "",
        great: "Leading a group",
        strengths: {
          content: "If there's anything The Leader loves, it's a good challenge. They are true powerhouses, with fearless ambition, unending resilience, and the charisma to rally others around them to their mission. They are great at encouraging and empowering others. They have an innate sense of an adventuring party's different abilities and strengths, which makes them a natural leader for an eclectic group of VOX on a quest.",
          list: ["Persuasive", "Charismatic", "Creative"]
        },
        weaknesses: {
          content: "Their blind spots are the flip side of their towering strengths. On a good day, their energy is infectious; on a bad day, it's heavy-handed. In the pursuit of breaking new ground, their single-minded focus to achieve a goal can instead push people away, making them:",
          list: ["Competitive", "Intense", "Overbearing"]
        },
        friend: "The Leader loves giving boisterous speeches. The Star reveres them as fine art, while The Artisan needs those sort of motivational pep talks just to finish a piece of art or their most recent project. It's a winning relationship for all members of the party. Like, who else would The Leader give speeches to?",
        clashes: "The Leader charges bravely into battle at the helm of their party headfirst. They don't need The cautious Healer spreading doubt amidst the group. And what good are words after diplomacy has failed? The Leader feels like there's a time to set down the book and pick up the sword, but they've never been able to reach an agreement with The Scholar. They tried having a similar talk with The Sage, but it was filled with more riddles than success.",
        quirks: [
          "Great at heartfelt speeches",
          "First into the fray",
          "Honest to a fault",
          "Talks a million miles an hour",
          "Talks with an ear-deafening roar"
        ]
      }
    },
    {
      title: "Maverick",
      tagline: "Free spirit who lives by their own code",
      content: "Unafraid to stray from the beaten path, The Maverick Soul charts their own course. Their confidence and determination rallies The Maverick as they climb the greatest peaks and plunge to unfathomable depths in their quest to explore what lies beyond where others fear to tread. When faced with opposition, The Maverick raises their middle finger high and ventures on. Armed with cunning wit and stylish flair, no challenge\u2026 and no one can stand in their way.",
      stats: [
        { title: "Wit", value: "0.8%" },
        { title: "Stamina", value: "4.2%" }
      ],
      adds: {
        symbol: "",
        great: "Taking on challenges",
        strengths: {
          content: "The fiery Maverick Soul is always center stage. They zig when the world zags, are honest to a fault, and exude self-confidence. Telling a Maverick something can't be done is a sure way to fire them up to prove otherwise. They are an ambitious Soul, with big dreams and the determination to realize them\u2014no matter whom they rub the wrong way.",
          list: ["Independent", "Confident", "Determined"]
        },
        weaknesses: {
          content: `The Maverick's drive and self-assuredness means they can find it difficult to admit when they are wrong or hasty. When backed into a corner, The Maverick doubles down on a "it's my way or the highway" mentality and can come across as:`,
          list: ["Domineering", "Egotistical", "Jealous"]
        },
        friend: "The Maverick Soul steps to their own beat. It's faint and hard to follow, but The Trickster has found the rhythm and is glad to dance along. The Maverick's free spirit and The Trickster's pranks land them in dangerous situations often, which only adds to their fun. And The Wanderer isn't about to miss all this adventure. After all, a prison cell is something to see, if only momentarily.",
        clashes: "The Maverick's got places to go and people to see, and The Hermit, well, doesn't\u2026 The Maverick gave up on trying to drag them along. After all, The Maverick doesn't like being told what to do, so it's not their place. Because of this, The Maverick can't stomach The Warrior and all of their orders. The Maverick ditches chumps like that. The Maverick thinks that Hunters could be decent company\u2026 if they'd cease stopping every five minutes to set a trap. Mavericks don't have time for that.",
        quirks: [
          "Smirks a thousand times a day just for the exercise",
          "Is the reason why certain laws were made",
          `Overuses the word "antiestablishmentarianism"`,
          "Will ask for suggestions just to do the opposite",
          "Always has a leather jacket and a pair of sunglasses on standby",
          "Has a superpower for starting catchphrases"
        ]
      }
    },
    {
      title: "Sage",
      tagline: "Lends wisdom and comfort to others",
      content: "Wise beyond measure, The Sage Soul understands the world around them with a piercing perception. Although some might use this power for nefarious purposes, The Sage wields their knowledge and wisdom, not as a weapon, but as a tool to bring comfort to those who come across their path.   ",
      stats: [
        { title: "Smarts", value: "0.84%" },
        { title: "Wit", value: "3.33%" },
        { title: "Agility", value: "0.83%" }
      ],
      adds: {
        symbol: "",
        great: "Understanding the game",
        strengths: {
          content: "The Sage's intuition, intelligence, and curiosity, combined with a natural desire to help those around them, gives them a quiet strength that can stop anything\u2026 even The Hermit without their coffee!",
          list: ["Clever", "Thoughtful", "Inquisitive"]
        },
        weaknesses: {
          content: "Although The Sage has many strengths, their natural tendency to collect knowledge and wisdom can sometimes backfire. To an outside observer, their mind may seem as cluttered as their abode often is! The Sage will be the first to assure people that there is a method to their madness, but finding it is sometimes a different story. Ever in tune with their emotions and the emotions of others, The Sage can be vulnerable to harsh criticism and may withdraw if they do not feel appreciated. If not surrounded with patient understanding, The Sage may become:",
          list: ["Eccentric", "Scattered", "Sensitive"]
        },
        friend: "The Sage is happiest among good company who can provide stimulating and uplifting conversations. The Scholar and The Healer particularly encourage The Sage to share their wisdom, while still contributing quite a bit of knowledge to the conversation. Honestly, the quiet afternoons spent together discussing the deep questions of the universe are memories The Sage treasures.",
        clashes: `Although The Sage loves to challenge and uplift those around them, The Sage is easily susceptible to negativity from those who don't understand their intricacies. Try as they might to befriend The Leader and The Star, The Sage just doesn't seem to "click" with them. Neither The Leader nor The Star seem to have much patience for The Sage's deep discussions on life, and, quite frankly, The Sage doesn't care much for The Star's meaningless babble or The Leader's cut-and-dried style. Thinking that The Artisan might better appreciate their wisdom, The Sage paid The Artisan a visit, but, try as they might to get The Artisan to discuss their art in a deeper way, The Sage was just left with the distinct feeling that they had bored The Artisan with their analogies and thought-provoking comments.`,
        quirks: [
          "Sometimes talks in riddles",
          "Sleeps a lot and calls it meditating",
          "Believes all life is precious",
          "Could win any argument but chooses not to",
          "Gives great advice",
          "Doesn't like competitions"
        ]
      }
    },
    {
      title: "Star",
      tagline: "Loved and admired by all who meet them",
      content: "The Star Soul can walk into a room full of strangers and walk out with new best friends. They are admired, loved, and envied by pretty much everyone, which sometimes puts them in awkward situations. One time, The Star went out to slay a dragon, and it was so charmed that it wanted to be their friend instead of fight. So, The Star slayed it later when it wasn't looking.",
      stats: [
        { title: "Smarts", value: "0.83%" },
        { title: "Wit", value: "0.84%" },
        { title: "Endurance", value: "0.83%" },
        { title: "Swagger", value: "2.5%" }
      ],
      adds: {
        symbol: "",
        great: "Making an impact",
        strengths: {
          content: "The Star can brighten a room. They symbolize light, happiness, and vitality. They are proof that social connections are important, that friendliness reaps rewards, and that anyone, even the smallest VOX, can have a positive impact on others. They get their energy from others, so it's no surprise that their strengths are:",
          list: ["Persuasive", "Charismatic", "Creative"]
        },
        weaknesses: {
          content: "The extroverted and magnetic Star Soul can turn sour if they feel like they are disappointing loved ones or if their reputation has taken a hit. The need to be liked by their social connections can turn their sunny disposition into being:",
          list: ["Clingy", "Competitive", "Manipulative"]
        },
        friend: "The Star recharges their batteries off the energy of others, and The Leader has energy to spare. Their speeches cut straight to The Star's core, enabling them to spread their light and optimism. The Star also shares a creativity bug with The Artisan, and they're not above name-dropping their Artisan friend to get into an art show.",
        clashes: "The Star is a talker. They can talk and talk and talk and talk\u2026 but not with The Scholar, whose face is always buried in a book. Like, libraries are just cemeteries with living people to The Star. They struggle to make light conversation with The Healer because of their painful earnestness. As for The Sage, The Star thinks that they should turn their wisdom into songs\u2026 because right now, it's all just a drag.",
        quirks: [
          "Great at small talk",
          "Social butterfly",
          "Knows flattery gets one everywhere",
          "Easily bored with their own company",
          "Plays matchmaker for all their friends",
          "Compulsively needs to fill any silence"
        ]
      }
    },
    {
      title: "Scholar",
      tagline: "Driven by a thirst for knowledge and learning",
      content: "The Scholar Soul is the inquisitive bookworm with an uncanny ability to retain facts. Knowledge is their passion\u2014after all, The Scholar just never knows when they might need to know the 17 uses of dragon scales. Or how to defeat a monster with saltwater taffy. Or whether Minotaurs really do sleep while standing.",
      stats: [
        { title: "Smarts", value: "4.17%" },
        { title: "Wit", value: "0.83%" }
      ],
      adds: {
        symbol: "",
        great: "Uncovering knowledge and useful information",
        strengths: {
          content: "Their power lies in the understanding that no information is ever truly useless. Any problem can be solved if one only knows where to look to find the answer.",
          list: ["Pragmatic", "Incorruptible", "Clever"]
        },
        weaknesses: {
          content: "The Scholar's thirst for learning and deep passion for knowledge can be a double-edged sword. When faced with a decision, The Scholar may struggle with determining the best path forward if not given sufficient time to research all options. However, when their decision has been made, they can look down on other perspectives or choices they deem less educated than their own. Due to this, The Scholar can be:",
          list: ["Hesitant", "Blunt", "Smug"]
        },
        friend: `Since The Scholar's best friends are often found on bookshelves deep within the recesses of libraries, it's no real surprise that The Scholar feels a connection and kinship to those who respect the deep power of knowledge. The Scholar particularly enjoys spouting off random facts for The Healer and then watching as The Healer hastily scribbles down notes. The Scholar also has a mutual respect for the wisdom and understanding of The Sage. Many an hour has been happily spent in deep discussions over such important topics as the meaning of life and the correct pronunciation of the word "gif."`,
        clashes: "The Scholar has no time to waste on those who trust instincts over research. Once, The Scholar tried to show The Leader how to make a cost-benefit analysis in order to make educated decisions\u2026 The only thing The Leader took away from that conversation was that spending the time to research was too high of a cost! The Scholar tried to bond with The Artisan, but The Scholar never could understand what The Artisan was trying to express through their newest macaroni sculpture. The Star tried to babble on and on about how ingenious it was and how it reflected the inner turmoil of the heart\u2026 The Scholar finally just gave up and went back to their book.",
        quirks: [
          `Can often be found with any number of large tomes in their possession for "light reading"`,
          "Looks good in glasses",
          "Wishes they had more homework to do and problems to solve",
          "Gets euphoric around dusty antiques",
          "Has a hard time getting invited to play trivia games",
          "Knows how to wield facts as a weapon"
        ]
      }
    },
    {
      title: "Trickster",
      tagline: "Sees the silver lining and opportunity in every problem",
      content: "The Trickster Soul can get out of the worst scraps and the stickiest situations with ease. Three things The Trickster always has up their sleeve: a well-timed joke, a bit of gossip, and another card to play. They're as sharp as a tack, competitive, and single-minded in going after what they want. After all, a new problem is merely an opportunity The Trickster hasn't seized yet!",
      stats: [
        { title: "Smarts", value: "0.84%" },
        { title: "Wit", value: "0.84%" },
        { title: "All other stats", value: "0.83%" }
      ],
      adds: {
        symbol: "",
        great: "Understanding the game",
        strengths: {
          content: "Always a step ahead, The Trickster knows what move an enemy will make before they take it. The Trickster's natural cleverness, insightfulness, and intelligence\u2014along with a good helping of curiosity\u2014allows them to seek out opportunities others might miss.",
          list: ["Inquisitive", "Cunning", "Independent"]
        },
        weaknesses: {
          content: `The Trickster has two mottos in life: "Finders, Keepers" and "Chaos is the spice of life." Never much of a planner, The Trickster eats chaos for breakfast. Why waste time talking about something when they could be out there making it happen? Although The Trickster prefers to use the terms "spontaneous" and "exciting" to describe their lifestyle, their short attention span means that, in reality, the Trickster can often be:`,
          list: ["Evasive", "Impulsive", "Greedy"]
        },
        friend: `It's always a fun time when The Trickster can partner with The Maverick. Their mutual love for the rush of chaotic adventure (and explosions) bonds them. When not scheming about what new lucrative endeavors might come their way, The Trickster enjoys traveling with The Wanderer. With The Wanderer, they're sure to meet their next mark\u2014or "friend" as The Trickster would say.`,
        clashes: "Nothing says party-pooper to The Trickster quite like the loyal steadfastness of the Warrior. While the Warrior sets their jaw and muscles through challenges, The Trickster dances lightly around a problem, finding unusual solutions and using cunning to defeat their enemies. As for The Hunter, The Trickster never understood the appeal of sitting in one place for hours while waiting for something to get caught in a trap. Speaking of sitting still, The Hunter is convinced that Hermits are just statues.",
        quirks: [
          "Can charm anyone, human or creature alike",
          "Will make plans and cancel at the last minute for a better party",
          "A master in pushing buttons",
          "Flits from one exciting adventure to another",
          "Knows enough about several topics to be dangerous"
        ]
      }
    },
    {
      title: "Healer",
      tagline: "Able to help others when they're in need",
      content: "The tender Healer Soul yearns to collect broken and hurt things. They know they must help others, and that nothing is ever beyond repair. Curious at heart, The Healer checks in on others, ready to lend an ear if they can't mend a broken heart.",
      stats: [
        { title: "Smarts", value: "1.67%" },
        { title: "Endurance", value: "1.67%" },
        { title: "Agility", value: "1.66%" }
      ],
      adds: {
        symbol: "",
        great: "Finding the good in the world",
        strengths: {
          content: "The Healer Soul carries a can-do attitude, along with their hefty bag of potions, remedies, and whatchamacallits. They are prepared for most challenges, but aren't scared to figure it out along the way if they don't have what they need.",
          list: ["Resourceful", "Resilient", "Curious"]
        },
        weaknesses: {
          content: "Unfortunately, the caring nature of The Healer Soul can sometimes be\u2026 too much. The difference between caring and overbearing is a thin line, and The Healer may cross it, irking others. Their perfectionist nature can leave them too fixated with a task, including rewrapping the same broken arm three times.",
          list: ["Perfectionist", "Cautious", "Overbearing"]
        },
        friend: "Too often, The Healer spends so much energy focusing on helping those around them that they fail to realize how much they need somebody to talk to! After a long day, there is little The Healer Soul enjoys more than a soothing cup of tea and the companionship of The Sage. When not spending time with The Sage, The Healer also loves to listen to The Scholar's endless supply of random information, much to The Scholar's absolute delight!",
        clashes: "Although The Healer loves to help those around them, their patience can sometimes wear thin with those who are less logical than they. There is always a time for action, but seriously\u2026 does The Leader always have to charge ahead without thinking? The Healer also wants to bang their head against a wall every time The Artisan calls. It's not that The Healer minds helping, but how many different ways can The Artisan manage to hurt themselves while scrapbooking?! And don't even get The Healer started on The Star! The last time The Healer stopped by to check on The Star, The Star talked\u2026 and talked\u2026 and talked\u2026 and talked\u2026 and talked\u2026",
        quirks: [
          "Labels everything in the refrigerator",
          "Certified mixologist",
          "Makes their parents proud",
          "Remembers everyone's birthday",
          "Always packs an extra toothbrush"
        ]
      }
    },
    {
      title: "Wanderer",
      tagline: "Embraces change and is restless for their next adventure",
      content: "The Wanderer Soul is always curious about new experiences, eager for the next great adventure. To them, strangers are just new, temporary friendships waiting to happen before The Wanderer journeys on, never staying anywhere long. They may forget to look both ways before crossing the road because of sheer excitement to reach the other side. Because of this, The Wanderer is most likely to find treasure after tripping over it.",
      stats: [
        { title: "Smarts", value: "0.83%" },
        { title: "Might", value: "1.67%" },
        { title: "Endurance", value: "1.67%" },
        { title: "Agility", value: "0.83%" }
      ],
      adds: {
        symbol: "",
        great: "Finding the good in the world",
        strengths: {
          content: "The Wanderer Soul never grows too attached to material things. The wealth of the world lies in experiences, not trinkets and coins, so The Wanderer is going to squeeze out every drop this life has to offer. They never stay long in one place.",
          list: ["Curious", "Spontaneous", "Adaptable"]
        },
        weaknesses: {
          content: "Wanderer Souls' lives are brimming with thrills and novelty which means they get bored easily. If it isn't high-octane excitement, they lose interest. They have a bad habit... They have a bad habit of walking away from a conversation while someone else is mid-sentence. Though their non-committal nature keeps them open to new adventures, they may miss out on making meaningfully deep connections.",
          list: ["Impulsive", "Easily bored", "Non-committal"]
        },
        friend: "The Wanderer Soul requires the company of those that can keep up with their pace, not just on the road, but also with their thirst for the new. The Maverick is sure to help The Wanderer blaze new trails, and The Trickster is sure to keep the laughs rolling\u2026 even if it's hiding something sharp in someone's boot.",
        clashes: "For The Wanderer, the world is their treasure chest, just waiting to be opened\u2026 but where is the key? They know they won't find it by staying in one place, so they've never been patient enough for The Hermit. The Warrior seeks only glory, and The Wanderer thinks that they are missing the point. As for The Hunter, The Wanderer is tired of stepping in their forgotten traps!",
        quirks: [
          "Forgets someone's name after not seeing them for a week",
          "Smells like pine",
          "Never knows the time of day",
          "Petrichor is their favorite word",
          "Has tales from every corner of the world"
        ]
      }
    },
    {
      title: "Warrior",
      tagline: "Thrives in chaos and is a great ally in combat",
      content: "The Warrior Soul lives by a sacred code of nobility, honor, and honorable nobility. Ever committed to the path before them, The Warrior lives and dies by their own iron will. The Warrior is instantly recognizable\u2014headstrong, steadfast, and loyal. Whether defending the reputation of a friend or chasing away terrifying spiders for The Star, The Warrior is always ready to jump into action. ",
      stats: [
        { title: "Might", value: "4.17%" },
        { title: "Endurance", value: "0.83%" }
      ],
      adds: {
        symbol: "",
        great: "Taking on challenges",
        strengths: {
          content: "In the heat of battle and the midst of chaos, you want The Warrior on your adventuring party. They'll lead the charge, be decisive, and always have the back of their friends and allies. Once they set their mind to something, nothing seems to faze them.",
          list: ["Tenacious", "Loyal", "Courageous"]
        },
        weaknesses: {
          content: "The take-charge nature of The Warrior in reverse turns all their tenacity, will-power, and drive inwards. When they feel they can't control certain outcomes or situations, tempers flare up, and they can be:",
          list: ["Domineering", "Egotistical", "Jealous"]
        },
        friend: "The Warrior has high walls and trusts very few creatures, but The Hunter and The Hermit put them at ease. The Warrior finds kinship with tough, no-nonsense Souls like themselves, who are forged by adventure and proven in battle. Together, they make a great trio: the perfect balance of restraint and action, agility and might.",
        clashes: "As a Soul built for adventure, The Warrior dislikes unnecessary chitchat and finds the sociable, fickle nature of The Maverick, The Wanderer, and The Trickster deeply untrustworthy. It's all talk, no action. From time to time, their paths will cross on the open road, and The Warrior makes sure to walk the other way.",
        quirks: [
          "Acts first, thinks later",
          "Believes the best adventures are around the corner, not in books",
          "Most likely to poke the sleeping dragon",
          "Can't resist anything sharp: spears, knives, or well-made dwarven axes",
          "Strong moral compass",
          "Turns arguments into an art form",
          "Will never ask for directions"
        ]
      }
    }
  ]
};

// app/src/content.js
var TEXTBOXES = [
  {
    head: "VOX SOULS",
    subHead: "WHAT ARE VOX SOULS?",
    text: "If there\u2019s one great mystery in all the universes, metaverses, and multiverses, it\u2019s the living Soul. A Soul shapes your VOX\u2019s personality. It changes who your VOX is, what drives them, and how they approach adventures. Some VOX are book smart. Others are full of swagger and sass. Maybe your VOX is leading the charge in battle, or prefers a battle of wits. Who will you be?"
  },
  {
    head: "BOOST STATS AND DEFI",
    subHead: "WHY DO YOU NEED A SOUL?",
    text: "There are endless possibilities in the metaverse. VOX owners with Souls will enjoy benefits to both gameplay and future DeFi. Collect a soul to play up the unique strengths of your VOX in games like VOX Odyssey and the VOXverse while gaining access to potential DeFi rewards. There are 12 Souls. Who will you be?"
  }
];
var CTACONTENT = {
  title: "Souls Mint Opens Soon",
  text: "Every VOX has it\u2019s own soul. All souls are different and unique to the VOX they belong to.",
  imgs: [
    { src: vox_img_1_default, alt: "The Mage Vox" },
    { src: vox_img_2_default, alt: "The Wanderer Vox" }
  ]
};
var API_SOUL = {
  tokenId: "Soul Name",
  image: soul_img_default,
  hasSoul: false,
  number: 19862,
  soul: {
    image: "string",
    name: "string"
  }
};
var FAKE_API = [];
for (let i = 0; i < 30; i++) {
  FAKE_API.push(API_SOUL);
}

// app/c/sh/Image.jsx
init_react();
function Image2({ src, alt = "Vox Image", className }) {
  return /* @__PURE__ */ React.createElement("img", {
    className,
    src,
    alt
  });
}

// app/c/Cta.jsx
function LaunchCta({ className, children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `Cta ${className} bg-black rounded-2xl p-10 text-white text-center flex flex-col items-center relative`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:absolute top-0 left-[-5vw] border-3 border-white w-[90vw] h-full lg:flex justify-between items-center"
  }, CTACONTENT.imgs.map((img, i) => /* @__PURE__ */ React.createElement(Image2, {
    key: i,
    src: img.src,
    alt: img.alt,
    className: "max-w-[30vw] max-h-[30vw]"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "relative z-2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "py-5 font-display uppercase md:text-6xl text-4xl text-red"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block text-white"
  }, "SOULS MINT"), /* @__PURE__ */ React.createElement("span", {
    className: "block md:text-7 xl:text-[5vw] text-8xl "
  }, "OPEN NOW")), /* @__PURE__ */ React.createElement("h3", {
    className: "py-5"
  }, /* @__PURE__ */ React.createElement("p", null, "The first Souls released into the VOX realm are a limited, free mint of 10% of the total supply.")), /* @__PURE__ */ React.createElement("div", {
    className: "lg:hidden block"
  }, " ", /* @__PURE__ */ React.createElement(Image2, {
    src: CTACONTENT.imgs[0].src
  })), /* @__PURE__ */ React.createElement("div", {
    className: "py-10"
  }, children))));
}
function AdditionalCta({ className }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `flex justify-center ${className} mt-9`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:flex-row flex-col min-h-[10vh] md:justify-between content-center items-center md:w-2/3 text-xs"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "uppercase md:mb-0 mb-9 text-center"
  }, "Discover more on", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "https://collectvox.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "collectvox.com")), /* @__PURE__ */ React.createElement("a", {
    href: "https://opensea.io/collection/collectvoxtownstar",
    target: "_blank",
    rel: "noreferrer",
    className: "bg-black text-white py-3 px-8 rounded-xl md:my-0 my-6"
  }, "NOT A VOX HOLDER? GET YOURS ", "->")));
}
function HomeAdditionalCta({ className }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `flex justify-center ${className} mt-9`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:flex-row flex-col min-h-[10vh] md:justify-between content-center items-center md:w-2/3 text-xs"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "uppercase md:mb-0 mb-9 text-center"
  }, "Learn about", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "/about"
  }, "Vox and Souls")), /* @__PURE__ */ React.createElement("a", {
    href: "https://linktr.ee/thevoxverse",
    target: "_blank",
    rel: "noreferrer",
    className: "bg-black text-white py-3 px-8 rounded-xl md:my-0 my-6"
  }, "NOT A VOX HOLDER? GET YOURS ", "->")));
}

// app/src/img/highr/boost.png
var boost_default = "/build/_assets/boost-C4MW7H6Y.png";

// app/src/img/highr/destiny.png
var destiny_default = "/build/_assets/destiny-AHZTCB2A.png";

// app/src/img/highr/metav.png
var metav_default = "/build/_assets/metav-3UYYH6WG.png";

// app/src/img/highr/playto.png
var playto_default = "/build/_assets/playto-X5CONQRM.png";

// app/src/img/highr/utility.png
var utility_default = "/build/_assets/utility-5WR5TSNZ.png";

// app/src/img/highr/whatis.png
var whatis_default = "/build/_assets/whatis-PNZZ2FKZ.png";

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/routes/about.jsx
var import_newsletter_signup = __toESM(require_newsletter_signup());
var links2 = () => [{ rel: "stylesheet", href: styles_default }];
async function action({ request }) {
  const formData = await request.formData();
  let email = formData.get("email");
  const sub = await (0, import_newsletter_signup.subscribeHandler)(email);
  console.log("SUB", sub);
  return { statusCode: sub.statusCode };
}
function Index() {
  const formData = (0, import_react9.useActionData)();
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Nav, {
    isAbout: "true"
  }), /* @__PURE__ */ React.createElement(Main, {
    canScroll: true
  }, /* @__PURE__ */ React.createElement(Section, {
    className: " pt-[20vh]"
  }, /* @__PURE__ */ React.createElement(Cont, {
    className: "lg:block hidden"
  }, /* @__PURE__ */ React.createElement(Tabs, null)), /* @__PURE__ */ React.createElement(Cont, {
    className: "lg:hidden block"
  }, /* @__PURE__ */ React.createElement(Carousel, null)), /* @__PURE__ */ React.createElement(AdditionalCta, null)), /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement(Cont, null, /* @__PURE__ */ React.createElement(LaunchCta, null, /* @__PURE__ */ React.createElement(MintButton, null)))), /* @__PURE__ */ React.createElement(Footer, {
    formData
  })));
}
function Carousel() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-red uppercase font-display text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "block text-1xl mb-[5vh]"
  }, "Lear About", " ", /* @__PURE__ */ React.createElement("span", {
    className: "block text-black text-8xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "border-b-[.2em] border-red"
  }, "VOX")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-[100vw] translate-x-[-10vw] max-w-[100vw] flex gap-5 overflow-x-auto px-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-2/3 w-3/4 shrink-0  flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg h-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, "What Is a VOX?"), /* @__PURE__ */ React.createElement("img", {
    src: whatis_default,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "A VOX is a unique avatar with traits. VOX are collectible ERC-721 NFTs. Each VOX is programmatically generated and provably unique, meaning that no two VOX will look the same."))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-2/3 w-3/4 shrink-0 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg h-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, "VOX have Utility?"), /* @__PURE__ */ React.createElement("img", {
    src: utility_default,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Yes, VOX are designed to have various utilities. That means they will serve a purpose beyond just being a cute avatar that you can own and animate. VOX will be able to lock up GALA and eventually earn VOXcoin as rewards for play. There are additional utilities as well, such as play-to-earn rewards in", " ", /* @__PURE__ */ React.createElement("i", null, "Town Star"), " and in-game benefits in", /* @__PURE__ */ React.createElement("i", null, " Mirandus.")))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-2/3 w-3/4 shrink-0 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg h-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, "Our Metaverse"), /* @__PURE__ */ React.createElement("img", {
    src: metav_default,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Gala is teaming up with ", /* @__PURE__ */ React.createElement("i", null, "The Sims"), " creator Will Wright, the great innovator of digital universes, to bring VOX to life!", " ", /* @__PURE__ */ React.createElement("i", null, "VOXverse"), " will be more than an endless drudge of collecting and crafting; it\u2019ll be a digital world of Web3 tech that allows collectors to explore, build memories, play, navigate fears, and earn rewards. So, get ready for the", " ", /* @__PURE__ */ React.createElement("i", null, "VOXverse!")))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-red uppercase font-display text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "block text-3xl mb-[5vh]"
  }, "Lear About", " ", /* @__PURE__ */ React.createElement("span", {
    className: "block text-black text-8xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "border-b-[.2em] border-red"
  }, "SOULS")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-[100vw] translate-x-[-10vw] max-w-[100vw] flex gap-5 overflow-x-auto px-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-2/3 w-3/4 shrink-0  flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg h-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, "Destiny & Free Will"), /* @__PURE__ */ React.createElement("img", {
    src: destiny_default,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Each VOX can claim a single Soul. Your specific Soul is determined by the precise moment at which your VOX was first minted from its box, similar to a zodiac sign. Still, Souls do not permanently attach to VOX. Instead, they are yours to transfer or sell depending on who you want your VOX to be.", " "))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-2/3 w-3/4 shrink-0 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg h-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, "Play to your Strengths"), /* @__PURE__ */ React.createElement("img", {
    src: playto_default,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Having a Soul allows you to level up certain traits faster in-game: Smarts, Wit, Might, Endurance, Agility, and Swagger. Play to your strengths and shore up your weaknesses. Use your Wit to outsmart a cunning dragon, or double down on Might and Swagger to intimidate an enemy. It\u2019s all about choosing your style of play; after all, you wouldn\u2019t bring a pool noodle to a sword fight."))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-2/3 w-3/4 shrink-0 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg h-full"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, "Boost your DeFi"), /* @__PURE__ */ React.createElement("img", {
    src: boost_default,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "We will be introducing a new version of DeFi for VOX, not seen anywhere else. Rather than passive earning, users who own a VOX will be given access to an ecosystem that provides rewards based on active engagement. If a VOX has a Soul, they will earn even more rewards. The requirements for participating will be determined separately for each product available to you. You can still play the games and earn with a VOX that doesn\u2019t have a Soul\u2026 but where\u2019s the fun in that?"))))));
}
function Tabs() {
  const [currentTab, setCurrentTab] = (0, import_react10.useState)(0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "lg:flex"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `w-1/2 text-red uppercase font-display ${!currentTab ? "" : "opacity-50"}`,
    onClick: () => setCurrentTab(0)
  }, /* @__PURE__ */ React.createElement("p", {
    className: "block"
  }, "Learn About "), /* @__PURE__ */ React.createElement("span", {
    className: `text-black text-3xl md:text-8xl inline ${!currentTab ? "border-b-[.2em] border-red" : ""}`
  }, "VOX")), /* @__PURE__ */ React.createElement("button", {
    className: `w-1/2 text-red uppercase font-display ${currentTab ? "" : "opacity-50"}`,
    onClick: () => setCurrentTab(1)
  }, /* @__PURE__ */ React.createElement("p", {
    className: "block"
  }, "Learn About"), /* @__PURE__ */ React.createElement("span", {
    className: ` text-black text-3xl md:text-8xl inline ${currentTab ? "border-b-[.2em] border-red" : ""}`
  }, "SOULS"))), /* @__PURE__ */ React.createElement("div", {
    className: `${currentTab ? "hidden lg:hidden" : ""} lg:flex gap-16 lg:pt-[10vh] py-[10vh]`
  }, /* @__PURE__ */ React.createElement(TextBlock, {
    title: "What Is a VOX?",
    img: whatis_default
  }, "A VOX is a unique avatar with traits. VOX are collectible ERC-721 NFTs. Each VOX is programmatically generated and provably unique, meaning that no two VOX will look the same."), /* @__PURE__ */ React.createElement(TextBlock, {
    title: "VOX have Utility?",
    img: utility_default
  }, "Yes, VOX are designed to have various utilities. That means they will serve a purpose beyond just being a cute avatar that you can own and animate. VOX will be able to lock up GALA and eventually earn VOXcoin as rewards for play. There are additional utilities as well, such as play-to-earn rewards in ", /* @__PURE__ */ React.createElement("i", null, "Town Star"), " and in-game benefits in", /* @__PURE__ */ React.createElement("i", null, " Mirandus.")), /* @__PURE__ */ React.createElement(TextBlock, {
    title: "Our Metaverse",
    img: metav_default
  }, "Gala is teaming up with ", /* @__PURE__ */ React.createElement("i", null, "The Sims"), " creator Will Wright, the great innovator of digital universes, to bring VOX to life! ", /* @__PURE__ */ React.createElement("i", null, "VOXverse"), " ", "will be more than an endless drudge of collecting and crafting; it\u2019ll be a digital world of Web3 tech that allows collectors to explore, build memories, play, navigate fears, and earn rewards. So, get ready for the ", /* @__PURE__ */ React.createElement("i", null, "VOXverse!"))), /* @__PURE__ */ React.createElement("div", {
    className: `${!currentTab ? "hidden lg:hidden" : ""} lg:flex gap-16 lg:pt-[10vh] py-[10vh]`
  }, /* @__PURE__ */ React.createElement(TextBlock, {
    title: "Destiny & Free Will",
    img: destiny_default
  }, "Each VOX can claim a single Soul. Your specific Soul is determined by the precise moment at which your VOX was first minted from its box, similar to a zodiac sign. Still, Souls do not permanently attach to VOX. Instead, they are yours to transfer or sell depending on who you want your VOX to be.", " "), /* @__PURE__ */ React.createElement(TextBlock, {
    title: "Play to your Strengths",
    img: playto_default
  }, "Having a Soul allows you to level up certain traits faster in-game: Smarts, Wit, Might, Endurance, Agility, and Swagger. Play to your strengths and shore up your weaknesses. Use your Wit to outsmart a cunning dragon, or double down on Might and Swagger to intimidate an enemy. It\u2019s all about choosing your style of play; after all, you wouldn\u2019t bring a pool noodle to a sword fight."), /* @__PURE__ */ React.createElement(TextBlock, {
    title: "Boost your DeFi",
    img: boost_default
  }, "We will be introducing a new version of DeFi for VOX, not seen anywhere else. Rather than passive earning, users who own a VOX will be given access to an ecosystem that provides rewards based on active engagement. If a VOX has a Soul, they will earn even more rewards. The requirements for participating will be determined separately for each product available to you. You can still play the games and earn with a VOX that doesn\u2019t have a Soul\u2026 but where\u2019s the fun in that?")));
}
function TextBlock({ title = "Title", children, img }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-8 lg:w-1/3 my-8 bg-light flex flex-col rounded-lg"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-5xl leading-[1.2em]"
  }, title), /* @__PURE__ */ React.createElement("img", {
    src: img,
    alt: "",
    className: "py-6 w-full"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, children));
}

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index2,
  links: () => links3
});
init_react();
var import_react16 = require("@remix-run/react");
var import_react17 = require("react");
var import_gsap10 = __toESM(require("gsap"));

// app/c/Slider.jsx
init_react();
var import_react11 = require("react");
var import_gsap4 = __toESM(require("gsap"));

// app/c/sh/SoulsLogo.jsx
init_react();
function SoulsIcon({ name, className }) {
  function findSoul(name2) {
    switch (name2) {
      case "Maverick":
        return /* @__PURE__ */ React.createElement(MaverickSvg, {
          className
        });
      case "Artisan":
        return /* @__PURE__ */ React.createElement(ArtisanSvg, {
          className
        });
      case "Healer":
        return /* @__PURE__ */ React.createElement(HealerSvg, {
          className
        });
      case "Hermit":
        return /* @__PURE__ */ React.createElement(HermitSvg, {
          className
        });
      case "Hunter":
        return /* @__PURE__ */ React.createElement(HunterSvg, {
          className
        });
      case "Leader":
        return /* @__PURE__ */ React.createElement(LeaderSvg, {
          className
        });
      case "Sage":
        return /* @__PURE__ */ React.createElement(SageSvg, {
          className
        });
      case "Scholar":
        return /* @__PURE__ */ React.createElement(ScholarSvg, {
          className
        });
      case "Star":
        return /* @__PURE__ */ React.createElement(StarSvg, {
          className
        });
      case "Trickster":
        return /* @__PURE__ */ React.createElement(TricksterSvg, {
          className
        });
      case "Wanderer":
        return /* @__PURE__ */ React.createElement(WandererSvg, {
          className
        });
      case "Warrior":
        return /* @__PURE__ */ React.createElement(WarriorSvg, {
          className
        });
      default:
        return /* @__PURE__ */ React.createElement("div", null, name2);
    }
  }
  return findSoul(name);
}
function MaverickSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M.78 3.05h-.1v.49h.1v-.39h.1v-.1h-.1zM.88 3.15h.1v.1h-.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M.97 3.05v.1h.1v.39h.1v-.49h-.2zM.38 3.25h.1v.1h-.1zM.48 3.15h.1v.1h-.1zM.28 3.35h.1v.1h-.1zM.28 3.15h.1v.1h-.1zM.48 3.35h.1v.1h-.1zM3.61 3.25h.1v.1h-.1zM3.71 3.15h.1v.1h-.1zM3.51 3.35h.1v.1h-.1zM3.51 3.15h.1v.1h-.1zM3.71 3.35h.1v.1h-.1zM1.34 3.05h-.1v.49h.1v-.1h.1v.1h.1v-.49h-.2Zm.1.2v.1h-.1v-.2h.1v.1ZM1.8 3.15v.2h-.1V3.05h-.1v.4h.1v.09h.1v-.09h.1v-.4h-.1v.1zM1.96 3.05v.49h.2v-.09h-.1v-.1h.1v-.1h-.1v-.1h.1v-.1h-.2zM2.43 3.25v.1h.09v-.2h-.09v.1zM2.33 3.25v-.1h.1v-.1h-.2v.49h.1v-.09h.1v-.1h-.1v-.1zM2.43 3.45h.1v.1h-.1zM3.31 3.54h.1v-.19h-.1v.19zM3.31 3.15v.1h.1v-.2h-.1v.1zM3.21 3.15v-.1h-.1v.49h.1v-.19h.1v-.1h-.1v-.1zM2.59 3.15v.39h.09v-.49h-.09v.1zM2.85 3.05h-.09v.49H3.05v-.09h-.2V3.15h.2v-.1h-.2zM2.94 2.51V.81h-.99V.54h-.2v.27h-.59v1.7h1.77Zm-.2-.09H1.26V.9h.49v1.16h-.2v-.99h-.2v1.25h1.38V1.08h-.2v.99h-.2V.99h-.2v1.07h-.2V.9h.89v1.52h-.1Z"
  })));
}
function ArtisanSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.22 1.24h.09v.09h-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.14 1.16h.09v.09h-.09zM1.87.89h.09v.09h-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.4 1.86v.08h.09v.27h.08V1.33h-.08v-.09h.08V.89h-.08V.72H2.4V.63h-.18V.54h-.26v.09h.18v.09H2.31v.09h.09V.98h.09v.18H2.4V1.33h-.09v.09H2.14v.09h-.18v.08h.18V2h-.09v.09h.09v.38h.08v-.38h.09V2h-.09V1.51h.18v-.09h.09v.26H2.4v.09h.09v.09H2.4zM2.57 1.86h.09v.09h-.09zM2.57 1.68h.09v.09h-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.49 2.25h.09v.09h-.09zM1.52 2.25h.09v.09h-.09zM2.14 2.58h.09v.09h-.09zM1.96 2.29h.09v.09h-.09zM1.96 2.12h.09v.09h-.09zM1.87 2.58h.09v.09h-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.52 2.03v.18h.09v-.27h.09v-.08h-.09v-.09h.09v-.09h-.09v-.26h.09v.09H1.87v.61h-.08v.09h.08v.08h-.08v.09h.08v.09h.09V1.42H1.79v-.09h.08v-.09h-.08v.09H1.7V1.16h-.09V.98h.09V.81h.09v.08h.08V.81h-.08V.72H1.96V.54h-.09v.09H1.7v.09h-.09V.89h-.09V1.24h.09v.09h-.09v.35h-.08v.09h.08v.09h-.08v.08h.08v.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.87 1.16h.09v.09h-.09zM2.14.98h-.18v.18h.18V.98zM2.14.89h.09v.09h-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.22.81h.09V.9h-.09zM1.33 3.12h-.09V3.54h.09v-.08h.08v-.08h-.08V3.21h.08V3.38h.09v-.26H1.33zM3.23 3.29h.08v.08h-.08zM1.64 3.12h-.08v.09h.08v.33h.09v-.33h.08v-.09H1.64zM1.88 3.21v.33h.08V3.12h-.08v.09zM3.09 3.21V3.38H3V3.21h-.08v-.09H2.75V3.54h.09v-.25h.08V3.46H3v.08H3.17V3.12h-.08v.09zM2.21 3.12H2.04v.26h.25v.08h-.25v.08H2.38v-.25h-.26v-.08h.26v-.09H2.21zM.77 3.29h.08v.08H.77zM1.01 3.12H.93v.42h.08v-.08h.08v.08h.08v-.42H1Zm.08.17v.08h-.08V3.2h.08v.08ZM2.52 3.12h-.08v.42h.08v-.08h.08v.08h.08v-.42h-.17Zm.08.17v.08h-.08V3.2h.08v.08Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.41 3.46h.08v.08h-.08z"
  })));
}
function HealerSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.17 3.09v.12h-.12v-.24H.92v.61h.13v-.25h.12v.25h.12v-.61h-.12v.12zM1.38 2.97v.61h.25v-.12H1.5v-.13h.13v-.12H1.5v-.12h.13v-.12h-.25zM2.55 2.97v.61h.25v-.12h-.13v-.13h.13v-.12h-.13v-.12h.13v-.12h-.25zM3.14 3.21h-.12v-.12h.12v-.12H2.9v.61h.12v-.12h.12v-.13h.13v-.24h-.13v.12zM.58 3.21v.12h.24v-.12H.58zM3.49 3.21h-.12v.12h.24v-.12h-.12zM1.86 2.97h-.12v.61h.12v-.12h.12v.12h.12v-.61h-.25Zm.12.25v.12h-.12v-.25h.12v.12ZM2.33 3.33v-.36h-.12v.61h.24v-.12h-.12v-.13zM3.14 3.46h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M3.72 1.36h.1v.1h-.1zM3.33 1.65h-.49v.1h.49v.1h.09v-.1h.1v-.1h-.19z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.52 1.46h-.49v-.1h.69v-.1h-.69V.97h-.1v-.1h-.1v-.1h-.49v.1h-.1v.1h-.1v.1h-.2v-.1h-.1v-.1h-.1v-.1h-.49v.1h-.1v.1h-.1v.29H.38v.1h.69v.1H.38v.1h.1v.1h.1v-.1h.69v.1h.1v.1h.1v.1h.1v.1h-.2v-.1h-.6v.1h.49v.1h.49v.1h.1v.1h.1v.1h.2v-.1h.1v-.1h.1v-.1h.49v-.1h.49v-.1h-.59v.1h-.2v-.1h.1v-.1h.1v-.1h.1v-.1h.69v.1h.1v-.1h.1v-.1h-.2Zm-.79 0v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.29h.1v-.1h.1v-.1h.29v.1h.1v.1h.1v.1h.1v.1h.2v-.1h.1v-.1h.1v-.1h.1v-.1h.29v.1h.1v.1h.1v.29h-.1v.1h-.1ZM.28 1.36h.1v.1h-.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M.87 1.75h.39v-.1H.58v.1h.1v.1h.09v-.1h.1z"
  }))));
}
function HermitSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.3 3.19v.09h-.09V3.1h-.09v.44h.09V3.37h.09V3.54h.09V3.1H1.3v.09zM1.45 3.1v.44h.18v-.08h-.09v-.09h.09v-.09h-.09v-.09h.09V3.1h-.18zM.86 3.28v.09H1.03v-.09H.86zM2.55 3.19V3.54h.09V3.1h-.09v.09zM2.12 3.1h-.08v.44h.08v-.35h.09V3.1h-.09zM2.21 3.28v.26h.09v-.35h-.09v.09zM2.3 3.1v.09h.09V3.54h.09V3.1H2.3zM1.88 3.28v.09h.09v-.18h-.09v.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.8 3.28v-.09h.08V3.1H1.71v.44h.09v-.08h.08v-.09H1.8v-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.88 3.46h.09v.09h-.09zM3.14 3.28h-.08v.09H3.23v-.09h-.09zM2.8 3.1h-.09v.09h.09V3.54h.09v-.35h.08V3.1H2.8zM3.1 1.52h-.09v-.09h-.09v-.09h-.09v-.09h-.09v-.09h-.09v-.09h-.09V.98h-.09V.89h-.09V.8h-.09V.71H2.2V.62h-.09V.53h-.18v.09h-.09v.09h-.09V.8h-.09v.09h-.09v.09h-.09v.09h-.09v.09H1.3v.09h-.09v.09h-.09v.09h-.09v.09H.94v.09h.97v.26h-.18v-.09h-.18v.09h-.09v.18h.09v.09h.18v-.09h.18v.26h-.18v.09h.09v.09h.09v.09h.18v-.09h.09V2.4h.09v-.09h-.18v-.26h.18v.09h.18v-.09h.09v-.18h-.09v-.09h-.18v.09h-.18v-.26h.97v-.09Zm-.53 0H1.43v-.09h-.09v-.09h.09v-.09h.09v-.09h.09v-.09h.09V.98h.09V.89h.09V.8h.09V.71h.18V.8h.09v.09h.09v.09h.09v.09h.09v.09h.09v.09h.09v.09h.09v.09h-.09v.09H2.6Z"
  })));
}
function HunterSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1 3.06v.11H.89v-.22H.78v.55h.11v-.22H1v.22h.11v-.55H1v.11zM1.43 3.06v.33h-.11v-.44h-.11v.55h.33v-.55h-.11v.11zM2.06 3.06v.22h-.11v-.22h-.11v-.11h-.22v.55h.11v-.33h.11v.22h.11v.11h.22v-.55h-.11v.11zM2.36 2.95h-.11v.11h.11v.44h.11v-.44h.11v-.11h-.22zM2.67 2.95v.55H2.88v-.11h-.11v-.11h.11v-.11h-.11v-.11h.11v-.11H2.67zM3.19 3.17v.11h.11v-.22h-.11v.11zM3.61 3.17H3.5v.11h.33v-.11h-.22zM.37 3.17H.26v.11h.33v-.11H.37zM3.08 3.17v-.11h.11v-.11h-.22v.55h.11v-.11h.11v-.11h-.11v-.11zM3.19 3.39h.11v.11h-.11zM3.78.92h-.22v.11h-.77v.11h.55v.1h-.12v.11h-.11v.11H3v.11h-.1v.11h-.75v-.44h.64v-.1h-.64V.92h.1V.59h-.42v.33h.11v.22h-.65v.1h.65v.44h-.75v-.11h-.11v-.11H.97v-.11H.86v-.11H.75v-.1h.54v-.11H.53V.92H.2v.22h.22v.1h.11v.11h.11v.11h.11v.11h.11v.11h.11v.11h.11v.11h.86v.33h-.11v.11h.11v.11H2.15v-.11h.1v-.11h-.1V1.9h.86v-.11h.11v-.11h.11v-.11h.1v-.11h.11v-.11h.11v-.11h.12v-.1h.22V.92h-.11z"
  })));
}
function LeaderSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.65 2.9v.64h.26v-.12h-.13v-.13h.13v-.13h-.13v-.13h.13V2.9h-.26zM1.18 2.9v.64h.26v-.12h-.13v-.13h.13v-.13h-.13v-.13h.13V2.9h-.26zM1.68 2.9h-.13v.64h.13v-.13h.13v.13h.13V2.9h-.26Zm.13.26v.13h-.13v-.26h.13v.13ZM3.28 3.16v.13h.13v-.26h-.13v.13zM3.9 3.16v-.13h-.26v.39h.26v-.13h.13v-.13H3.9zM2.43 3.16v.26h.12v-.39h-.12v.13zM3.15 3.16v-.13h.13V2.9h-.26v.64h.13v-.12h.13v-.13h-.13v-.13zM.19 3.03v.13H.06v.13h.13v.13h.25v-.39H.19zM.82 3.42V2.9H.69v.64h.39v-.12H.82zM2.17 3.42v-.39h.26V2.9h-.39v.64h.39v-.12h-.26zM3.28 3.42h.13v.13h-.13zM3.21 1.06v.13h-.13v.13h-.13v-.26h-.13V.8h-.26v.26h-.13v.13H2.3V.8h-.13V.54h-.26V.8h-.13v.39h-.13v-.13h-.13V.8h-.26v.26h-.13v.26H1v-.13H.87v-.13H.61v.9H1v-.13h.39V1.7h.39v-.13h.52v.13h.39v.13h.39v.13h.39v-.9h-.26Zm-2.45.52v-.26h.13v.39H.76v-.13Zm.64 0h-.13v-.39h.26v.39H1.4Zm.64-.13h-.13v-.39h.26v.39h-.13Zm.52.13v-.39h.26v.39h-.26Zm.77-.13v.26H3.2v-.39h.13v.13Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.69 1.95h-.12v-.13h-.39v-.13h-.26v.13h-.39v.13h-.38v.13h.51v-.13h.78v.13h.51v-.13h-.26z"
  })));
}
function SageSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.42 3h-.11v.33h.22v.11h-.22v.1h.33v-.32h-.22v-.11h.22V3h-.22zM1.01 3.22H.9v-.11H.68v.11h.11v.11H.68v.11H.9v-.11h.11v.11h.11v-.33h-.11v.11zM2.56 3v.54H2.77v-.1h-.1v-.11h.1v-.11h-.1v-.11h.1V3H2.56zM1.84 3h-.11v.54h.11v-.11h.11v.11h.11V3h-.22Zm.11.22v.11h-.11v-.22h.11v.11ZM2.25 3h-.11v.54h.33v-.32h-.11v.22h-.11v-.33h.22V3h-.22zM3.41 3.22v-.11h-.22v.11h-.11v-.11h-.11v.33h.11v-.11h.11v.11h.22v-.11H3.3v-.11h.11zM1.59.54h.11v.11h-.11zM1.5 2.28h-.32v.11h.54v-.11H1.5zM2.7 2.28h-.33v.11h.54v-.11H2.7zM2.04 2.06h-.1v.11h-.11v.11h.11v.11H2.15v-.11h.11v-.11h-.11v-.11h-.11zM1.5 1.52h-.22v.33h.33v-.22H1.5v-.11z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.02 1.96h.11v-.54h-.11V1.2h.11v-.11h.11V.98h.11V.87h-.43v.11h-.33v.11h-.22v.11h-.11v.11h-.11v.11h-.22v-.11h-.11V1.2h-.11v-.11h-.22V.98h-.33V.87H.73v.11h.11v.11h.11v.11h.11v.22H.95v.54h.11v.11h.11v.11h.54v-.11h.11v-.11h.11v-.33h.22v.33h.11v.11h.11v.11h.54v-.11h.11v-.11Zm-1.19-.22v.11h-.11v.11h-.11v.11h-.33v-.11h-.11v-.11h-.11v-.33h.11v-.11h.43v.11h.11v.11h.11v.11Zm.98.22v.11h-.33v-.11h-.11v-.11h-.11v-.22h.11v-.11h.11v-.11h.43v.11h.11v.33h-.11v.11H2.8Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.59 1.52v.11h-.11v.22h.32v-.33H2.59zM1.81.54h.11v.11h-.11zM2.13.54h.11v.11h-.11zM2.24.65h.11v.11h-.11zM2.35.54h.11v.11h-.11zM1.7.65h.11v.11H1.7z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.81.76v.11h.43V.76h-.11V.65H1.92v.11h-.11z"
  })));
}
function ScholarSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.25 3.09V3.54h.18v-.09h-.09v-.27h.09v-.09h-.18zM2.66 3.09h-.09v.46h.09v-.09h.09v.09h.09v-.46h-.18Zm.09.18v.09h-.09v-.18h.09v.09ZM1.96 3.09h-.09v.46h.28v-.46h-.18Zm.09.18v.18h-.09v-.27h.09v.09ZM1.7 3.18v.09h-.09v-.18h-.09V3.54h.09v-.18h.09v.18h.09V3.09H1.7v.09zM.99 3.09H.9v.27h.18v.09H.9v.09h.27v-.27H.99v-.09h.18v-.09H.99zM.55 3.27v.09h.18v-.09H.55zM2.31 3.45v-.36h-.09V3.54h.27v-.09h-.18zM3.1 3.27v.09h.09v-.18H3.1v.09zM3.45 3.27h-.09v.09h.18v-.09h-.09zM3.01 3.27v-.09h.09v-.09h-.18V3.54h.09v-.09h.09v-.09h-.09v-.09zM3.1 3.45h.09v.09H3.1zM1.68 2.03h.11v-.11h-.32v.11H1.68z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.37 2.02v.64h.1v-.74h-.1v.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.68 2.66h.11v-.11H1.58v-.1h.1v-.11h.11v-.1h-.11v.1h-.1v.11h-.11V2.66H1.68z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.11 2.55h-.32v.11H2.21v-.11h-.1zM2.74 2.66v-.74h-.32v.1H2.63v.53H2.21v.11h.53z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.32 2.02h.1v-.1h-.1v-.11h.1v-.1H2.21V1.92h.11v.1zM2.11 1.6v.11h-.32V1.92h.1v-.11H2V2.02h-.11v.11h-.1v.11h.1v-.11H2v-.1h.11v-.22h.1V1.5h-.1v.1zM2.11 1.39h.11v.11h-.11z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.32 1.39h.1v-.11h.11v-.1h.1v-.11h.11V.76h-.11v.1h-.1v.11h-.11v.1h-.1v.11h-.11v.32h.11v-.11zM2.95.76h.11V.65h-.11V.54h-.1v.11h-.11v.32h.11V.86h.1v-.1zM1.68 1.71h.11v.11h-.11z"
  })));
}
function StarSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.56 2.92h-.1v.48h.1v-.09h.09v-.1h-.09v-.2h.09v.2h.1V2.92h-.19zM2.93 3.01V3.31h.19v-.1h-.1v-.1h.1v-.1h-.19zM1.82 2.92h-.1v.09h.1v.39h.09v-.39h.1v-.09h-.19zM.88 3.01v.1h.1v.1h-.1v.1h.2V3.01h-.2zM1.45 2.92h-.2V3.21H1.54v.1H1.25v.09h.39V3.11H1.35v-.1H1.64v-.09h-.19zM2.19 2.92h-.1v.48h.1v-.1h.1v.1h.1v-.48H2.2Zm.1.19v.1h-.1v-.19h.1v.1Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.65 3.31h.1v.1h-.1zM2.28 1.61h.12v.12h-.12zM2.28 1.05h.12v.12h-.12zM2.28 1.39v-.12h-.12V1.5h.12v-.11zM2.51 1.39v-.12h-.12V1.5h.12v-.11zM2.95 1.15v-.11h-.11V1.27h.11v-.12zM2.95 1.62v-.35h-.11v.47h.11v-.12zM2.84 1.74h.12v.12h-.12zM2.72 1.85H2.6v.24h.24v-.12h-.12v-.12h.12v-.11h-.12v.11z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.49 1.97h.12v.12h-.12zM2.84 1.97h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.07 1.97h-.12v.12h.24v-.12h-.12zM2.37 2.09h.12v.12h-.12zM2.49 2.09h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.6 2.09v.11h.24v-.11H2.6zM2.84 2.09h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.07 2.09h-.12v.11h.24v-.11h-.12zM3.19 2.09h.12v.12h-.12zM3.3 1.97h-.11v.12H3.42v-.12H3.3zM3.07 1.74h-.12v.11h.24v-.11h-.12zM3.3 1.74h-.11v.11H3.42v-.11H3.3zM3.54 1.5h.12v.12h-.12zM3.42 1.62v.12h.12V1.5h-.12v.12zM3.3 1.5h-.11v.24H3.42V1.5H3.3zM3.07 1.5h-.12v.24h.24V1.5h-.12zM3.07 1.27h-.12v.12h.24v-.12h-.12zM3.3 1.27h-.11v.12H3.42v-.12H3.3zM3.42 1.27h.12v.12h-.12zM3.54 1.27h.12v.12h-.12zM3.54 1.04V1.27H3.77V1.04H3.54zM3.77 1.04h.12v.12h-.12zM3.42 1.15v.12h.12V1.04h-.12v.11zM3.3 1.04h-.11V1.27H3.42V1.04H3.3zM3.07 1.04h-.12V1.27h.24V1.04h-.12zM2.74 1.39v-.12h-.11V1.5h.11v-.11zM2.04 1.72h-.11v.12H2.16v-.12h-.12zM2.16 2.06v-.12H1.93v.12H2.16zM2.04 1.04h.12V.92H1.93v.12h.11zM2.16.8V.69H1.93V.8H2.16zM1.69 1.61h.12v.12h-.12zM1.69 1.05h.12v.12h-.12zM1.58 1.27h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.58 1.39h.12v.12h-.12zM1.34 1.27h.12v.12h-.12zM1.25 1.39v-.24H1.02v.24H1.25zM1.25 1.15v-.11H1.02v.11H1.25zM1.14 1.39h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.25 1.85h.12v-.11h-.12V1.5H1.02v.35H1.25zM1.37 1.85h.12v.12h-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.6 1.97h-.11V2.2H1.72v-.11H1.6v-.12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.37 2.2h.12V1.97h-.47V2.2h.35zM1.02 2.09v-.12H.9V2.2h.12v-.11zM.9 2.2V1.97H.67v.12h.12v.11H.9zM1.02 1.74V1.5H.9v.35h.12v-.11zM.79 1.85H.9V1.5H.67v.35h.12zM.44 1.5v.12h.11v.12h.12V1.5H.44zM1.02 1.27v-.12H.9v.24h.12v-.12zM.79 1.39H.9v-.24H.67v.24h.12zM.44 1.15H.32v.12h.12v.12H.67v-.24H.44z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M.44 1.04H.32v.11h.35v-.11H.44zM.2 1.04h.12v.12H.2zM.79 1.15H.9v-.11H.67v.11h.12zM.9 1.04h.12v.12H.9zM1.34 1.39h.12v.12h-.12zM1.93 1.5h.11-.11v.12H2.16v-.35h-.12.12v-.12H1.93v.12h-.12v.12H2.04 1.81v.11h.12z"
  })));
}
function TricksterSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.07 3.24v.1h.11V3.13h-.11v.11zM3.53 3.24v.1h.1V3.13h-.1v.11zM3.71 3.24h.1v.1h-.1zM.97 3.24v-.11h.1v-.1h-.2v.51h.1v-.1h.1v-.1h-.1v-.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.43 3.24v-.11h.1v-.1H3.32v.51h.11v-.1h.1v-.1h-.1v-.1zM1.07 3.44h.1v.1h-.1zM3.53 3.44h.1v.1h-.1zM3.02 3.03v.51h.2v-.1h-.1v-.1h.1v-.1h-.1v-.11h.1v-.1h-.2zM2.74 3.03h-.11v.1h.11V3.54h.1V3.13h.1v-.1h-.2zM1.26 3.13V3.54h.1v-.51h-.1v.1zM1.56 3.03h-.1v.51H1.76v-.1h-.2v-.31h.2v-.1h-.2zM2.34 3.03h-.1V3.34H2.45v.1H2.24v.1H2.55V3.24H2.34v-.11H2.55v-.1H2.34zM.58 3.03H.47v.1h.11V3.54h.1V3.13h.1v-.1h-.2zM.28 3.24h.1v.1h-.1zM2.04 3.54h.11v-.2h-.11v.2zM2.04 3.13v.11h.11V3.03h-.11v.1zM1.94 3.13v-.1h-.1v.51h.1v-.2h.1v-.1h-.1v-.11zM.92 1.55h.11v-.1h.1v-.1H.92v.2zM1.81 1.35h.1v-.1h.11v-.11H1.81V1.35zM2.74 1.55h.1v-.1h.1v-.1h-.2v.2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.32 1.97h.1v-.93h-.1v-.1H1.7v.1h-.1v.93h.1v.1h.62v-.1Zm-.21 0H1.8v-.1h-.1v-.72h.1v-.1h.41v.1h.1v.72h-.1v.1h-.1ZM1.54 2.07v-.82h-.1v-.1H.82v.1h-.1v.93h.1v.1h.62v-.1h.1v-.1Zm-.21 0v.1H.92v-.1h-.1v-.72h.1v-.1h.41v.1h.1v.72h-.1ZM3.35 2.07v-.82h-.1v-.1h-.62v.1h-.1v.93h.1v.1h.62v-.1h.1v-.1Zm-.21 0v.1h-.41v-.1h-.1v-.72h.1v-.1h.41v.1h.1v.72h-.1ZM2.63.65h.1v.1h-.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.5.75h.11v.1h.82v-.1h.1v-.1h.1V.54h-.2v.11h-.11v.1h-.1v-.1h-.1V.54H1.91v.11h-.1v.1h-.1v-.1h-.1V.54H1.4v.11h.1v.1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.3.65h.1v.1h-.1zM1.33 1.86h-.1v.11h-.1v.1h.2V1.86zM2.22 1.66h-.1v.1h-.1v.1h.2v-.2zM3.15 1.86h-.11v.11h-.1v.1H3.15V1.86z"
  })));
}
function WandererSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1.09 2.36h-.1v.1h.38v-.1h.2v-.09H1.28v.09h-.19zM3 2.36h-.19v-.09h-.57v-.1h-.39v.1h-.28v.09h.38v-.09h.19v.09h.57v.1h.39v-.1H3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.19 2.17H3v-.1h-.19v-.68h.1v.1h.19v-.1H3v-.1h-.1v-.1h.19v-.1h-.1v-.1h-.1v-.1h.19v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.19v.1h-.1v.1h-.1v.1h-.1v.1h.19v.1h-.1v.1h-.1v-.1h-.1v-.1h-.1v-.1h-.19v.1h-.1v.1h-.1v.1h-.1v-.1h-.1v-.1h.19v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.19v.1h-.1v.1h-.1v.1h-.1v.1h.19v.1h-.1v.1h-.1v.1h.19v.1h-.1v.1h-.1v.1h.19v-.1h.1v.68H.97v.1h-.1v.1h.19v-.1h.38v-.1h-.1v-.68h.1v.1h.29v-.1h.1v.1h-.1v.1h-.1v.1h-.1v.1h.19v-.1h.1v.29h-.29v.1h-.1v.1h.19v-.1h.57v.1h.57v.1h.29v-.1Zm-.67-1.05h.1v.1h-.1v-.1Zm.38.1h-.1v-.1h.1v.1Zm0-.29h-.1v-.1h.1v.1Zm-.38-.1h.1v.1h-.1v-.1Zm-.1.38h.1v.1h-.1v.1h-.1v-.1h-.1v-.1h-.1v-.1h.1v.1h.19Zm-.29.29v-.1h.1v.1h-.1Zm-.57-.29h-.1v-.1h.1v.1Zm0-.29h-.1v-.1h.1v.1Zm-.38-.1h.1v.1h-.1v-.1Zm0 .29h.1v.1h-.1v-.1Zm.57.19v.1h-.1v-.1h-.1v-.1h.29v-.1h.1v.1h-.1v.1h-.1Zm.86.77h-.19v-.1h-.29v-.29h.1v.1h.19v-.1h-.1v-.1h-.1v-.1h.29v-.1h.1v.68Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M.9 2.17H1v.1H.9zM.79 3.14V3.44H.9v-.4H.79v.1zM.69 3.24v-.2h-.1v.4h.1v-.2zM.49 3.24v-.2h-.1v.4h.1v-.2zM1.08 3.04h-.1v.51h.1v-.1h.1v.1h.1v-.51h-.2Zm.1.2v.1h-.1v-.2h.1v.1ZM.69 3.44h.1v.1h-.1zM.49 3.44h.1v.1h-.1zM1.77 3.14v.2h-.1v-.2h-.1v-.1h-.2v.5h.1V3.24h.1v.2h.1v.1h.2v-.5h-.1v.1zM2.44 3.04v.5h.2v-.1h-.1v-.1h.1v-.1h-.1v-.1h.1v-.1h-.2zM2.25 3.24v.2h.1V3.14h-.1v.1zM3.11 3.04v.5h.2v-.1h-.1v-.1h.1v-.1h-.1v-.1h.1v-.1h-.2zM2.05 3.44V3.14h.2v-.1H1.95v.5H2.25v-.1h-.2zM3.6 3.14v.2h.1v-.2h-.1zM2.93 3.24v.1h.1v-.2h-.1v.1zM3.5 3.24v-.1h.1v-.1h-.2v.5h.1v-.1h.1v-.1h-.1v-.1zM2.82 3.24v-.1h.11v-.1H2.72v.5h.1v-.1h.11v-.1h-.11v-.1zM3.6 3.44h.1v.1h-.1zM2.93 3.44h.1v.1h-.1z"
  })));
}
function WarriorSvg({ className }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Logo Vox fill-red ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 4.09 4.09"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2.04.94h.2V.75h-.1v-.2h-.2v.2h-.09v.19h.19z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.62 2.1v-.09h.1v-.49h.1v-.1h.1v-.19h.09V.74h-.09v-.1h-.1v-.1H2.53v.1h.09v.1h.1v.1h.1V1.13h-.1v.1h-.1v.09h-.09v-.09h-.1v-.1h-.1v-.1h-.09v.49-.49h-.49v.49-.39h-.1v.1h-.1v.09h-.09v-.09h-.1v-.1h-.1V.84h.1v-.1h.1v-.1h.09v-.1H1.26v.1h-.1v.1h-.09v.49h.09v.19h.1v.1h.1v.49h.1v.19h.09v.19h.1v.2h.1V2.2h-.1v-.49h.1v-.09h.19v.48h.2v-.48h.19v-.1.19h.1v.49h-.1v.39h.1v-.2h.1V2.2h.09v-.1zM1.44 3.09h-.09v.46h.09v-.09h.09v.09h.09v-.46h-.18Zm.09.18v.09h-.09v-.18h.09v.09ZM1.18 3.18v.27h.09v-.36h-.09v.09zM1.09 3.27v-.18H1v.36h.09v-.18zM.91 3.27v-.18H.82v.36h.09v-.18zM.47 3.27v.09h.18v-.09H.47zM1.09 3.45h.09v.09h-.09zM.91 3.45H1v.09H.91zM2.39 3.18v.36h.09V3.09h-.09v.09zM2.74 3.09h-.18v.46h.36v-.46h-.18Zm.09.18v.18h-.18v-.27h.18v.09ZM1.88 3.27v.09h.09v-.18h-.09v.09zM2.23 3.27v.09h.09v-.18h-.09v.09zM3.18 3.27v.09h.09v-.18h-.09v.09zM3.53 3.27h-.09v.09h.18v-.09h-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.79 3.27v-.09h.09v-.09H1.7V3.54h.09v-.09h.09v-.09h-.09v-.09zM2.14 3.27v-.09h.09v-.09h-.19V3.54h.1v-.09h.09v-.09h-.09v-.09zM3.09 3.27v-.09h.09v-.09H3V3.54h.09v-.09h.09v-.09h-.09v-.09z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.88 3.45h.09v.09h-.09zM2.23 3.45h.09v.09h-.09zM3.18 3.45h.09v.09h-.09z"
  })));
}

// app/c/Slider.jsx
function Slider({ soulIndex, setSoulIndex, id, setSoulIn }) {
  const sliderUiRef = (0, import_react11.useRef)(null);
  const slideContentRef = (0, import_react11.useRef)(null);
  const wrapperRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
    const { ScrollTrigger: ScrollTrigger2 } = require("gsap/dist/ScrollTrigger");
    import_gsap4.default.registerPlugin(ScrollTrigger2);
    ScrollTrigger2.create({
      trigger: wrapperRef.current.parentElement,
      start: "top top",
      end: "bottom bottom",
      onToggle: (self2) => {
        fadeIn(sliderUiRef, self2.isActive);
        if (!self2.isActive) {
          setIsIn(false);
        }
      }
    });
  }, []);
  const [isIn, setIsIn] = (0, import_react11.useState)(false);
  const handleIsIn = () => setIsIn(!isIn);
  (0, import_react11.useEffect)(() => {
    animateSliderIn(sliderUiRef, slideContentRef, isIn);
    setSoulIn(isIn);
    if (isIn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isIn]);
  const [slideIndex, setSlideIndex] = (0, import_react11.useState)(0);
  const handleSlideIndex = (isForward) => {
    const newIndex = getNewIndex(slideIndex, isForward);
    setSlideIndex(newIndex);
    setSoulIndex(newIndex);
  };
  const currentSoul = SLIDER_CONTENT.SOULS[slideIndex];
  const [modalOpen, setModalOpen] = (0, import_react11.useState)(false);
  const handleModal = () => setModalOpen(!modalOpen);
  (0, import_react11.useEffect)(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalOpen]);
  return /* @__PURE__ */ React.createElement("div", {
    id,
    ref: wrapperRef,
    className: "Slider h-[100vh] sticky top-0 flex flex-col overflow-hidden"
  }, /* @__PURE__ */ React.createElement(Slides, {
    currentContent: currentSoul,
    childRef: slideContentRef,
    slideIndex,
    handleIsIn
  }), /* @__PURE__ */ React.createElement(SliderUi, {
    currentContent: currentSoul,
    childRef: sliderUiRef,
    slideIndex,
    handleSlideIndex,
    handleIsIn,
    handleModal
  }), /* @__PURE__ */ React.createElement(Modal, {
    isOpen: modalOpen,
    handleModal
  }));
}
function Modal({ isOpen, handleModal }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `${isOpen ? "absolute" : "hidden"} border-3  top-0 left-0 w-full h-full flex items-center justify-center`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute w-full h-full bg-black blur-xl opacity-40"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "TextBox p-10 my-[10vh] bg-light rounded-lg md:w-2/3 lg:w-1/3 xl:w-1/4 relative"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-red uppercase"
  }, "Who Will You Be?"), /* @__PURE__ */ React.createElement("h3", {
    className: "font-display font-black text-6xl mb-9"
  }, "THE 12 SOULS"), /* @__PURE__ */ React.createElement("p", {
    className: "font-light"
  }, "Every single Soul is different. No Soul is better or worse than another. It\u2019s all up to how you want to play in ", /* @__PURE__ */ React.createElement("i", null, "VOX Odyssey"), " and who you want to become in the ", /* @__PURE__ */ React.createElement("i", null, "VOXverse.")), /* @__PURE__ */ React.createElement("button", {
    onClick: () => handleModal(),
    className: "absolute top-5 right-5 w-8 h-8 rounded-[100%] bg-black text-white text-xs font-display"
  }, "X")));
}
function Slides({ childRef, slideIndex, handleIsIn, currentContent }) {
  return /* @__PURE__ */ React.createElement("div", {
    ref: childRef,
    className: "Slides absolute xl:w-1/3 lg:w-1/2 md:w-2/3 bottom-0 h-[70vh] md:h-[60vh] md:mb-[10vh] mb-[5vh] md:right-9 translate-x-[100%]"
  }, /* @__PURE__ */ React.createElement(Slide, {
    handleIsIn,
    slideIndex,
    currentContent
  }));
}
function Slide({ handleIsIn, currentContent }) {
  const [currentTab, setCurrentTab] = (0, import_react11.useState)(0);
  const resetCurrent = () => setCurrentTab(0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-full bg-light rounded-2xl p-8 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between grow gap-9 items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "font-display uppercase"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block md:text-[1em] sm:text-[.8em] lg:text-[1.3em] xl:text-[1.3em] leading-[1em]"
  }, "THE"), /* @__PURE__ */ React.createElement("span", {
    className: "block text-[1.5em] leading-[1.1em] sm:text-[3em] md:text-[2em] lg:text-[2.5em] xl:text-[3em]"
  }, currentContent.title)), /* @__PURE__ */ React.createElement("h4", {
    className: "text-red uppercase text-xs"
  }, currentContent.tagline)), /* @__PURE__ */ React.createElement(SoulsIcon, {
    name: currentContent.title,
    className: "md:h-[5vw] md:w-[5vw] h-[6vw] w-[6vw] min-h-[50px] min-w-[50px] hidden md:block"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-black text-white rounded-[100%] leading-[0px] w-8 h-8 shrink-0 flex justify-center items-center uppercase text-xs",
    onClick: () => {
      handleIsIn();
      resetCurrent();
    }
  }, "X")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-9 h-full flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between gap-8 text-[0.8em] mb-5 border-b-2 border-white pb-5"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `${currentTab === 0 ? "border-b-2 border-red" : "opacity-20"} uppercase`,
    onClick: () => setCurrentTab(0)
  }, "Overview"), /* @__PURE__ */ React.createElement("button", {
    className: `${currentTab === 1 ? "border-b-2 border-red" : "opacity-20"} uppercase`,
    onClick: () => setCurrentTab(1)
  }, "Personality"), /* @__PURE__ */ React.createElement("button", {
    className: `${currentTab === 2 ? "border-b-2 border-red" : "opacity-20"} uppercase`,
    onClick: () => setCurrentTab(2)
  }, "Friends & Foes")), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-scroll lg:h-[35vh] md:h-[40vh] h-[40vh]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:hidden flex"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4 mr-8"
  }, "Symbol"), /* @__PURE__ */ React.createElement(SoulsIcon, {
    name: currentContent.title,
    className: "h-[20vw] w-[20vw]"
  })), /* @__PURE__ */ React.createElement("div", {
    className: `${currentTab === 0 ? "visible" : "hidden"} overflow-scroll`
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Overview"), /* @__PURE__ */ React.createElement("p", {
    className: " text-sm"
  }, currentContent.content), /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Great at"), /* @__PURE__ */ React.createElement("p", {
    className: " text-sm"
  }, currentContent.adds.great), /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Stats"), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm py-2 flex gap-3 flex-wrap"
  }, currentContent.stats.map((it, i) => /* @__PURE__ */ React.createElement("p", {
    className: "text-red py-2 px-4 border-red border bg-[#F9EEDE] text-xs rounded-md inline-block whitespace-nowrap",
    key: i
  }, "+ ", it.value, " ", it.title, " Gain")))), /* @__PURE__ */ React.createElement("div", {
    className: `${currentTab === 1 ? "visible" : "hidden"} overflow-scroll`
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Strenghts"), /* @__PURE__ */ React.createElement("p", {
    className: " text-sm"
  }, currentContent.adds.strengths.content), /* @__PURE__ */ React.createElement("ul", {
    className: " text-sm py-2 style-list"
  }, currentContent.adds.strengths.list.map((it, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, it))), /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Weaknesses"), /* @__PURE__ */ React.createElement("p", {
    className: " text-sm"
  }, currentContent.adds.weaknesses.content), /* @__PURE__ */ React.createElement("ul", {
    className: " text-sm py-2 style-list"
  }, currentContent.adds.weaknesses.list.map((it, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, it))), /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Quirks"), /* @__PURE__ */ React.createElement("div", {
    className: " text-sm"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "style-list"
  }, currentContent.adds.quirks.map((cont, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, cont))))), /* @__PURE__ */ React.createElement("div", {
    className: `${currentTab === 2 ? "visible" : "hidden"} overflow-scroll`
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Friends With"), /* @__PURE__ */ React.createElement("p", {
    className: " text-sm"
  }, currentContent.adds.friend), /* @__PURE__ */ React.createElement("h5", {
    className: "uppercase text-red text-sm py-4"
  }, "Clashes With"), /* @__PURE__ */ React.createElement("p", {
    className: " text-sm"
  }, currentContent.adds.clashes)))));
}
function SliderUi({
  handleSlideIndex,
  handleIsIn,
  childRef,
  currentContent,
  handleModal
}) {
  return /* @__PURE__ */ React.createElement("div", {
    ref: childRef,
    className: "SlideUi absolute w-full h-[15vh] md:bottom-0 bottom-[5vh] flex justify-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:w-1/2 md:w-4/5 w-full bg-light rounded-2xl flex items-center justify-between px-6 py-8"
  }, /* @__PURE__ */ React.createElement(SliderArrow, {
    onClick: () => handleSlideIndex(false),
    isBack: "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between grow gap-9 px-9 items-center"
  }, /* @__PURE__ */ React.createElement(SoulsIcon, {
    name: currentContent.title,
    className: "w-[5vw] sm:w-[15vw] md:w-[10vw] xl:w-[7vw] max-w-[150px] sm:block hidden"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "font-display uppercase"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block md:text-[1em] sm:text-[.8em] lg:text-[1.3em] xl:text-[1.8em] leading-[1.1em]"
  }, "THE"), /* @__PURE__ */ React.createElement("span", {
    className: "block text-[1.5em] leading-[1.1em] sm:text-[3em] md:text-[2em] lg:text-[2.5em] xl:text-[3em]"
  }, currentContent.title)), /* @__PURE__ */ React.createElement("h4", {
    className: "text-red uppercase text-xs md:block hidden max-w-[30ch]"
  }, currentContent.tagline)), /* @__PURE__ */ React.createElement("button", {
    className: "bg-black text-white rounded-md p-2 uppercase md:text-xs  text-[.6em]",
    onClick: () => handleIsIn()
  }, "Discover")), /* @__PURE__ */ React.createElement(SliderArrow, {
    onClick: () => handleSlideIndex(true)
  })), /* @__PURE__ */ React.createElement(ModalTrigger, {
    handleModal
  }));
}
function ModalTrigger({ handleModal }) {
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => handleModal(),
    className: "absolute text-xs uppercase text-red flex justify-between items-center bg-black p-3 rounded-t-xl translate-y-[-100%]"
  }, /* @__PURE__ */ React.createElement("p", null, "What VOX will I Be?"), /* @__PURE__ */ React.createElement("p", {
    className: "ml-8 text-black bg-red w-[2em] h-[2em] flex items-center justify-center rounded-[100%]"
  }, "?"));
}
function SliderArrow({ isBack = false, onClick = false }) {
  return /* @__PURE__ */ React.createElement("button", {
    onClick
  }, /* @__PURE__ */ React.createElement(Arrow, {
    isBack
  }));
}
function getNewIndex(currentI, isForward) {
  let nextIndex = isForward ? currentI + 1 : currentI - 1;
  if (nextIndex > 11) {
    nextIndex = 0;
  } else if (nextIndex < 0) {
    nextIndex = 11;
  }
  return nextIndex;
}
function animateSliderIn(itemUi, itemSlide, goIn = false) {
  if (!goIn) {
    import_gsap4.default.to(itemUi.current, {
      duration: 0.5,
      ease: "expo.out",
      y: "0%"
    });
    import_gsap4.default.to(itemSlide.current, {
      duration: 0.5,
      ease: "expo.out",
      x: "120%"
    });
  } else {
    import_gsap4.default.to(itemUi.current, {
      duration: 0.5,
      ease: "expo.out",
      y: "200%"
    });
    import_gsap4.default.to(itemSlide.current, {
      duration: 0.5,
      ease: "expo.out",
      x: "0%"
    });
  }
}
function fadeIn(item, goIn = false) {
  let val = goIn ? 1 : 0;
  import_gsap4.default.to(item.current, {
    duration: 0.5,
    ease: "expo.out",
    autoAlpha: val,
    delay: 0
  });
}

// app/c/TextBox.jsx
init_react();
function TextBoxes() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "TextBoxes flex flex-col mb-[300vh]"
  }, /* @__PURE__ */ React.createElement(TextBox, {
    content: TEXTBOXES[0],
    index: 0
  }, "If there\u2019s one great mystery in all the universes, metaverses, and multiverses, it\u2019s the living Soul. A Soul shapes your VOX\u2019s personality. It changes who your VOX is, what drives them, and how they approach adventures. Some VOX are book smart. Others are full of swagger and sass. Maybe your VOX is leading the charge in battle, or prefers a battle of wits. Who will you be?"), /* @__PURE__ */ React.createElement(TextBox, {
    content: TEXTBOXES[1],
    index: 1
  }, "There are endless possibilities in the metaverse. VOX owners with Souls will enjoy benefits to both gameplay and future DeFi. Collect a soul to play up the unique strengths of your VOX in games like", " ", /* @__PURE__ */ React.createElement("i", null, "VOX Odyssey"), " and the ", /* @__PURE__ */ React.createElement("i", null, "VOXverse"), " while gaining access to potential DeFi rewards. There are 12 Souls. Who will you be?"));
}
function TextBox({ content, index, children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: `TextBox p-10 my-[10vh] bg-light rounded-lg  md:w-full lg:w-1/3 xl:w-1/4 ${index ? "md:ml-auto" : null} `
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-red"
  }, content.subHead), /* @__PURE__ */ React.createElement("h3", {
    className: "font-display font-black text-6xl mb-9"
  }, content.head), /* @__PURE__ */ React.createElement("p", {
    className: "font-light"
  }, children));
}

// app/c/Preloader.jsx
init_react();
var import_react12 = require("react");
var import_gsap5 = __toESM(require("gsap"));
function Preloader({ isLoading = 0, isFinished = false }) {
  const loadingText = (0, import_react12.useRef)(null);
  const wrapper = (0, import_react12.useRef)(null);
  let loadingCounter = { c: 0 };
  (0, import_react12.useEffect)(() => {
    if (isFinished) {
      import_gsap5.default.to(loadingText.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: "expo.out",
        delay: 0.5
      });
      import_gsap5.default.to(wrapper.current, {
        autoAlpha: 0,
        duration: 0.5,
        delay: 1,
        ease: "expo.in",
        onComplete: () => wrapper.current.style.display = "none"
      });
    }
  }, [isFinished]);
  (0, import_react12.useEffect)(() => {
    import_gsap5.default.to(loadingCounter, {
      c: isLoading,
      duration: 1,
      ease: "expo.out",
      onUpdate: () => {
        loadingText.current.textContent = Math.round(loadingCounter.c);
      }
    });
  }, [isLoading]);
  return /* @__PURE__ */ React.createElement("div", {
    ref: wrapper,
    className: "Preloader fixed top-0 left-0 w-full h-full p-9 flex flex-col justify-between bg-black z-[999] items-center pt-[40vh]"
  }, /* @__PURE__ */ React.createElement("p", {
    ref: loadingText,
    className: "font-display text-white md:text-[10vw] text-[20vw]"
  }, isLoading), /* @__PURE__ */ React.createElement("div", {
    className: "Scroller an-scroller overflow-hidden text-white whitespace-nowrap flex justify-start items-start content-start font-light uppercase text-xs"
  }, /* @__PURE__ */ React.createElement("div", null, SLIDER_CONTENT.SOULS.map((soul, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: "inline px-8"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "px-2 inline font-display"
  }, "THE ", soul.title), /* @__PURE__ */ React.createElement("p", {
    className: "px-2 inline"
  }, soul.tagline))), SLIDER_CONTENT.SOULS.map((soul, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: "inline px-8"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "px-2 inline font-display"
  }, "THE ", soul.title), /* @__PURE__ */ React.createElement("p", {
    className: "px-2 inline"
  }, soul.tagline))), SLIDER_CONTENT.SOULS.map((soul, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: "inline px-8"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "px-2 inline font-display"
  }, "THE ", soul.title), /* @__PURE__ */ React.createElement("p", {
    className: "px-2 inline"
  }, soul.tagline))))));
}

// app/gl/Canvas.jsx
init_react();

// app/gl/gl.js
init_react();
var import_tiny_emitter2 = __toESM(require("tiny-emitter"));
var import_three23 = require("three");
var import_gsap8 = __toESM(require("gsap"));

// app/gl/pp.js
init_react();
var import_three7 = require("three");

// app/gl/util/postprocessing/EffectComposer.js
init_react();
var import_three3 = require("three");

// app/gl/util/shaders/CopyShader.js
init_react();
var CopyShader = {
  uniforms: {
    "tDiffuse": { value: null },
    "opacity": { value: 1 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`
};

// app/gl/util/postprocessing/ShaderPass.js
init_react();
var import_three2 = require("three");

// app/gl/util/postprocessing/Pass.js
init_react();
var import_three = require("three");
var Pass = class {
  constructor() {
    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;
    this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
};
var _camera = new import_three.OrthographicCamera(-1, 1, 1, -1, 0, 1);
var _geometry = new import_three.BufferGeometry();
_geometry.setAttribute("position", new import_three.Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
_geometry.setAttribute("uv", new import_three.Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
var FullScreenQuad = class {
  constructor(material) {
    this._mesh = new import_three.Mesh(_geometry, material);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(renderer) {
    renderer.render(this._mesh, _camera);
  }
  get material() {
    return this._mesh.material;
  }
  set material(value) {
    this._mesh.material = value;
  }
};

// app/gl/util/postprocessing/ShaderPass.js
var ShaderPass = class extends Pass {
  constructor(shader, textureID) {
    super();
    this.textureID = textureID !== void 0 ? textureID : "tDiffuse";
    if (shader instanceof import_three2.ShaderMaterial) {
      this.uniforms = shader.uniforms;
      this.material = shader;
    } else if (shader) {
      this.uniforms = import_three2.UniformsUtils.clone(shader.uniforms);
      this.material = new import_three2.ShaderMaterial({
        defines: Object.assign({}, shader.defines),
        uniforms: this.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader
      });
    }
    this.fsQuad = new FullScreenQuad(this.material);
  }
  render(renderer, writeBuffer, readBuffer) {
    if (this.uniforms[this.textureID]) {
      this.uniforms[this.textureID].value = readBuffer.texture;
    }
    this.fsQuad.material = this.material;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear)
        renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
      this.fsQuad.render(renderer);
    }
  }
};

// app/gl/util/postprocessing/MaskPass.js
init_react();
var MaskPass = class extends Pass {
  constructor(scene, camera) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.clear = true;
    this.needsSwap = false;
    this.inverse = false;
  }
  render(renderer, writeBuffer, readBuffer) {
    const context = renderer.getContext();
    const state = renderer.state;
    state.buffers.color.setMask(false);
    state.buffers.depth.setMask(false);
    state.buffers.color.setLocked(true);
    state.buffers.depth.setLocked(true);
    let writeValue, clearValue;
    if (this.inverse) {
      writeValue = 0;
      clearValue = 1;
    } else {
      writeValue = 1;
      clearValue = 0;
    }
    state.buffers.stencil.setTest(true);
    state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
    state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 4294967295);
    state.buffers.stencil.setClear(clearValue);
    state.buffers.stencil.setLocked(true);
    renderer.setRenderTarget(readBuffer);
    if (this.clear)
      renderer.clear();
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(writeBuffer);
    if (this.clear)
      renderer.clear();
    renderer.render(this.scene, this.camera);
    state.buffers.color.setLocked(false);
    state.buffers.depth.setLocked(false);
    state.buffers.stencil.setLocked(false);
    state.buffers.stencil.setFunc(context.EQUAL, 1, 4294967295);
    state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
    state.buffers.stencil.setLocked(true);
  }
};
var ClearMaskPass = class extends Pass {
  constructor() {
    super();
    this.needsSwap = false;
  }
  render(renderer) {
    renderer.state.buffers.stencil.setLocked(false);
    renderer.state.buffers.stencil.setTest(false);
  }
};

// app/gl/util/postprocessing/EffectComposer.js
var EffectComposer = class {
  constructor(renderer, renderTarget) {
    this.renderer = renderer;
    if (renderTarget === void 0) {
      const size = renderer.getSize(new import_three3.Vector2());
      this._pixelRatio = renderer.getPixelRatio();
      this._width = size.width;
      this._height = size.height;
      renderTarget = new import_three3.WebGLRenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio);
      renderTarget.texture.name = "EffectComposer.rt1";
    } else {
      this._pixelRatio = 1;
      this._width = renderTarget.width;
      this._height = renderTarget.height;
    }
    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();
    this.renderTarget2.texture.name = "EffectComposer.rt2";
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
    this.renderToScreen = true;
    this.passes = [];
    if (CopyShader === void 0) {
      console.error("THREE.EffectComposer relies on CopyShader");
    }
    if (ShaderPass === void 0) {
      console.error("THREE.EffectComposer relies on ShaderPass");
    }
    this.copyPass = new ShaderPass(CopyShader);
    this.clock = new import_three3.Clock();
  }
  swapBuffers() {
    const tmp = this.readBuffer;
    this.readBuffer = this.writeBuffer;
    this.writeBuffer = tmp;
  }
  addPass(pass) {
    this.passes.push(pass);
    pass.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(pass, index) {
    this.passes.splice(index, 0, pass);
    pass.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(pass) {
    const index = this.passes.indexOf(pass);
    if (index !== -1) {
      this.passes.splice(index, 1);
    }
  }
  isLastEnabledPass(passIndex) {
    for (let i = passIndex + 1; i < this.passes.length; i++) {
      if (this.passes[i].enabled) {
        return false;
      }
    }
    return true;
  }
  render(deltaTime) {
    if (deltaTime === void 0) {
      deltaTime = this.clock.getDelta();
    }
    const currentRenderTarget = this.renderer.getRenderTarget();
    let maskActive = false;
    for (let i = 0, il = this.passes.length; i < il; i++) {
      const pass = this.passes[i];
      if (pass.enabled === false)
        continue;
      pass.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i);
      pass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime, maskActive);
      if (pass.needsSwap) {
        if (maskActive) {
          const context = this.renderer.getContext();
          const stencil = this.renderer.state.buffers.stencil;
          stencil.setFunc(context.NOTEQUAL, 1, 4294967295);
          this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime);
          stencil.setFunc(context.EQUAL, 1, 4294967295);
        }
        this.swapBuffers();
      }
      if (MaskPass !== void 0) {
        if (pass instanceof MaskPass) {
          maskActive = true;
        } else if (pass instanceof ClearMaskPass) {
          maskActive = false;
        }
      }
    }
    this.renderer.setRenderTarget(currentRenderTarget);
  }
  reset(renderTarget) {
    if (renderTarget === void 0) {
      const size = this.renderer.getSize(new import_three3.Vector2());
      this._pixelRatio = this.renderer.getPixelRatio();
      this._width = size.width;
      this._height = size.height;
      renderTarget = this.renderTarget1.clone();
      renderTarget.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose();
    this.renderTarget2.dispose();
    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
  }
  setSize(width, height) {
    this._width = width;
    this._height = height;
    const effectiveWidth = this._width * this._pixelRatio;
    const effectiveHeight = this._height * this._pixelRatio;
    this.renderTarget1.setSize(effectiveWidth, effectiveHeight);
    this.renderTarget2.setSize(effectiveWidth, effectiveHeight);
    for (let i = 0; i < this.passes.length; i++) {
      this.passes[i].setSize(effectiveWidth, effectiveHeight);
    }
  }
  setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;
    this.setSize(this._width, this._height);
  }
};
var _camera2 = new import_three3.OrthographicCamera(-1, 1, 1, -1, 0, 1);
var _geometry2 = new import_three3.BufferGeometry();
_geometry2.setAttribute("position", new import_three3.Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
_geometry2.setAttribute("uv", new import_three3.Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));

// app/gl/util/postprocessing/RenderPass.js
init_react();
var import_three4 = require("three");
var RenderPass = class extends Pass {
  constructor(scene, camera, overrideMaterial, clearColor, clearAlpha) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.overrideMaterial = overrideMaterial;
    this.clearColor = clearColor;
    this.clearAlpha = clearAlpha !== void 0 ? clearAlpha : 0;
    this.clear = true;
    this.clearDepth = false;
    this.needsSwap = false;
    this._oldClearColor = new import_three4.Color();
  }
  render(renderer, writeBuffer, readBuffer) {
    const oldAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    let oldClearAlpha, oldOverrideMaterial;
    if (this.overrideMaterial !== void 0) {
      oldOverrideMaterial = this.scene.overrideMaterial;
      this.scene.overrideMaterial = this.overrideMaterial;
    }
    if (this.clearColor) {
      renderer.getClearColor(this._oldClearColor);
      oldClearAlpha = renderer.getClearAlpha();
      renderer.setClearColor(this.clearColor, this.clearAlpha);
    }
    if (this.clearDepth) {
      renderer.clearDepth();
    }
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
    if (this.clear)
      renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
    renderer.render(this.scene, this.camera);
    if (this.clearColor) {
      renderer.setClearColor(this._oldClearColor, oldClearAlpha);
    }
    if (this.overrideMaterial !== void 0) {
      this.scene.overrideMaterial = oldOverrideMaterial;
    }
    renderer.autoClear = oldAutoClear;
  }
};

// app/gl/util/postprocessing/UnrealBloomPass.js
init_react();
var import_three6 = require("three");

// app/gl/util/shaders/LuminosityHighPassShader.js
init_react();
var import_three5 = require("three");
var LuminosityHighPassShader = {
  shaderID: "luminosityHighPass",
  uniforms: {
    "tDiffuse": { value: null },
    "luminosityThreshold": { value: 1 },
    "smoothWidth": { value: 1 },
    "defaultColor": { value: new import_three5.Color(0) },
    "defaultOpacity": { value: 0 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
};

// app/gl/util/postprocessing/UnrealBloomPass.js
var UnrealBloomPass = class extends Pass {
  constructor(resolution, strength, radius, threshold) {
    super();
    this.strength = strength !== void 0 ? strength : 1;
    this.radius = radius;
    this.threshold = threshold;
    this.resolution = resolution !== void 0 ? new import_three6.Vector2(resolution.x, resolution.y) : new import_three6.Vector2(256, 256);
    this.clearColor = new import_three6.Color(0, 0, 0);
    this.renderTargetsHorizontal = [];
    this.renderTargetsVertical = [];
    this.nMips = 5;
    let resx = Math.round(this.resolution.x / 2);
    let resy = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new import_three6.WebGLRenderTarget(resx, resy);
    this.renderTargetBright.texture.name = "UnrealBloomPass.bright";
    this.renderTargetBright.texture.generateMipmaps = false;
    for (let i = 0; i < this.nMips; i++) {
      const renderTargetHorizonal = new import_three6.WebGLRenderTarget(resx, resy);
      renderTargetHorizonal.texture.name = "UnrealBloomPass.h" + i;
      renderTargetHorizonal.texture.generateMipmaps = false;
      this.renderTargetsHorizontal.push(renderTargetHorizonal);
      const renderTargetVertical = new import_three6.WebGLRenderTarget(resx, resy);
      renderTargetVertical.texture.name = "UnrealBloomPass.v" + i;
      renderTargetVertical.texture.generateMipmaps = false;
      this.renderTargetsVertical.push(renderTargetVertical);
      resx = Math.round(resx / 2);
      resy = Math.round(resy / 2);
    }
    if (LuminosityHighPassShader === void 0)
      console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");
    const highPassShader = LuminosityHighPassShader;
    this.highPassUniforms = import_three6.UniformsUtils.clone(highPassShader.uniforms);
    this.highPassUniforms["luminosityThreshold"].value = threshold;
    this.highPassUniforms["smoothWidth"].value = 0.01;
    this.materialHighPassFilter = new import_three6.ShaderMaterial({
      uniforms: this.highPassUniforms,
      vertexShader: highPassShader.vertexShader,
      fragmentShader: highPassShader.fragmentShader,
      defines: {}
    });
    this.separableBlurMaterials = [];
    const kernelSizeArray = [3, 5, 7, 9, 11];
    resx = Math.round(this.resolution.x / 2);
    resy = Math.round(this.resolution.y / 2);
    for (let i = 0; i < this.nMips; i++) {
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i]));
      this.separableBlurMaterials[i].uniforms["texSize"].value = new import_three6.Vector2(resx, resy);
      resx = Math.round(resx / 2);
      resy = Math.round(resy / 2);
    }
    this.compositeMaterial = this.getCompositeMaterial(this.nMips);
    this.compositeMaterial.uniforms["blurTexture1"].value = this.renderTargetsVertical[0].texture;
    this.compositeMaterial.uniforms["blurTexture2"].value = this.renderTargetsVertical[1].texture;
    this.compositeMaterial.uniforms["blurTexture3"].value = this.renderTargetsVertical[2].texture;
    this.compositeMaterial.uniforms["blurTexture4"].value = this.renderTargetsVertical[3].texture;
    this.compositeMaterial.uniforms["blurTexture5"].value = this.renderTargetsVertical[4].texture;
    this.compositeMaterial.uniforms["bloomStrength"].value = strength;
    this.compositeMaterial.uniforms["bloomRadius"].value = 0.1;
    this.compositeMaterial.needsUpdate = true;
    const bloomFactors = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms["bloomFactors"].value = bloomFactors;
    this.bloomTintColors = [new import_three6.Vector3(1, 1, 1), new import_three6.Vector3(1, 1, 1), new import_three6.Vector3(1, 1, 1), new import_three6.Vector3(1, 1, 1), new import_three6.Vector3(1, 1, 1)];
    this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;
    if (CopyShader === void 0) {
      console.error("THREE.UnrealBloomPass relies on CopyShader");
    }
    const copyShader = CopyShader;
    this.copyUniforms = import_three6.UniformsUtils.clone(copyShader.uniforms);
    this.copyUniforms["opacity"].value = 1;
    this.materialCopy = new import_three6.ShaderMaterial({
      uniforms: this.copyUniforms,
      vertexShader: copyShader.vertexShader,
      fragmentShader: copyShader.fragmentShader,
      blending: import_three6.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      transparent: true
    });
    this.enabled = true;
    this.needsSwap = false;
    this._oldClearColor = new import_three6.Color();
    this.oldClearAlpha = 1;
    this.basic = new import_three6.MeshBasicMaterial();
    this.fsQuad = new FullScreenQuad(null);
  }
  dispose() {
    for (let i = 0; i < this.renderTargetsHorizontal.length; i++) {
      this.renderTargetsHorizontal[i].dispose();
    }
    for (let i = 0; i < this.renderTargetsVertical.length; i++) {
      this.renderTargetsVertical[i].dispose();
    }
    this.renderTargetBright.dispose();
  }
  setSize(width, height) {
    let resx = Math.round(width / 2);
    let resy = Math.round(height / 2);
    this.renderTargetBright.setSize(resx, resy);
    for (let i = 0; i < this.nMips; i++) {
      this.renderTargetsHorizontal[i].setSize(resx, resy);
      this.renderTargetsVertical[i].setSize(resx, resy);
      this.separableBlurMaterials[i].uniforms["texSize"].value = new import_three6.Vector2(resx, resy);
      resx = Math.round(resx / 2);
      resy = Math.round(resy / 2);
    }
  }
  render(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
    renderer.getClearColor(this._oldClearColor);
    this.oldClearAlpha = renderer.getClearAlpha();
    const oldAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setClearColor(this.clearColor, 0);
    if (maskActive)
      renderer.state.buffers.stencil.setTest(false);
    if (this.renderToScreen) {
      this.fsQuad.material = this.basic;
      this.basic.map = readBuffer.texture;
      renderer.setRenderTarget(null);
      renderer.clear();
      this.fsQuad.render(renderer);
    }
    this.highPassUniforms["tDiffuse"].value = readBuffer.texture;
    this.highPassUniforms["luminosityThreshold"].value = this.threshold;
    this.fsQuad.material = this.materialHighPassFilter;
    renderer.setRenderTarget(this.renderTargetBright);
    renderer.clear();
    this.fsQuad.render(renderer);
    let inputRenderTarget = this.renderTargetBright;
    for (let i = 0; i < this.nMips; i++) {
      this.fsQuad.material = this.separableBlurMaterials[i];
      this.separableBlurMaterials[i].uniforms["colorTexture"].value = inputRenderTarget.texture;
      this.separableBlurMaterials[i].uniforms["direction"].value = UnrealBloomPass.BlurDirectionX;
      renderer.setRenderTarget(this.renderTargetsHorizontal[i]);
      renderer.clear();
      this.fsQuad.render(renderer);
      this.separableBlurMaterials[i].uniforms["colorTexture"].value = this.renderTargetsHorizontal[i].texture;
      this.separableBlurMaterials[i].uniforms["direction"].value = UnrealBloomPass.BlurDirectionY;
      renderer.setRenderTarget(this.renderTargetsVertical[i]);
      renderer.clear();
      this.fsQuad.render(renderer);
      inputRenderTarget = this.renderTargetsVertical[i];
    }
    this.fsQuad.material = this.compositeMaterial;
    this.compositeMaterial.uniforms["bloomStrength"].value = this.strength;
    this.compositeMaterial.uniforms["bloomRadius"].value = this.radius;
    this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;
    renderer.setRenderTarget(this.renderTargetsHorizontal[0]);
    renderer.clear();
    this.fsQuad.render(renderer);
    this.fsQuad.material = this.materialCopy;
    this.copyUniforms["tDiffuse"].value = this.renderTargetsHorizontal[0].texture;
    if (maskActive)
      renderer.state.buffers.stencil.setTest(true);
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(readBuffer);
      this.fsQuad.render(renderer);
    }
    renderer.setClearColor(this._oldClearColor, this.oldClearAlpha);
    renderer.autoClear = oldAutoClear;
  }
  getSeperableBlurMaterial(kernelRadius) {
    return new import_three6.ShaderMaterial({
      defines: {
        "KERNEL_RADIUS": kernelRadius,
        "SIGMA": kernelRadius
      },
      uniforms: {
        "colorTexture": { value: null },
        "texSize": { value: new import_three6.Vector2(0.5, 0.5) },
        "direction": { value: new import_three6.Vector2(0.5, 0.5) }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(nMips) {
    return new import_three6.ShaderMaterial({
      defines: {
        "NUM_MIPS": nMips
      },
      uniforms: {
        "blurTexture1": { value: null },
        "blurTexture2": { value: null },
        "blurTexture3": { value: null },
        "blurTexture4": { value: null },
        "blurTexture5": { value: null },
        "bloomStrength": { value: 1 },
        "bloomFactors": { value: null },
        "bloomTintColors": { value: null },
        "bloomRadius": { value: 0 }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
    });
  }
};
UnrealBloomPass.BlurDirectionX = new import_three6.Vector2(1, 0);
UnrealBloomPass.BlurDirectionY = new import_three6.Vector2(0, 1);

// app/gl/pp.js
var Post = class {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.composer = new EffectComposer(renderer);
    this.create();
    this.isActive = true;
  }
  create() {
    this.rpass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.rpass);
    this.createBloom();
  }
  createBloom() {
    const bloomMultip = 1;
    const bloomPass = new UnrealBloomPass(new import_three7.Vector2(window.innerWidth * bloomMultip, window.innerHeight * bloomMultip), 0.19, 0.2, 0.1);
    this.composer.addPass(bloomPass);
  }
  render(t) {
    if (!this.isActive)
      return;
    this.composer.render(t);
  }
};

// app/gl/util/model-loader.js
init_react();

// app/gl/util/GLTFLoader.js
init_react();
var import_three8 = require("three");
var GLTFLoader = class extends import_three8.Loader {
  constructor(manager) {
    super(manager);
    this.dracoLoader = null;
    this.ktx2Loader = null;
    this.meshoptDecoder = null;
    this.pluginCallbacks = [];
    this.register(function(parser) {
      return new GLTFMaterialsClearcoatExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureBasisUExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureWebPExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsSheenExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsTransmissionExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsVolumeExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsIorExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsEmissiveStrengthExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsSpecularExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsIridescenceExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFLightsExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMeshoptCompression(parser);
    });
  }
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    let resourcePath;
    if (this.resourcePath !== "") {
      resourcePath = this.resourcePath;
    } else if (this.path !== "") {
      resourcePath = this.path;
    } else {
      resourcePath = import_three8.LoaderUtils.extractUrlBase(url);
    }
    this.manager.itemStart(url);
    const _onError = function(e) {
      if (onError) {
        onError(e);
      } else {
        console.error(e);
      }
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    };
    const loader = new import_three8.FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(url, function(data) {
      try {
        scope.parse(data, resourcePath, function(gltf) {
          onLoad(gltf);
          scope.manager.itemEnd(url);
        }, _onError);
      } catch (e) {
        _onError(e);
      }
    }, onProgress, _onError);
  }
  setDRACOLoader(dracoLoader) {
    this.dracoLoader = dracoLoader;
    return this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(ktx2Loader) {
    this.ktx2Loader = ktx2Loader;
    return this;
  }
  setMeshoptDecoder(meshoptDecoder) {
    this.meshoptDecoder = meshoptDecoder;
    return this;
  }
  register(callback) {
    if (this.pluginCallbacks.indexOf(callback) === -1) {
      this.pluginCallbacks.push(callback);
    }
    return this;
  }
  unregister(callback) {
    if (this.pluginCallbacks.indexOf(callback) !== -1) {
      this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
    }
    return this;
  }
  parse(data, path, onLoad, onError) {
    let content;
    const extensions = {};
    const plugins = {};
    if (typeof data === "string") {
      content = data;
    } else {
      const magic = import_three8.LoaderUtils.decodeText(new Uint8Array(data, 0, 4));
      if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
        try {
          extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
        } catch (error) {
          if (onError)
            onError(error);
          return;
        }
        content = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
      } else {
        content = import_three8.LoaderUtils.decodeText(new Uint8Array(data));
      }
    }
    const json = JSON.parse(content);
    if (json.asset === void 0 || json.asset.version[0] < 2) {
      if (onError)
        onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const parser = new GLTFParser(json, {
      path: path || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    parser.fileLoader.setRequestHeader(this.requestHeader);
    for (let i = 0; i < this.pluginCallbacks.length; i++) {
      const plugin = this.pluginCallbacks[i](parser);
      plugins[plugin.name] = plugin;
      extensions[plugin.name] = true;
    }
    if (json.extensionsUsed) {
      for (let i = 0; i < json.extensionsUsed.length; ++i) {
        const extensionName = json.extensionsUsed[i];
        const extensionsRequired = json.extensionsRequired || [];
        switch (extensionName) {
          case EXTENSIONS.KHR_MATERIALS_UNLIT:
            extensions[extensionName] = new GLTFMaterialsUnlitExtension();
            break;
          case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            extensions[extensionName] = new GLTFMaterialsPbrSpecularGlossinessExtension();
            break;
          case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
            extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
            break;
          case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
            extensions[extensionName] = new GLTFTextureTransformExtension();
            break;
          case EXTENSIONS.KHR_MESH_QUANTIZATION:
            extensions[extensionName] = new GLTFMeshQuantizationExtension();
            break;
          default:
            if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) {
              console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
            }
        }
      }
    }
    parser.setExtensions(extensions);
    parser.setPlugins(plugins);
    parser.parse(onLoad, onError);
  }
  parseAsync(data, path) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.parse(data, path, resolve, reject);
    });
  }
};
function GLTFRegistry() {
  let objects = {};
  return {
    get: function(key) {
      return objects[key];
    },
    add: function(key, object) {
      objects[key] = object;
    },
    remove: function(key) {
      delete objects[key];
    },
    removeAll: function() {
      objects = {};
    }
  };
}
var EXTENSIONS = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
var GLTFLightsExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
    this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const parser = this.parser;
    const nodeDefs = this.parser.json.nodes || [];
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      const nodeDef = nodeDefs[nodeIndex];
      if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) {
        parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
      }
    }
  }
  _loadLight(lightIndex) {
    const parser = this.parser;
    const cacheKey = "light:" + lightIndex;
    let dependency = parser.cache.get(cacheKey);
    if (dependency)
      return dependency;
    const json = parser.json;
    const extensions = json.extensions && json.extensions[this.name] || {};
    const lightDefs = extensions.lights || [];
    const lightDef = lightDefs[lightIndex];
    let lightNode;
    const color = new import_three8.Color(16777215);
    if (lightDef.color !== void 0)
      color.fromArray(lightDef.color);
    const range = lightDef.range !== void 0 ? lightDef.range : 0;
    switch (lightDef.type) {
      case "directional":
        lightNode = new import_three8.DirectionalLight(color);
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;
      case "point":
        lightNode = new import_three8.PointLight(color);
        lightNode.distance = range;
        break;
      case "spot":
        lightNode = new import_three8.SpotLight(color);
        lightNode.distance = range;
        lightDef.spot = lightDef.spot || {};
        lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
        lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
        lightNode.angle = lightDef.spot.outerConeAngle;
        lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
    }
    lightNode.position.set(0, 0, 0);
    lightNode.decay = 2;
    if (lightDef.intensity !== void 0)
      lightNode.intensity = lightDef.intensity;
    lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
    dependency = Promise.resolve(lightNode);
    parser.cache.add(cacheKey, dependency);
    return dependency;
  }
  createNodeAttachment(nodeIndex) {
    const self2 = this;
    const parser = this.parser;
    const json = parser.json;
    const nodeDef = json.nodes[nodeIndex];
    const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
    const lightIndex = lightDef.light;
    if (lightIndex === void 0)
      return null;
    return this._loadLight(lightIndex).then(function(light) {
      return parser._getNodeRef(self2.cache, lightIndex, light);
    });
  }
};
var GLTFMaterialsUnlitExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return import_three8.MeshBasicMaterial;
  }
  extendParams(materialParams, materialDef, parser) {
    const pending = [];
    materialParams.color = new import_three8.Color(1, 1, 1);
    materialParams.opacity = 1;
    const metallicRoughness = materialDef.pbrMetallicRoughness;
    if (metallicRoughness) {
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        const array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array);
        materialParams.opacity = array[3];
      }
      if (metallicRoughness.baseColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, import_three8.sRGBEncoding));
      }
    }
    return Promise.all(pending);
  }
};
var GLTFMaterialsEmissiveStrengthExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
    if (emissiveStrength !== void 0) {
      materialParams.emissiveIntensity = emissiveStrength;
    }
    return Promise.resolve();
  }
};
var GLTFMaterialsClearcoatExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.clearcoatFactor !== void 0) {
      materialParams.clearcoat = extension.clearcoatFactor;
    }
    if (extension.clearcoatTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
    }
    if (extension.clearcoatRoughnessFactor !== void 0) {
      materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
    }
    if (extension.clearcoatRoughnessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
    }
    if (extension.clearcoatNormalTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
      if (extension.clearcoatNormalTexture.scale !== void 0) {
        const scale = extension.clearcoatNormalTexture.scale;
        materialParams.clearcoatNormalScale = new import_three8.Vector2(scale, scale);
      }
    }
    return Promise.all(pending);
  }
};
var GLTFMaterialsIridescenceExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.iridescenceFactor !== void 0) {
      materialParams.iridescence = extension.iridescenceFactor;
    }
    if (extension.iridescenceTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
    }
    if (extension.iridescenceIor !== void 0) {
      materialParams.iridescenceIOR = extension.iridescenceIor;
    }
    if (materialParams.iridescenceThicknessRange === void 0) {
      materialParams.iridescenceThicknessRange = [100, 400];
    }
    if (extension.iridescenceThicknessMinimum !== void 0) {
      materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
    }
    if (extension.iridescenceThicknessMaximum !== void 0) {
      materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
    }
    if (extension.iridescenceThicknessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
    }
    return Promise.all(pending);
  }
};
var GLTFMaterialsSheenExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    materialParams.sheenColor = new import_three8.Color(0, 0, 0);
    materialParams.sheenRoughness = 0;
    materialParams.sheen = 1;
    const extension = materialDef.extensions[this.name];
    if (extension.sheenColorFactor !== void 0) {
      materialParams.sheenColor.fromArray(extension.sheenColorFactor);
    }
    if (extension.sheenRoughnessFactor !== void 0) {
      materialParams.sheenRoughness = extension.sheenRoughnessFactor;
    }
    if (extension.sheenColorTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, import_three8.sRGBEncoding));
    }
    if (extension.sheenRoughnessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
    }
    return Promise.all(pending);
  }
};
var GLTFMaterialsTransmissionExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.transmissionFactor !== void 0) {
      materialParams.transmission = extension.transmissionFactor;
    }
    if (extension.transmissionTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
    }
    return Promise.all(pending);
  }
};
var GLTFMaterialsVolumeExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
    if (extension.thicknessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
    }
    materialParams.attenuationDistance = extension.attenuationDistance || 0;
    const colorArray = extension.attenuationColor || [1, 1, 1];
    materialParams.attenuationColor = new import_three8.Color(colorArray[0], colorArray[1], colorArray[2]);
    return Promise.all(pending);
  }
};
var GLTFMaterialsIorExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_IOR;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const extension = materialDef.extensions[this.name];
    materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
    return Promise.resolve();
  }
};
var GLTFMaterialsSpecularExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return import_three8.MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
    if (extension.specularTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
    }
    const colorArray = extension.specularColorFactor || [1, 1, 1];
    materialParams.specularColor = new import_three8.Color(colorArray[0], colorArray[1], colorArray[2]);
    if (extension.specularColorTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, import_three8.sRGBEncoding));
    }
    return Promise.all(pending);
  }
};
var GLTFTextureBasisUExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
  }
  loadTexture(textureIndex) {
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[this.name]) {
      return null;
    }
    const extension = textureDef.extensions[this.name];
    const loader = parser.options.ktx2Loader;
    if (!loader) {
      if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      } else {
        return null;
      }
    }
    return parser.loadTextureImage(textureIndex, extension.source, loader);
  }
};
var GLTFTextureWebPExtension = class {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
    this.isSupported = null;
  }
  loadTexture(textureIndex) {
    const name = this.name;
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[name]) {
      return null;
    }
    const extension = textureDef.extensions[name];
    const source = json.images[extension.source];
    let loader = parser.textureLoader;
    if (source.uri) {
      const handler = parser.options.manager.getHandler(source.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.detectSupport().then(function(isSupported) {
      if (isSupported)
        return parser.loadTextureImage(textureIndex, extension.source, loader);
      if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      }
      return parser.loadTexture(textureIndex);
    });
  }
  detectSupport() {
    if (!this.isSupported) {
      this.isSupported = new Promise(function(resolve) {
        const image = new Image();
        image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
        image.onload = image.onerror = function() {
          resolve(image.height === 1);
        };
      });
    }
    return this.isSupported;
  }
};
var GLTFMeshoptCompression = class {
  constructor(parser) {
    this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
    this.parser = parser;
  }
  loadBufferView(index) {
    const json = this.parser.json;
    const bufferView = json.bufferViews[index];
    if (bufferView.extensions && bufferView.extensions[this.name]) {
      const extensionDef = bufferView.extensions[this.name];
      const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
      const decoder = this.parser.options.meshoptDecoder;
      if (!decoder || !decoder.supported) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        } else {
          return null;
        }
      }
      return Promise.all([buffer, decoder.ready]).then(function(res) {
        const byteOffset = extensionDef.byteOffset || 0;
        const byteLength = extensionDef.byteLength || 0;
        const count = extensionDef.count;
        const stride = extensionDef.byteStride;
        const result = new ArrayBuffer(count * stride);
        const source = new Uint8Array(res[0], byteOffset, byteLength);
        decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
        return result;
      });
    } else {
      return null;
    }
  }
};
var BINARY_EXTENSION_HEADER_MAGIC = "glTF";
var BINARY_EXTENSION_HEADER_LENGTH = 12;
var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
var GLTFBinaryExtension = class {
  constructor(data) {
    this.name = EXTENSIONS.KHR_BINARY_GLTF;
    this.content = null;
    this.body = null;
    const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
    this.header = {
      magic: import_three8.LoaderUtils.decodeText(new Uint8Array(data.slice(0, 4))),
      version: headerView.getUint32(4, true),
      length: headerView.getUint32(8, true)
    };
    if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    } else if (this.header.version < 2) {
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    }
    const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
    const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
    let chunkIndex = 0;
    while (chunkIndex < chunkContentsLength) {
      const chunkLength = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      const chunkType = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
        const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
        this.content = import_three8.LoaderUtils.decodeText(contentArray);
      } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
        const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
        this.body = data.slice(byteOffset, byteOffset + chunkLength);
      }
      chunkIndex += chunkLength;
    }
    if (this.content === null) {
      throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
};
var GLTFDracoMeshCompressionExtension = class {
  constructor(json, dracoLoader) {
    if (!dracoLoader) {
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    }
    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
    this.json = json;
    this.dracoLoader = dracoLoader;
    this.dracoLoader.preload();
  }
  decodePrimitive(primitive, parser) {
    const json = this.json;
    const dracoLoader = this.dracoLoader;
    const bufferViewIndex = primitive.extensions[this.name].bufferView;
    const gltfAttributeMap = primitive.extensions[this.name].attributes;
    const threeAttributeMap = {};
    const attributeNormalizedMap = {};
    const attributeTypeMap = {};
    for (const attributeName in gltfAttributeMap) {
      const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
    }
    for (const attributeName in primitive.attributes) {
      const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      if (gltfAttributeMap[attributeName] !== void 0) {
        const accessorDef = json.accessors[primitive.attributes[attributeName]];
        const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        attributeTypeMap[threeAttributeName] = componentType;
        attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
      }
    }
    return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
      return new Promise(function(resolve) {
        dracoLoader.decodeDracoFile(bufferView, function(geometry) {
          for (const attributeName in geometry.attributes) {
            const attribute = geometry.attributes[attributeName];
            const normalized = attributeNormalizedMap[attributeName];
            if (normalized !== void 0)
              attribute.normalized = normalized;
          }
          resolve(geometry);
        }, threeAttributeMap, attributeTypeMap);
      });
    });
  }
};
var GLTFTextureTransformExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(texture, transform) {
    if (transform.texCoord !== void 0) {
      console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.');
    }
    if (transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) {
      return texture;
    }
    texture = texture.clone();
    if (transform.offset !== void 0) {
      texture.offset.fromArray(transform.offset);
    }
    if (transform.rotation !== void 0) {
      texture.rotation = transform.rotation;
    }
    if (transform.scale !== void 0) {
      texture.repeat.fromArray(transform.scale);
    }
    texture.needsUpdate = true;
    return texture;
  }
};
var GLTFMeshStandardSGMaterial = class extends import_three8.MeshStandardMaterial {
  constructor(params2) {
    super();
    this.isGLTFSpecularGlossinessMaterial = true;
    const specularMapParsFragmentChunk = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join("\n");
    const glossinessMapParsFragmentChunk = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join("\n");
    const specularMapFragmentChunk = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join("\n");
    const glossinessMapFragmentChunk = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join("\n");
    const lightPhysicalFragmentChunk = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join("\n");
    const uniforms = {
      specular: { value: new import_three8.Color().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = uniforms;
    this.onBeforeCompile = function(shader) {
      for (const uniformName in uniforms) {
        shader.uniforms[uniformName] = uniforms[uniformName];
      }
      shader.fragmentShader = shader.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", specularMapParsFragmentChunk).replace("#include <metalnessmap_pars_fragment>", glossinessMapParsFragmentChunk).replace("#include <roughnessmap_fragment>", specularMapFragmentChunk).replace("#include <metalnessmap_fragment>", glossinessMapFragmentChunk).replace("#include <lights_physical_fragment>", lightPhysicalFragmentChunk);
    };
    Object.defineProperties(this, {
      specular: {
        get: function() {
          return uniforms.specular.value;
        },
        set: function(v) {
          uniforms.specular.value = v;
        }
      },
      specularMap: {
        get: function() {
          return uniforms.specularMap.value;
        },
        set: function(v) {
          uniforms.specularMap.value = v;
          if (v) {
            this.defines.USE_SPECULARMAP = "";
          } else {
            delete this.defines.USE_SPECULARMAP;
          }
        }
      },
      glossiness: {
        get: function() {
          return uniforms.glossiness.value;
        },
        set: function(v) {
          uniforms.glossiness.value = v;
        }
      },
      glossinessMap: {
        get: function() {
          return uniforms.glossinessMap.value;
        },
        set: function(v) {
          uniforms.glossinessMap.value = v;
          if (v) {
            this.defines.USE_GLOSSINESSMAP = "";
            this.defines.USE_UV = "";
          } else {
            delete this.defines.USE_GLOSSINESSMAP;
            delete this.defines.USE_UV;
          }
        }
      }
    });
    delete this.metalness;
    delete this.roughness;
    delete this.metalnessMap;
    delete this.roughnessMap;
    this.setValues(params2);
  }
  copy(source) {
    super.copy(source);
    this.specularMap = source.specularMap;
    this.specular.copy(source.specular);
    this.glossinessMap = source.glossinessMap;
    this.glossiness = source.glossiness;
    delete this.metalness;
    delete this.roughness;
    delete this.metalnessMap;
    delete this.roughnessMap;
    return this;
  }
};
var GLTFMaterialsPbrSpecularGlossinessExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS;
    this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return GLTFMeshStandardSGMaterial;
  }
  extendParams(materialParams, materialDef, parser) {
    const pbrSpecularGlossiness = materialDef.extensions[this.name];
    materialParams.color = new import_three8.Color(1, 1, 1);
    materialParams.opacity = 1;
    const pending = [];
    if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {
      const array = pbrSpecularGlossiness.diffuseFactor;
      materialParams.color.fromArray(array);
      materialParams.opacity = array[3];
    }
    if (pbrSpecularGlossiness.diffuseTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "map", pbrSpecularGlossiness.diffuseTexture, import_three8.sRGBEncoding));
    }
    materialParams.emissive = new import_three8.Color(0, 0, 0);
    materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== void 0 ? pbrSpecularGlossiness.glossinessFactor : 1;
    materialParams.specular = new import_three8.Color(1, 1, 1);
    if (Array.isArray(pbrSpecularGlossiness.specularFactor)) {
      materialParams.specular.fromArray(pbrSpecularGlossiness.specularFactor);
    }
    if (pbrSpecularGlossiness.specularGlossinessTexture !== void 0) {
      const specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
      pending.push(parser.assignTexture(materialParams, "glossinessMap", specGlossMapDef));
      pending.push(parser.assignTexture(materialParams, "specularMap", specGlossMapDef, import_three8.sRGBEncoding));
    }
    return Promise.all(pending);
  }
  createMaterial(materialParams) {
    const material = new GLTFMeshStandardSGMaterial(materialParams);
    material.fog = true;
    material.color = materialParams.color;
    material.map = materialParams.map === void 0 ? null : materialParams.map;
    material.lightMap = null;
    material.lightMapIntensity = 1;
    material.aoMap = materialParams.aoMap === void 0 ? null : materialParams.aoMap;
    material.aoMapIntensity = 1;
    material.emissive = materialParams.emissive;
    material.emissiveIntensity = materialParams.emissiveIntensity === void 0 ? 1 : materialParams.emissiveIntensity;
    material.emissiveMap = materialParams.emissiveMap === void 0 ? null : materialParams.emissiveMap;
    material.bumpMap = materialParams.bumpMap === void 0 ? null : materialParams.bumpMap;
    material.bumpScale = 1;
    material.normalMap = materialParams.normalMap === void 0 ? null : materialParams.normalMap;
    material.normalMapType = import_three8.TangentSpaceNormalMap;
    if (materialParams.normalScale)
      material.normalScale = materialParams.normalScale;
    material.displacementMap = null;
    material.displacementScale = 1;
    material.displacementBias = 0;
    material.specularMap = materialParams.specularMap === void 0 ? null : materialParams.specularMap;
    material.specular = materialParams.specular;
    material.glossinessMap = materialParams.glossinessMap === void 0 ? null : materialParams.glossinessMap;
    material.glossiness = materialParams.glossiness;
    material.alphaMap = null;
    material.envMap = materialParams.envMap === void 0 ? null : materialParams.envMap;
    material.envMapIntensity = 1;
    return material;
  }
};
var GLTFMeshQuantizationExtension = class {
  constructor() {
    this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
  }
};
var GLTFCubicSplineInterpolant = class extends import_three8.Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
    for (let i = 0; i !== valueSize; i++) {
      result[i] = values[offset + i];
    }
    return result;
  }
};
GLTFCubicSplineInterpolant.prototype.interpolate_ = function(i1, t0, t, t1) {
  const result = this.resultBuffer;
  const values = this.sampleValues;
  const stride = this.valueSize;
  const stride2 = stride * 2;
  const stride3 = stride * 3;
  const td = t1 - t0;
  const p = (t - t0) / td;
  const pp = p * p;
  const ppp = pp * p;
  const offset1 = i1 * stride3;
  const offset0 = offset1 - stride3;
  const s2 = -2 * ppp + 3 * pp;
  const s3 = ppp - pp;
  const s0 = 1 - s2;
  const s1 = s3 - pp + p;
  for (let i = 0; i !== stride; i++) {
    const p0 = values[offset0 + i + stride];
    const m0 = values[offset0 + i + stride2] * td;
    const p1 = values[offset1 + i + stride];
    const m1 = values[offset1 + i] * td;
    result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
  }
  return result;
};
var _q = new import_three8.Quaternion();
var GLTFCubicSplineQuaternionInterpolant = class extends GLTFCubicSplineInterpolant {
  interpolate_(i1, t0, t, t1) {
    const result = super.interpolate_(i1, t0, t, t1);
    _q.fromArray(result).normalize().toArray(result);
    return result;
  }
};
var WEBGL_CONSTANTS = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
};
var WEBGL_COMPONENT_TYPES = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
var WEBGL_FILTERS = {
  9728: import_three8.NearestFilter,
  9729: import_three8.LinearFilter,
  9984: import_three8.NearestMipmapNearestFilter,
  9985: import_three8.LinearMipmapNearestFilter,
  9986: import_three8.NearestMipmapLinearFilter,
  9987: import_three8.LinearMipmapLinearFilter
};
var WEBGL_WRAPPINGS = {
  33071: import_three8.ClampToEdgeWrapping,
  33648: import_three8.MirroredRepeatWrapping,
  10497: import_three8.RepeatWrapping
};
var WEBGL_TYPE_SIZES = {
  "SCALAR": 1,
  "VEC2": 2,
  "VEC3": 3,
  "VEC4": 4,
  "MAT2": 4,
  "MAT3": 9,
  "MAT4": 16
};
var ATTRIBUTES = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
var PATH_PROPERTIES = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
};
var INTERPOLATION = {
  CUBICSPLINE: void 0,
  LINEAR: import_three8.InterpolateLinear,
  STEP: import_three8.InterpolateDiscrete
};
var ALPHA_MODES = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function createDefaultMaterial(cache) {
  if (cache["DefaultMaterial"] === void 0) {
    cache["DefaultMaterial"] = new import_three8.MeshStandardMaterial({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: import_three8.FrontSide
    });
  }
  return cache["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
  for (const name in objectDef.extensions) {
    if (knownExtensions[name] === void 0) {
      object.userData.gltfExtensions = object.userData.gltfExtensions || {};
      object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
  }
}
function assignExtrasToUserData(object, gltfDef) {
  if (gltfDef.extras !== void 0) {
    if (typeof gltfDef.extras === "object") {
      Object.assign(object.userData, gltfDef.extras);
    } else {
      console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
    }
  }
}
function addMorphTargets(geometry, targets, parser) {
  let hasMorphPosition = false;
  let hasMorphNormal = false;
  let hasMorphColor = false;
  for (let i = 0, il = targets.length; i < il; i++) {
    const target = targets[i];
    if (target.POSITION !== void 0)
      hasMorphPosition = true;
    if (target.NORMAL !== void 0)
      hasMorphNormal = true;
    if (target.COLOR_0 !== void 0)
      hasMorphColor = true;
    if (hasMorphPosition && hasMorphNormal && hasMorphColor)
      break;
  }
  if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor)
    return Promise.resolve(geometry);
  const pendingPositionAccessors = [];
  const pendingNormalAccessors = [];
  const pendingColorAccessors = [];
  for (let i = 0, il = targets.length; i < il; i++) {
    const target = targets[i];
    if (hasMorphPosition) {
      const pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
      pendingPositionAccessors.push(pendingAccessor);
    }
    if (hasMorphNormal) {
      const pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
      pendingNormalAccessors.push(pendingAccessor);
    }
    if (hasMorphColor) {
      const pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
      pendingColorAccessors.push(pendingAccessor);
    }
  }
  return Promise.all([
    Promise.all(pendingPositionAccessors),
    Promise.all(pendingNormalAccessors),
    Promise.all(pendingColorAccessors)
  ]).then(function(accessors) {
    const morphPositions = accessors[0];
    const morphNormals = accessors[1];
    const morphColors = accessors[2];
    if (hasMorphPosition)
      geometry.morphAttributes.position = morphPositions;
    if (hasMorphNormal)
      geometry.morphAttributes.normal = morphNormals;
    if (hasMorphColor)
      geometry.morphAttributes.color = morphColors;
    geometry.morphTargetsRelative = true;
    return geometry;
  });
}
function updateMorphTargets(mesh, meshDef) {
  mesh.updateMorphTargets();
  if (meshDef.weights !== void 0) {
    for (let i = 0, il = meshDef.weights.length; i < il; i++) {
      mesh.morphTargetInfluences[i] = meshDef.weights[i];
    }
  }
  if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
    const targetNames = meshDef.extras.targetNames;
    if (mesh.morphTargetInfluences.length === targetNames.length) {
      mesh.morphTargetDictionary = {};
      for (let i = 0, il = targetNames.length; i < il; i++) {
        mesh.morphTargetDictionary[targetNames[i]] = i;
      }
    } else {
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
}
function createPrimitiveKey(primitiveDef) {
  const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
  let geometryKey;
  if (dracoExtension) {
    geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
  } else {
    geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
  }
  return geometryKey;
}
function createAttributesKey(attributes) {
  let attributesKey = "";
  const keys = Object.keys(attributes).sort();
  for (let i = 0, il = keys.length; i < il; i++) {
    attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
  }
  return attributesKey;
}
function getNormalizedComponentScale(constructor) {
  switch (constructor) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function getImageURIMimeType(uri) {
  if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0)
    return "image/jpeg";
  if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0)
    return "image/webp";
  return "image/png";
}
var GLTFParser = class {
  constructor(json = {}, options = {}) {
    this.json = json;
    this.extensions = {};
    this.plugins = {};
    this.options = options;
    this.cache = new GLTFRegistry();
    this.associations = /* @__PURE__ */ new Map();
    this.primitiveCache = {};
    this.meshCache = { refs: {}, uses: {} };
    this.cameraCache = { refs: {}, uses: {} };
    this.lightCache = { refs: {}, uses: {} };
    this.sourceCache = {};
    this.textureCache = {};
    this.nodeNamesUsed = {};
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
    const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
    const firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) {
      this.textureLoader = new import_three8.TextureLoader(this.options.manager);
    } else {
      this.textureLoader = new import_three8.ImageBitmapLoader(this.options.manager);
    }
    this.textureLoader.setCrossOrigin(this.options.crossOrigin);
    this.textureLoader.setRequestHeader(this.options.requestHeader);
    this.fileLoader = new import_three8.FileLoader(this.options.manager);
    this.fileLoader.setResponseType("arraybuffer");
    if (this.options.crossOrigin === "use-credentials") {
      this.fileLoader.setWithCredentials(true);
    }
  }
  setExtensions(extensions) {
    this.extensions = extensions;
  }
  setPlugins(plugins) {
    this.plugins = plugins;
  }
  parse(onLoad, onError) {
    const parser = this;
    const json = this.json;
    const extensions = this.extensions;
    this.cache.removeAll();
    this._invokeAll(function(ext) {
      return ext._markDefs && ext._markDefs();
    });
    Promise.all(this._invokeAll(function(ext) {
      return ext.beforeRoot && ext.beforeRoot();
    })).then(function() {
      return Promise.all([
        parser.getDependencies("scene"),
        parser.getDependencies("animation"),
        parser.getDependencies("camera")
      ]);
    }).then(function(dependencies) {
      const result = {
        scene: dependencies[0][json.scene || 0],
        scenes: dependencies[0],
        animations: dependencies[1],
        cameras: dependencies[2],
        asset: json.asset,
        parser,
        userData: {}
      };
      addUnknownExtensionsToUserData(extensions, result, json);
      assignExtrasToUserData(result, json);
      Promise.all(parser._invokeAll(function(ext) {
        return ext.afterRoot && ext.afterRoot(result);
      })).then(function() {
        onLoad(result);
      });
    }).catch(onError);
  }
  _markDefs() {
    const nodeDefs = this.json.nodes || [];
    const skinDefs = this.json.skins || [];
    const meshDefs = this.json.meshes || [];
    for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
      const joints = skinDefs[skinIndex].joints;
      for (let i = 0, il = joints.length; i < il; i++) {
        nodeDefs[joints[i]].isBone = true;
      }
    }
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      const nodeDef = nodeDefs[nodeIndex];
      if (nodeDef.mesh !== void 0) {
        this._addNodeRef(this.meshCache, nodeDef.mesh);
        if (nodeDef.skin !== void 0) {
          meshDefs[nodeDef.mesh].isSkinnedMesh = true;
        }
      }
      if (nodeDef.camera !== void 0) {
        this._addNodeRef(this.cameraCache, nodeDef.camera);
      }
    }
  }
  _addNodeRef(cache, index) {
    if (index === void 0)
      return;
    if (cache.refs[index] === void 0) {
      cache.refs[index] = cache.uses[index] = 0;
    }
    cache.refs[index]++;
  }
  _getNodeRef(cache, index, object) {
    if (cache.refs[index] <= 1)
      return object;
    const ref = object.clone();
    const updateMappings = (original, clone) => {
      const mappings = this.associations.get(original);
      if (mappings != null) {
        this.associations.set(clone, mappings);
      }
      for (const [i, child] of original.children.entries()) {
        updateMappings(child, clone.children[i]);
      }
    };
    updateMappings(object, ref);
    ref.name += "_instance_" + cache.uses[index]++;
    return ref;
  }
  _invokeOne(func) {
    const extensions = Object.values(this.plugins);
    extensions.push(this);
    for (let i = 0; i < extensions.length; i++) {
      const result = func(extensions[i]);
      if (result)
        return result;
    }
    return null;
  }
  _invokeAll(func) {
    const extensions = Object.values(this.plugins);
    extensions.unshift(this);
    const pending = [];
    for (let i = 0; i < extensions.length; i++) {
      const result = func(extensions[i]);
      if (result)
        pending.push(result);
    }
    return pending;
  }
  getDependency(type, index) {
    const cacheKey = type + ":" + index;
    let dependency = this.cache.get(cacheKey);
    if (!dependency) {
      switch (type) {
        case "scene":
          dependency = this.loadScene(index);
          break;
        case "node":
          dependency = this.loadNode(index);
          break;
        case "mesh":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMesh && ext.loadMesh(index);
          });
          break;
        case "accessor":
          dependency = this.loadAccessor(index);
          break;
        case "bufferView":
          dependency = this._invokeOne(function(ext) {
            return ext.loadBufferView && ext.loadBufferView(index);
          });
          break;
        case "buffer":
          dependency = this.loadBuffer(index);
          break;
        case "material":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMaterial && ext.loadMaterial(index);
          });
          break;
        case "texture":
          dependency = this._invokeOne(function(ext) {
            return ext.loadTexture && ext.loadTexture(index);
          });
          break;
        case "skin":
          dependency = this.loadSkin(index);
          break;
        case "animation":
          dependency = this._invokeOne(function(ext) {
            return ext.loadAnimation && ext.loadAnimation(index);
          });
          break;
        case "camera":
          dependency = this.loadCamera(index);
          break;
        default:
          throw new Error("Unknown type: " + type);
      }
      this.cache.add(cacheKey, dependency);
    }
    return dependency;
  }
  getDependencies(type) {
    let dependencies = this.cache.get(type);
    if (!dependencies) {
      const parser = this;
      const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
      dependencies = Promise.all(defs.map(function(def, index) {
        return parser.getDependency(type, index);
      }));
      this.cache.add(type, dependencies);
    }
    return dependencies;
  }
  loadBuffer(bufferIndex) {
    const bufferDef = this.json.buffers[bufferIndex];
    const loader = this.fileLoader;
    if (bufferDef.type && bufferDef.type !== "arraybuffer") {
      throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
    }
    if (bufferDef.uri === void 0 && bufferIndex === 0) {
      return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
    }
    const options = this.options;
    return new Promise(function(resolve, reject) {
      loader.load(import_three8.LoaderUtils.resolveURL(bufferDef.uri, options.path), resolve, void 0, function() {
        reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
      });
    });
  }
  loadBufferView(bufferViewIndex) {
    const bufferViewDef = this.json.bufferViews[bufferViewIndex];
    return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
      const byteLength = bufferViewDef.byteLength || 0;
      const byteOffset = bufferViewDef.byteOffset || 0;
      return buffer.slice(byteOffset, byteOffset + byteLength);
    });
  }
  loadAccessor(accessorIndex) {
    const parser = this;
    const json = this.json;
    const accessorDef = this.json.accessors[accessorIndex];
    if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
      return Promise.resolve(null);
    }
    const pendingBufferViews = [];
    if (accessorDef.bufferView !== void 0) {
      pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
    } else {
      pendingBufferViews.push(null);
    }
    if (accessorDef.sparse !== void 0) {
      pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
      pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
    }
    return Promise.all(pendingBufferViews).then(function(bufferViews) {
      const bufferView = bufferViews[0];
      const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
      const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
      const elementBytes = TypedArray.BYTES_PER_ELEMENT;
      const itemBytes = elementBytes * itemSize;
      const byteOffset = accessorDef.byteOffset || 0;
      const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
      const normalized = accessorDef.normalized === true;
      let array, bufferAttribute;
      if (byteStride && byteStride !== itemBytes) {
        const ibSlice = Math.floor(byteOffset / byteStride);
        const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
        let ib = parser.cache.get(ibCacheKey);
        if (!ib) {
          array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
          ib = new import_three8.InterleavedBuffer(array, byteStride / elementBytes);
          parser.cache.add(ibCacheKey, ib);
        }
        bufferAttribute = new import_three8.InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
      } else {
        if (bufferView === null) {
          array = new TypedArray(accessorDef.count * itemSize);
        } else {
          array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
        }
        bufferAttribute = new import_three8.BufferAttribute(array, itemSize, normalized);
      }
      if (accessorDef.sparse !== void 0) {
        const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
        const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
        const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
        const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
        const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
        const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
        if (bufferView !== null) {
          bufferAttribute = new import_three8.BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
        }
        for (let i = 0, il = sparseIndices.length; i < il; i++) {
          const index = sparseIndices[i];
          bufferAttribute.setX(index, sparseValues[i * itemSize]);
          if (itemSize >= 2)
            bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
          if (itemSize >= 3)
            bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
          if (itemSize >= 4)
            bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
          if (itemSize >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return bufferAttribute;
    });
  }
  loadTexture(textureIndex) {
    const json = this.json;
    const options = this.options;
    const textureDef = json.textures[textureIndex];
    const sourceIndex = textureDef.source;
    const sourceDef = json.images[sourceIndex];
    let loader = this.textureLoader;
    if (sourceDef.uri) {
      const handler = options.manager.getHandler(sourceDef.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.loadTextureImage(textureIndex, sourceIndex, loader);
  }
  loadTextureImage(textureIndex, sourceIndex, loader) {
    const parser = this;
    const json = this.json;
    const textureDef = json.textures[textureIndex];
    const sourceDef = json.images[sourceIndex];
    const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
    if (this.textureCache[cacheKey]) {
      return this.textureCache[cacheKey];
    }
    const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
      texture.flipY = false;
      if (textureDef.name)
        texture.name = textureDef.name;
      const samplers = json.samplers || {};
      const sampler = samplers[textureDef.sampler] || {};
      texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || import_three8.LinearFilter;
      texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || import_three8.LinearMipmapLinearFilter;
      texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || import_three8.RepeatWrapping;
      texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || import_three8.RepeatWrapping;
      parser.associations.set(texture, { textures: textureIndex });
      return texture;
    }).catch(function() {
      return null;
    });
    this.textureCache[cacheKey] = promise;
    return promise;
  }
  loadImageSource(sourceIndex, loader) {
    const parser = this;
    const json = this.json;
    const options = this.options;
    if (this.sourceCache[sourceIndex] !== void 0) {
      return this.sourceCache[sourceIndex].then((texture) => texture.clone());
    }
    const sourceDef = json.images[sourceIndex];
    const URL = self.URL || self.webkitURL;
    let sourceURI = sourceDef.uri || "";
    let isObjectURL = false;
    if (sourceDef.bufferView !== void 0) {
      sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
        isObjectURL = true;
        const blob = new Blob([bufferView], { type: sourceDef.mimeType });
        sourceURI = URL.createObjectURL(blob);
        return sourceURI;
      });
    } else if (sourceDef.uri === void 0) {
      throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
    }
    const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
      return new Promise(function(resolve, reject) {
        let onLoad = resolve;
        if (loader.isImageBitmapLoader === true) {
          onLoad = function(imageBitmap) {
            const texture = new import_three8.Texture(imageBitmap);
            texture.needsUpdate = true;
            resolve(texture);
          };
        }
        loader.load(import_three8.LoaderUtils.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
      });
    }).then(function(texture) {
      if (isObjectURL === true) {
        URL.revokeObjectURL(sourceURI);
      }
      texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
      return texture;
    }).catch(function(error) {
      console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
      throw error;
    });
    this.sourceCache[sourceIndex] = promise;
    return promise;
  }
  assignTexture(materialParams, mapName, mapDef, encoding) {
    const parser = this;
    return this.getDependency("texture", mapDef.index).then(function(texture) {
      if (mapDef.texCoord !== void 0 && mapDef.texCoord != 0 && !(mapName === "aoMap" && mapDef.texCoord == 1)) {
        console.warn("THREE.GLTFLoader: Custom UV set " + mapDef.texCoord + " for texture " + mapName + " not yet supported.");
      }
      if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
        const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
        if (transform) {
          const gltfReference = parser.associations.get(texture);
          texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
          parser.associations.set(texture, gltfReference);
        }
      }
      if (encoding !== void 0) {
        texture.encoding = encoding;
      }
      materialParams[mapName] = texture;
      return texture;
    });
  }
  assignFinalMaterial(mesh) {
    const geometry = mesh.geometry;
    let material = mesh.material;
    const useDerivativeTangents = geometry.attributes.tangent === void 0;
    const useVertexColors = geometry.attributes.color !== void 0;
    const useFlatShading = geometry.attributes.normal === void 0;
    if (mesh.isPoints) {
      const cacheKey = "PointsMaterial:" + material.uuid;
      let pointsMaterial = this.cache.get(cacheKey);
      if (!pointsMaterial) {
        pointsMaterial = new import_three8.PointsMaterial();
        import_three8.Material.prototype.copy.call(pointsMaterial, material);
        pointsMaterial.color.copy(material.color);
        pointsMaterial.map = material.map;
        pointsMaterial.sizeAttenuation = false;
        this.cache.add(cacheKey, pointsMaterial);
      }
      material = pointsMaterial;
    } else if (mesh.isLine) {
      const cacheKey = "LineBasicMaterial:" + material.uuid;
      let lineMaterial = this.cache.get(cacheKey);
      if (!lineMaterial) {
        lineMaterial = new import_three8.LineBasicMaterial();
        import_three8.Material.prototype.copy.call(lineMaterial, material);
        lineMaterial.color.copy(material.color);
        this.cache.add(cacheKey, lineMaterial);
      }
      material = lineMaterial;
    }
    if (useDerivativeTangents || useVertexColors || useFlatShading) {
      let cacheKey = "ClonedMaterial:" + material.uuid + ":";
      if (material.isGLTFSpecularGlossinessMaterial)
        cacheKey += "specular-glossiness:";
      if (useDerivativeTangents)
        cacheKey += "derivative-tangents:";
      if (useVertexColors)
        cacheKey += "vertex-colors:";
      if (useFlatShading)
        cacheKey += "flat-shading:";
      let cachedMaterial = this.cache.get(cacheKey);
      if (!cachedMaterial) {
        cachedMaterial = material.clone();
        if (useVertexColors)
          cachedMaterial.vertexColors = true;
        if (useFlatShading)
          cachedMaterial.flatShading = true;
        if (useDerivativeTangents) {
          if (cachedMaterial.normalScale)
            cachedMaterial.normalScale.y *= -1;
          if (cachedMaterial.clearcoatNormalScale)
            cachedMaterial.clearcoatNormalScale.y *= -1;
        }
        this.cache.add(cacheKey, cachedMaterial);
        this.associations.set(cachedMaterial, this.associations.get(material));
      }
      material = cachedMaterial;
    }
    if (material.aoMap && geometry.attributes.uv2 === void 0 && geometry.attributes.uv !== void 0) {
      geometry.setAttribute("uv2", geometry.attributes.uv);
    }
    mesh.material = material;
  }
  getMaterialType() {
    return import_three8.MeshStandardMaterial;
  }
  loadMaterial(materialIndex) {
    const parser = this;
    const json = this.json;
    const extensions = this.extensions;
    const materialDef = json.materials[materialIndex];
    let materialType;
    const materialParams = {};
    const materialExtensions = materialDef.extensions || {};
    const pending = [];
    if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const sgExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      materialType = sgExtension.getMaterialType();
      pending.push(sgExtension.extendParams(materialParams, materialDef, parser));
    } else if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
      const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
      materialType = kmuExtension.getMaterialType();
      pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
    } else {
      const metallicRoughness = materialDef.pbrMetallicRoughness || {};
      materialParams.color = new import_three8.Color(1, 1, 1);
      materialParams.opacity = 1;
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        const array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array);
        materialParams.opacity = array[3];
      }
      if (metallicRoughness.baseColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, import_three8.sRGBEncoding));
      }
      materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
      materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
      if (metallicRoughness.metallicRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
        pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
      }
      materialType = this._invokeOne(function(ext) {
        return ext.getMaterialType && ext.getMaterialType(materialIndex);
      });
      pending.push(Promise.all(this._invokeAll(function(ext) {
        return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
      })));
    }
    if (materialDef.doubleSided === true) {
      materialParams.side = import_three8.DoubleSide;
    }
    const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
    if (alphaMode === ALPHA_MODES.BLEND) {
      materialParams.transparent = true;
      materialParams.depthWrite = false;
    } else {
      materialParams.transparent = false;
      if (alphaMode === ALPHA_MODES.MASK) {
        materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5;
      }
    }
    if (materialDef.normalTexture !== void 0 && materialType !== import_three8.MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
      materialParams.normalScale = new import_three8.Vector2(1, 1);
      if (materialDef.normalTexture.scale !== void 0) {
        const scale = materialDef.normalTexture.scale;
        materialParams.normalScale.set(scale, scale);
      }
    }
    if (materialDef.occlusionTexture !== void 0 && materialType !== import_three8.MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
      if (materialDef.occlusionTexture.strength !== void 0) {
        materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
      }
    }
    if (materialDef.emissiveFactor !== void 0 && materialType !== import_three8.MeshBasicMaterial) {
      materialParams.emissive = new import_three8.Color().fromArray(materialDef.emissiveFactor);
    }
    if (materialDef.emissiveTexture !== void 0 && materialType !== import_three8.MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, import_three8.sRGBEncoding));
    }
    return Promise.all(pending).then(function() {
      let material;
      if (materialType === GLTFMeshStandardSGMaterial) {
        material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams);
      } else {
        material = new materialType(materialParams);
      }
      if (materialDef.name)
        material.name = materialDef.name;
      assignExtrasToUserData(material, materialDef);
      parser.associations.set(material, { materials: materialIndex });
      if (materialDef.extensions)
        addUnknownExtensionsToUserData(extensions, material, materialDef);
      return material;
    });
  }
  createUniqueName(originalName) {
    const sanitizedName = import_three8.PropertyBinding.sanitizeNodeName(originalName || "");
    let name = sanitizedName;
    for (let i = 1; this.nodeNamesUsed[name]; ++i) {
      name = sanitizedName + "_" + i;
    }
    this.nodeNamesUsed[name] = true;
    return name;
  }
  loadGeometries(primitives) {
    const parser = this;
    const extensions = this.extensions;
    const cache = this.primitiveCache;
    function createDracoPrimitive(primitive) {
      return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
        return addPrimitiveAttributes(geometry, primitive, parser);
      });
    }
    const pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      const primitive = primitives[i];
      const cacheKey = createPrimitiveKey(primitive);
      const cached = cache[cacheKey];
      if (cached) {
        pending.push(cached.promise);
      } else {
        let geometryPromise;
        if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
          geometryPromise = createDracoPrimitive(primitive);
        } else {
          geometryPromise = addPrimitiveAttributes(new import_three8.BufferGeometry(), primitive, parser);
        }
        cache[cacheKey] = { primitive, promise: geometryPromise };
        pending.push(geometryPromise);
      }
    }
    return Promise.all(pending);
  }
  loadMesh(meshIndex) {
    const parser = this;
    const json = this.json;
    const extensions = this.extensions;
    const meshDef = json.meshes[meshIndex];
    const primitives = meshDef.primitives;
    const pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      const material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
      pending.push(material);
    }
    pending.push(parser.loadGeometries(primitives));
    return Promise.all(pending).then(function(results) {
      const materials = results.slice(0, results.length - 1);
      const geometries = results[results.length - 1];
      const meshes = [];
      for (let i = 0, il = geometries.length; i < il; i++) {
        const geometry = geometries[i];
        const primitive = primitives[i];
        let mesh;
        const material = materials[i];
        if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0) {
          mesh = meshDef.isSkinnedMesh === true ? new import_three8.SkinnedMesh(geometry, material) : new import_three8.Mesh(geometry, material);
          if (mesh.isSkinnedMesh === true && !mesh.geometry.attributes.skinWeight.normalized) {
            mesh.normalizeSkinWeights();
          }
          if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {
            mesh.geometry = toTrianglesDrawMode(mesh.geometry, import_three8.TriangleStripDrawMode);
          } else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {
            mesh.geometry = toTrianglesDrawMode(mesh.geometry, import_three8.TriangleFanDrawMode);
          }
        } else if (primitive.mode === WEBGL_CONSTANTS.LINES) {
          mesh = new import_three8.LineSegments(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {
          mesh = new import_three8.Line(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {
          mesh = new import_three8.LineLoop(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {
          mesh = new import_three8.Points(geometry, material);
        } else {
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
        }
        if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
          updateMorphTargets(mesh, meshDef);
        }
        mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
        assignExtrasToUserData(mesh, meshDef);
        if (primitive.extensions)
          addUnknownExtensionsToUserData(extensions, mesh, primitive);
        parser.assignFinalMaterial(mesh);
        meshes.push(mesh);
      }
      for (let i = 0, il = meshes.length; i < il; i++) {
        parser.associations.set(meshes[i], {
          meshes: meshIndex,
          primitives: i
        });
      }
      if (meshes.length === 1) {
        return meshes[0];
      }
      const group = new import_three8.Group();
      parser.associations.set(group, { meshes: meshIndex });
      for (let i = 0, il = meshes.length; i < il; i++) {
        group.add(meshes[i]);
      }
      return group;
    });
  }
  loadCamera(cameraIndex) {
    let camera;
    const cameraDef = this.json.cameras[cameraIndex];
    const params2 = cameraDef[cameraDef.type];
    if (!params2) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    if (cameraDef.type === "perspective") {
      camera = new import_three8.PerspectiveCamera(import_three8.MathUtils.radToDeg(params2.yfov), params2.aspectRatio || 1, params2.znear || 1, params2.zfar || 2e6);
    } else if (cameraDef.type === "orthographic") {
      camera = new import_three8.OrthographicCamera(-params2.xmag, params2.xmag, params2.ymag, -params2.ymag, params2.znear, params2.zfar);
    }
    if (cameraDef.name)
      camera.name = this.createUniqueName(cameraDef.name);
    assignExtrasToUserData(camera, cameraDef);
    return Promise.resolve(camera);
  }
  loadSkin(skinIndex) {
    const skinDef = this.json.skins[skinIndex];
    const skinEntry = { joints: skinDef.joints };
    if (skinDef.inverseBindMatrices === void 0) {
      return Promise.resolve(skinEntry);
    }
    return this.getDependency("accessor", skinDef.inverseBindMatrices).then(function(accessor) {
      skinEntry.inverseBindMatrices = accessor;
      return skinEntry;
    });
  }
  loadAnimation(animationIndex) {
    const json = this.json;
    const animationDef = json.animations[animationIndex];
    const pendingNodes = [];
    const pendingInputAccessors = [];
    const pendingOutputAccessors = [];
    const pendingSamplers = [];
    const pendingTargets = [];
    for (let i = 0, il = animationDef.channels.length; i < il; i++) {
      const channel = animationDef.channels[i];
      const sampler = animationDef.samplers[channel.sampler];
      const target = channel.target;
      const name = target.node !== void 0 ? target.node : target.id;
      const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
      const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
      pendingNodes.push(this.getDependency("node", name));
      pendingInputAccessors.push(this.getDependency("accessor", input));
      pendingOutputAccessors.push(this.getDependency("accessor", output));
      pendingSamplers.push(sampler);
      pendingTargets.push(target);
    }
    return Promise.all([
      Promise.all(pendingNodes),
      Promise.all(pendingInputAccessors),
      Promise.all(pendingOutputAccessors),
      Promise.all(pendingSamplers),
      Promise.all(pendingTargets)
    ]).then(function(dependencies) {
      const nodes = dependencies[0];
      const inputAccessors = dependencies[1];
      const outputAccessors = dependencies[2];
      const samplers = dependencies[3];
      const targets = dependencies[4];
      const tracks = [];
      for (let i = 0, il = nodes.length; i < il; i++) {
        const node = nodes[i];
        const inputAccessor = inputAccessors[i];
        const outputAccessor = outputAccessors[i];
        const sampler = samplers[i];
        const target = targets[i];
        if (node === void 0)
          continue;
        node.updateMatrix();
        node.matrixAutoUpdate = true;
        let TypedKeyframeTrack;
        switch (PATH_PROPERTIES[target.path]) {
          case PATH_PROPERTIES.weights:
            TypedKeyframeTrack = import_three8.NumberKeyframeTrack;
            break;
          case PATH_PROPERTIES.rotation:
            TypedKeyframeTrack = import_three8.QuaternionKeyframeTrack;
            break;
          case PATH_PROPERTIES.position:
          case PATH_PROPERTIES.scale:
          default:
            TypedKeyframeTrack = import_three8.VectorKeyframeTrack;
            break;
        }
        const targetName = node.name ? node.name : node.uuid;
        const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : import_three8.InterpolateLinear;
        const targetNames = [];
        if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
          node.traverse(function(object) {
            if (object.morphTargetInfluences) {
              targetNames.push(object.name ? object.name : object.uuid);
            }
          });
        } else {
          targetNames.push(targetName);
        }
        let outputArray = outputAccessor.array;
        if (outputAccessor.normalized) {
          const scale = getNormalizedComponentScale(outputArray.constructor);
          const scaled = new Float32Array(outputArray.length);
          for (let j = 0, jl = outputArray.length; j < jl; j++) {
            scaled[j] = outputArray[j] * scale;
          }
          outputArray = scaled;
        }
        for (let j = 0, jl = targetNames.length; j < jl; j++) {
          const track = new TypedKeyframeTrack(targetNames[j] + "." + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation);
          if (sampler.interpolation === "CUBICSPLINE") {
            track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
              const interpolantType = this instanceof import_three8.QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
              return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
            };
            track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
          }
          tracks.push(track);
        }
      }
      const name = animationDef.name ? animationDef.name : "animation_" + animationIndex;
      return new import_three8.AnimationClip(name, void 0, tracks);
    });
  }
  createNodeMesh(nodeIndex) {
    const json = this.json;
    const parser = this;
    const nodeDef = json.nodes[nodeIndex];
    if (nodeDef.mesh === void 0)
      return null;
    return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
      const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
      if (nodeDef.weights !== void 0) {
        node.traverse(function(o) {
          if (!o.isMesh)
            return;
          for (let i = 0, il = nodeDef.weights.length; i < il; i++) {
            o.morphTargetInfluences[i] = nodeDef.weights[i];
          }
        });
      }
      return node;
    });
  }
  loadNode(nodeIndex) {
    const json = this.json;
    const extensions = this.extensions;
    const parser = this;
    const nodeDef = json.nodes[nodeIndex];
    const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
    return function() {
      const pending = [];
      const meshPromise = parser._invokeOne(function(ext) {
        return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
      });
      if (meshPromise) {
        pending.push(meshPromise);
      }
      if (nodeDef.camera !== void 0) {
        pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        }));
      }
      parser._invokeAll(function(ext) {
        return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
      }).forEach(function(promise) {
        pending.push(promise);
      });
      return Promise.all(pending);
    }().then(function(objects) {
      let node;
      if (nodeDef.isBone === true) {
        node = new import_three8.Bone();
      } else if (objects.length > 1) {
        node = new import_three8.Group();
      } else if (objects.length === 1) {
        node = objects[0];
      } else {
        node = new import_three8.Object3D();
      }
      if (node !== objects[0]) {
        for (let i = 0, il = objects.length; i < il; i++) {
          node.add(objects[i]);
        }
      }
      if (nodeDef.name) {
        node.userData.name = nodeDef.name;
        node.name = nodeName;
      }
      assignExtrasToUserData(node, nodeDef);
      if (nodeDef.extensions)
        addUnknownExtensionsToUserData(extensions, node, nodeDef);
      if (nodeDef.matrix !== void 0) {
        const matrix = new import_three8.Matrix4();
        matrix.fromArray(nodeDef.matrix);
        node.applyMatrix4(matrix);
      } else {
        if (nodeDef.translation !== void 0) {
          node.position.fromArray(nodeDef.translation);
        }
        if (nodeDef.rotation !== void 0) {
          node.quaternion.fromArray(nodeDef.rotation);
        }
        if (nodeDef.scale !== void 0) {
          node.scale.fromArray(nodeDef.scale);
        }
      }
      if (!parser.associations.has(node)) {
        parser.associations.set(node, {});
      }
      parser.associations.get(node).nodes = nodeIndex;
      return node;
    });
  }
  loadScene(sceneIndex) {
    const json = this.json;
    const extensions = this.extensions;
    const sceneDef = this.json.scenes[sceneIndex];
    const parser = this;
    const scene = new import_three8.Group();
    if (sceneDef.name)
      scene.name = parser.createUniqueName(sceneDef.name);
    assignExtrasToUserData(scene, sceneDef);
    if (sceneDef.extensions)
      addUnknownExtensionsToUserData(extensions, scene, sceneDef);
    const nodeIds = sceneDef.nodes || [];
    const pending = [];
    for (let i = 0, il = nodeIds.length; i < il; i++) {
      pending.push(buildNodeHierarchy(nodeIds[i], scene, json, parser));
    }
    return Promise.all(pending).then(function() {
      const reduceAssociations = (node) => {
        const reducedAssociations = /* @__PURE__ */ new Map();
        for (const [key, value] of parser.associations) {
          if (key instanceof import_three8.Material || key instanceof import_three8.Texture) {
            reducedAssociations.set(key, value);
          }
        }
        node.traverse((node2) => {
          const mappings = parser.associations.get(node2);
          if (mappings != null) {
            reducedAssociations.set(node2, mappings);
          }
        });
        return reducedAssociations;
      };
      parser.associations = reduceAssociations(scene);
      return scene;
    });
  }
};
function buildNodeHierarchy(nodeId, parentObject, json, parser) {
  const nodeDef = json.nodes[nodeId];
  return parser.getDependency("node", nodeId).then(function(node) {
    if (nodeDef.skin === void 0)
      return node;
    let skinEntry;
    return parser.getDependency("skin", nodeDef.skin).then(function(skin) {
      skinEntry = skin;
      const pendingJoints = [];
      for (let i = 0, il = skinEntry.joints.length; i < il; i++) {
        pendingJoints.push(parser.getDependency("node", skinEntry.joints[i]));
      }
      return Promise.all(pendingJoints);
    }).then(function(jointNodes) {
      node.traverse(function(mesh) {
        if (!mesh.isMesh)
          return;
        const bones = [];
        const boneInverses = [];
        for (let j = 0, jl = jointNodes.length; j < jl; j++) {
          const jointNode = jointNodes[j];
          if (jointNode) {
            bones.push(jointNode);
            const mat = new import_three8.Matrix4();
            if (skinEntry.inverseBindMatrices !== void 0) {
              mat.fromArray(skinEntry.inverseBindMatrices.array, j * 16);
            }
            boneInverses.push(mat);
          } else {
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[j]);
          }
        }
        mesh.bind(new import_three8.Skeleton(bones, boneInverses), mesh.matrixWorld);
      });
      return node;
    });
  }).then(function(node) {
    parentObject.add(node);
    const pending = [];
    if (nodeDef.children) {
      const children = nodeDef.children;
      for (let i = 0, il = children.length; i < il; i++) {
        const child = children[i];
        pending.push(buildNodeHierarchy(child, node, json, parser));
      }
    }
    return Promise.all(pending);
  });
}
function computeBounds(geometry, primitiveDef, parser) {
  const attributes = primitiveDef.attributes;
  const box = new import_three8.Box3();
  if (attributes.POSITION !== void 0) {
    const accessor = parser.json.accessors[attributes.POSITION];
    const min = accessor.min;
    const max = accessor.max;
    if (min !== void 0 && max !== void 0) {
      box.set(new import_three8.Vector3(min[0], min[1], min[2]), new import_three8.Vector3(max[0], max[1], max[2]));
      if (accessor.normalized) {
        const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
        box.min.multiplyScalar(boxScale);
        box.max.multiplyScalar(boxScale);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else {
    return;
  }
  const targets = primitiveDef.targets;
  if (targets !== void 0) {
    const maxDisplacement = new import_three8.Vector3();
    const vector = new import_three8.Vector3();
    for (let i = 0, il = targets.length; i < il; i++) {
      const target = targets[i];
      if (target.POSITION !== void 0) {
        const accessor = parser.json.accessors[target.POSITION];
        const min = accessor.min;
        const max = accessor.max;
        if (min !== void 0 && max !== void 0) {
          vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
          vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
          vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
          if (accessor.normalized) {
            const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
            vector.multiplyScalar(boxScale);
          }
          maxDisplacement.max(vector);
        } else {
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
    }
    box.expandByVector(maxDisplacement);
  }
  geometry.boundingBox = box;
  const sphere = new import_three8.Sphere();
  box.getCenter(sphere.center);
  sphere.radius = box.min.distanceTo(box.max) / 2;
  geometry.boundingSphere = sphere;
}
function addPrimitiveAttributes(geometry, primitiveDef, parser) {
  const attributes = primitiveDef.attributes;
  const pending = [];
  function assignAttributeAccessor(accessorIndex, attributeName) {
    return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
      geometry.setAttribute(attributeName, accessor);
    });
  }
  for (const gltfAttributeName in attributes) {
    const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
    if (threeAttributeName in geometry.attributes)
      continue;
    pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
  }
  if (primitiveDef.indices !== void 0 && !geometry.index) {
    const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
      geometry.setIndex(accessor2);
    });
    pending.push(accessor);
  }
  assignExtrasToUserData(geometry, primitiveDef);
  computeBounds(geometry, primitiveDef, parser);
  return Promise.all(pending).then(function() {
    return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
  });
}
function toTrianglesDrawMode(geometry, drawMode) {
  let index = geometry.getIndex();
  if (index === null) {
    const indices = [];
    const position = geometry.getAttribute("position");
    if (position !== void 0) {
      for (let i = 0; i < position.count; i++) {
        indices.push(i);
      }
      geometry.setIndex(indices);
      index = geometry.getIndex();
    } else {
      console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
      return geometry;
    }
  }
  const numberOfTriangles = index.count - 2;
  const newIndices = [];
  if (drawMode === import_three8.TriangleFanDrawMode) {
    for (let i = 1; i <= numberOfTriangles; i++) {
      newIndices.push(index.getX(0));
      newIndices.push(index.getX(i));
      newIndices.push(index.getX(i + 1));
    }
  } else {
    for (let i = 0; i < numberOfTriangles; i++) {
      if (i % 2 === 0) {
        newIndices.push(index.getX(i));
        newIndices.push(index.getX(i + 1));
        newIndices.push(index.getX(i + 2));
      } else {
        newIndices.push(index.getX(i + 2));
        newIndices.push(index.getX(i + 1));
        newIndices.push(index.getX(i));
      }
    }
  }
  if (newIndices.length / 3 !== numberOfTriangles) {
    console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  }
  const newGeometry = geometry.clone();
  newGeometry.setIndex(newIndices);
  return newGeometry;
}

// app/gl/util/model-loader.js
var model_loader_default = (url, id) => {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      const result = {
        model: gltf.scene,
        anim: gltf.animations
      };
      resolve(result);
    });
  });
};

// app/gl/util/texture-loader.js
init_react();
var import_three9 = require("three");
var tl = new import_three9.TextureLoader();
function loadTexture(url) {
  return new Promise((resolve) => {
    tl.load(url, (data) => {
      data.needsUpdate = true;
      resolve(data);
    });
  });
}

// app/gl/assets/lib.js
init_react();

// app/gl/assets/wormhole.v2.png
var wormhole_v2_default = "/build/_assets/wormhole.v2-UMSGNFDX.png";

// app/gl/assets/Clouds_20.png
var Clouds_20_default = "/build/_assets/Clouds_20-4NZNYFJM.png";

// app/gl/assets/Clouds_40.png
var Clouds_40_default = "/build/_assets/Clouds_40-WILHCAAS.png";

// app/gl/assets/Clouds_200.png
var Clouds_200_default = "/build/_assets/Clouds_200-4P2QSD7U.png";

// app/gl/assets/conveyor.v2.png
var conveyor_v2_default = "/build/_assets/conveyor.v2-6XH57CEN.png";

// app/gl/assets/dragon.v0.png
var dragon_v0_default = "/build/_assets/dragon.v0-ULBUNEI4.png";

// app/gl/assets/shelf.v0.png
var shelf_v0_default = "/build/_assets/shelf.v0-UYMD3FVI.png";

// app/gl/assets/capitain.v0.png
var capitain_v0_default = "/build/_assets/capitain.v0-CGXBENN3.png";

// app/gl/assets/souls/The Artisan Day.png
var The_Artisan_Day_default = "/build/_assets/The Artisan Day-QPT77CS7.png";

// app/gl/assets/souls/The Artisan Night.png
var The_Artisan_Night_default = "/build/_assets/The Artisan Night-3IWJPYOE.png";

// app/gl/assets/souls/The Healer Day.png
var The_Healer_Day_default = "/build/_assets/The Healer Day-4TJ6FU27.png";

// app/gl/assets/souls/The Healer Night.png
var The_Healer_Night_default = "/build/_assets/The Healer Night-DRMTXY7F.png";

// app/gl/assets/souls/The Hermit Day.png
var The_Hermit_Day_default = "/build/_assets/The Hermit Day-TCNL6O2J.png";

// app/gl/assets/souls/The Hermit Night.png
var The_Hermit_Night_default = "/build/_assets/The Hermit Night-FOTTZETD.png";

// app/gl/assets/souls/The Hunter Day.png
var The_Hunter_Day_default = "/build/_assets/The Hunter Day-SEG752ML.png";

// app/gl/assets/souls/The Hunter Night.png
var The_Hunter_Night_default = "/build/_assets/The Hunter Night-JMWLGOST.png";

// app/gl/assets/souls/The Leader Day.png
var The_Leader_Day_default = "/build/_assets/The Leader Day-YDSG2VTW.png";

// app/gl/assets/souls/The Leader Night.png
var The_Leader_Night_default = "/build/_assets/The Leader Night-3JSLJAP5.png";

// app/gl/assets/souls/The Maverick Day.png
var The_Maverick_Day_default = "/build/_assets/The Maverick Day-6KDOSXZJ.png";

// app/gl/assets/souls/The Maverick Night.png
var The_Maverick_Night_default = "/build/_assets/The Maverick Night-K66PFUOP.png";

// app/gl/assets/souls/The Sage Day.png
var The_Sage_Day_default = "/build/_assets/The Sage Day-J7WXKJ7Q.png";

// app/gl/assets/souls/The Sage Night.png
var The_Sage_Night_default = "/build/_assets/The Sage Night-7NB63HKB.png";

// app/gl/assets/souls/The Scholar Day.png
var The_Scholar_Day_default = "/build/_assets/The Scholar Day-5QYLZ6VZ.png";

// app/gl/assets/souls/The Scholar Night.png
var The_Scholar_Night_default = "/build/_assets/The Scholar Night-QSTFU3FX.png";

// app/gl/assets/souls/The Star Day.png
var The_Star_Day_default = "/build/_assets/The Star Day-TFT24GKG.png";

// app/gl/assets/souls/The Star Night.png
var The_Star_Night_default = "/build/_assets/The Star Night-UIH7U4RR.png";

// app/gl/assets/souls/The Trickster Day.png
var The_Trickster_Day_default = "/build/_assets/The Trickster Day-U7HKJDQ6.png";

// app/gl/assets/souls/The Trickster Night.png
var The_Trickster_Night_default = "/build/_assets/The Trickster Night-6K6W7DMG.png";

// app/gl/assets/souls/The Wanderer Day.png
var The_Wanderer_Day_default = "/build/_assets/The Wanderer Day-7Q2OADQV.png";

// app/gl/assets/souls/The Wanderer Night.png
var The_Wanderer_Night_default = "/build/_assets/The Wanderer Night-VE2OHVXM.png";

// app/gl/assets/souls/The Warrior Day.png
var The_Warrior_Day_default = "/build/_assets/The Warrior Day-5UQGPYD4.png";

// app/gl/assets/souls/The Warrior Night.png
var The_Warrior_Night_default = "/build/_assets/The Warrior Night-E7RZCF4A.png";

// app/gl/assets/lib.js
var STX = {
  tx_artisan_d: The_Artisan_Day_default,
  tx_artisan_n: The_Artisan_Night_default,
  tx_healer_d: The_Healer_Day_default,
  tx_healer_n: The_Healer_Night_default,
  tx_hermit_d: The_Hermit_Day_default,
  tx_hermit_n: The_Hermit_Night_default,
  tx_hunter_d: The_Hunter_Day_default,
  tx_hunter_n: The_Hunter_Night_default,
  tx_leader_d: The_Leader_Day_default,
  tx_leader_n: The_Leader_Night_default,
  tx_maverick_d: The_Maverick_Day_default,
  tx_maverick_n: The_Maverick_Night_default,
  tx_sage_d: The_Sage_Day_default,
  tx_sage_n: The_Sage_Night_default,
  tx_scholar_d: The_Scholar_Day_default,
  tx_scholar_n: The_Scholar_Night_default,
  tx_star_d: The_Star_Day_default,
  tx_star_n: The_Star_Night_default,
  tx_trickster_d: The_Trickster_Day_default,
  tx_trickster_n: The_Trickster_Night_default,
  tx_wanderer_d: The_Wanderer_Day_default,
  tx_wanderer_n: The_Wanderer_Night_default,
  tx_warrior_d: The_Warrior_Day_default,
  tx_warrior_n: The_Warrior_Night_default
};
var BASE_URL = "https://tmpr.s3.eu-central-1.amazonaws.com/pr/voxs/asts";
var LIB = { model: BASE_URL + "/convayor_0.glb" };
var TX = {
  tx_wormh: wormhole_v2_default,
  tx_clouds2: Clouds_20_default,
  tx_clouds4: Clouds_40_default,
  tx_clouds9: Clouds_200_default,
  tx_conv: conveyor_v2_default,
  tx_dragon: dragon_v0_default,
  tx_shelf: shelf_v0_default,
  tx_capitan: capitain_v0_default
};

// app/gl/_camera.js
init_react();
var import_three10 = require("three");
var import_gsap6 = __toESM(require("gsap"));
var camera_default = class extends import_three10.PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super();
    this.isSliderMode = false;
    this.sliderCurrent = 0;
    this.mouse = { x: 0, y: 0, ex: 0, ey: 0 };
    if (window.innerWidth < window.innerHeight)
      this.isMobile = true;
    this.addZ = -3;
    if (this.isMobile)
      this.addZ = -2;
    this.rPosX = 1.1;
    this.fov = 28;
    this.initEvents();
  }
  initEvents() {
    if (this.isMobile)
      return;
    const wX = window.innerWidth, wY = window.innerHeight;
    document.onmousemove = (e) => {
      this.mouse.x = -(e.clientX / wX * 2 - 1) * 0.02;
      this.mouse.y = -(e.clientY / wY * 2 - 1) * 0.02;
      this.rotateCam(this.mouse);
    };
  }
  rotateCam({ x, y }) {
    if (this.isSliderMode) {
      import_gsap6.default.to(this.rotation, {
        x: y * 2,
        y: x * 2,
        duration: 1,
        ease: "slow.inOut"
      });
    } else {
      import_gsap6.default.to(this.rotation, {
        x: y,
        y: x,
        duration: 1,
        ease: "slow.inOut"
      });
    }
  }
  punchZoom(bool) {
    let z = this.addZ;
    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim)
        this.punchZoomAnim.kill();
      this.punchZoomAnim = import_gsap6.default.to(this.position, {
        z,
        x: this.placements[this.sliderCurrent].x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1
      });
    } else {
      this.isSliderMode = false;
      if (this.punchZoomAnim)
        this.punchZoomAnim.kill();
      this.punchZoomAnim = import_gsap6.default.to(this.position, {
        z: 0,
        x: 0,
        y: 0,
        ease: "expo.out",
        duration: 1
      });
    }
  }
  fadeOut(bool) {
    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim)
        this.punchZoomAnim.kill();
      this.punchZoomAnim = import_gsap6.default.to(this.position, {
        z: -3,
        x: this.placements[this.sliderCurrent].x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1
      });
    }
  }
  soulIn(bool) {
    let z = this.addZ - 0.5;
    let x = this.isMobile ? 0 : 0.2;
    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim)
        this.punchZoomAnim.kill();
      this.punchZoomAnim = import_gsap6.default.to(this.position, {
        z,
        x: this.placements[this.sliderCurrent].x + x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1
      });
    } else {
      this.isSliderMode = false;
      if (this.punchZoomAnim)
        this.punchZoomAnim.kill();
      this.punchZoomAnim = import_gsap6.default.to(this.position, {
        z: this.addZ,
        x: this.placements[this.sliderCurrent].x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1
      });
    }
  }
  computePlacements() {
    this.placements.forEach((placement) => {
      placement.y = placement.y - this.placements[11].y;
    });
  }
  toSliderPosition(index) {
    this.sliderCurrent = index;
    if (this.sliderAnim)
      this.sliderAnim.kill();
    this.sliderAnim = import_gsap6.default.to(this.position, {
      x: this.placements[index].x,
      y: this.placements[index].y - 0.5,
      duration: 0.8,
      ease: "expo.out"
    });
  }
};

// app/gl/_scene.js
init_react();
var import_three22 = require("three");

// app/gl/mat/worm/index.js
init_react();
var import_three11 = require("three");
var vertexShader = `
#define MPI 3.1415926535897932384626433832795
#include <skinning_pars_vertex>
 
uniform float u_time;
varying vec2 v_uv;


void main() {
  #include <skinbase_vertex>
  vec3 pos = position;

  vec4 tr = modelViewMatrix * vec4(position, 1.0);

  //gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;

  #include <begin_vertex>
  // #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
}
`;
var fragmentShader = `
uniform float u_time;
uniform sampler2D u_t1;

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {
 vec4 img = texture2D(u_t1, v_uv);

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = img.a;
}
`;
var worm_default = class extends import_three11.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null }
    };
    this.side = import_three11.FrontSide;
    this.transparent = true;
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
};

// app/gl/mat/clouds/index.js
init_react();
var import_three12 = require("three");
var vertexShader2 = `
#define MPI 3.1415926535897932384626433832795
 
uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
`;
var fragmentShader2 = `
uniform float u_time;
uniform sampler2D u_t1;
uniform sampler2D u_t2;
uniform sampler2D u_tm0;
uniform float u_daylight;
varying vec2 v_uv;


void main() {
  vec3 img1 = texture2D(u_t1, v_uv).rgb;
  vec3 img2 = texture2D(u_t2, v_uv).rgb;
  vec3 img3 = texture2D(u_tm0, v_uv).rgb;
  float alpha = texture2D(u_t1, v_uv).a;

  // masking OPS
  float mask = distance(img1.r, img2.r);
  float finishController = smoothstep(.0, 1., u_daylight);
  float finalMask = smoothstep(0., 1., mask * u_daylight + finishController);

  // mixing OPS
  float step1 = smoothstep(0., .5, finalMask);
  float step2 = smoothstep(.5, 1., finalMask);

  vec3 final = mix(img1, img3, step1); 
  final = mix(final, img2, step2);

  gl_FragColor.rgb = final;
  gl_FragColor.a = alpha;
}
`;
var clouds_default = class extends import_three12.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader2,
      fragmentShader: fragmentShader2
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null },
      u_tm0: { value: (options == null ? void 0 : options.u_tm0) || null },
      u_t2: { value: (options == null ? void 0 : options.u_t2) || null },
      u_daylight: { value: 0 }
    };
    this.side = import_three12.DoubleSide;
    this.transparent = true;
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
};

// app/gl/mat/belt/index.js
init_react();
var import_three13 = require("three");
var vertexShader3 = `
#define MPI 3.1415926535897932384626433832795
 
attribute vec2 uv2;
uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv2;
}
`;
var fragmentShader3 = `
uniform float u_time;
uniform sampler2D u_t1;
uniform sampler2D u_t2;
uniform float u_daylight;

varying vec2 v_uv;
// varying vec3 vPosition;

const vec4 col_black = vec4(0., 0., 0., 1.);


void main() {
  vec4 img = texture2D(u_t1, v_uv);
  // vec4 img_night = texture2D(u_t2, v_uv);


  img = mix(col_black, img, u_daylight);

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = img.a;
}
`;
var belt_default = class extends import_three13.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader3,
      fragmentShader: fragmentShader3
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null },
      u_t2: { value: (options == null ? void 0 : options.u_t2) || null },
      u_daylight: { value: 0 }
    };
    this.side = import_three13.DoubleSide;
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
};

// app/gl/mat/dragon/index.js
init_react();
var import_three14 = require("three");
var vertexShader4 = `
#define MPI 3.1415926535897932384626433832795

#include <skinning_pars_vertex>

attribute vec2 uv2;
uniform float u_time;
varying vec2 v_uv;


void main() {
  #include <uv_vertex>
  #include <skinbase_vertex>
  vec3 pos = position;

  vec4 tr = modelViewMatrix * vec4(position, 1.0);

  //gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;

  #include <begin_vertex>
  // #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
}
`;
var fragmentShader4 = `
uniform float u_time;
uniform sampler2D u_t1;

varying vec2 v_uv;

const vec4 col_black = vec4(0., 0., 0., 1.);


void main() {
 vec4 img = texture2D(u_t1, v_uv);

  img = mix(col_black, img, 1.);

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = 1.;
}
`;
var dragon_default = class extends import_three14.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader4,
      fragmentShader: fragmentShader4
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null },
      u_t2: { value: (options == null ? void 0 : options.u_t2) || null },
      u_daylight: { value: 0 }
    };
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
};

// app/gl/mat/shelf/index.js
init_react();
var import_three15 = require("three");
var vertexShader5 = `
#define MPI 3.1415926535897932384626433832795

#include <skinning_pars_vertex>

attribute vec2 uv2;
uniform float u_time;
varying vec2 v_uv;


void main() {
  #include <uv_vertex>
  #include <skinbase_vertex>
  vec3 pos = position;

  vec4 tr = modelViewMatrix * vec4(position, 1.0);

  //gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv2;

  #include <begin_vertex>
  // #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
}
`;
var fragmentShader5 = `
uniform float u_time;
uniform sampler2D u_t1;

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {
 vec4 img = texture2D(u_t1, v_uv);

  gl_FragColor.rgb = img.rgb;
  // gl_FragColor.rgb = vec3(v_uv, 0.);
  gl_FragColor.a = 1.;
}
`;
var shelf_default = class extends import_three15.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader5,
      fragmentShader: fragmentShader5
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null },
      u_t2: { value: (options == null ? void 0 : options.u_t2) || null }
    };
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
};

// app/gl/mat/soul/index.js
init_react();
var import_three16 = require("three");
var vertexShader6 = `
#define MPI 3.1415926535897932384626433832795

#include <skinning_pars_vertex>

attribute vec2 uv2;
uniform float u_time;
varying vec2 v_uv;


void main() {
  #include <uv_vertex>
  #include <skinbase_vertex>
  vec3 pos = position;

  vec4 tr = modelViewMatrix * vec4(position, 1.0);

  //gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv2;

  #include <begin_vertex>
  // #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
}
`;
var fragmentShader6 = `
uniform float u_time;
uniform sampler2D u_t1;
uniform sampler2D u_t2;
uniform float u_daylight;

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {
  vec4 img = texture2D(u_t1, v_uv);
  vec4 img_night = texture2D(u_t2, v_uv);

  img = mix(img, img_night, u_daylight + .1);

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = 1.;
}
`;
var soul_default = class extends import_three16.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader6,
      fragmentShader: fragmentShader6
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null },
      u_t2: { value: (options == null ? void 0 : options.u_t2) || null },
      u_daylight: { value: 0 }
    };
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
};

// app/gl/mat/hole/index.js
init_react();
var import_three17 = require("three");
var vertexShader7 = `
#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
`;
var fragmentShader7 = `
uniform float open;
uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {

  float remap = open;
  float circ = distance(v_uv, vec2(.5, .45));
  circ = smoothstep(.5 * remap, 1. * remap, circ);


  gl_FragColor = vec4(1., 1., 1., circ);
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;
var hole_default = class extends import_three17.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader7,
      fragmentShader: fragmentShader7
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      open: { value: 0 }
    };
    this.side = import_three17.DoubleSide;
    this.transparent = true;
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
  set open(val) {
    this.uniforms.open.value = val;
  }
};

// app/gl/rig.js
init_react();
var import_three19 = require("three");

// app/gl/skin.js
init_react();
var import_three18 = require("three");
var skin_default = class {
  constructor(clips, model) {
    this.clips = clips;
    this.model = model;
    this.clock = new import_three18.Clock();
    this.mixer = new import_three18.AnimationMixer(this.model);
    this.getClipValue();
    this.setAllClips();
    this.goToTime(this.timeSteps.minTime);
    this.goToTime(0);
  }
  getClipValue() {
    const singleClip = this.clips[0].duration;
    this.time = { current: 0, intro: 0 };
    this.timeSteps = {
      intro: 7.83565614415884,
      minTime: singleClip / 2,
      single: singleClip / 2,
      total: singleClip * 0.999
    };
  }
  setAllClips() {
    this.clips.forEach((clip) => {
      this.mixer.clipAction(clip).play();
    });
  }
  goToTime(time) {
    const remappedTime = this.time.intro + time * (this.timeSteps.total - this.timeSteps.intro);
    this.mixer.setTime(remappedTime);
  }
};

// app/gl/rig.js
var rig_default = class extends import_three19.Group {
  constructor(data, textures) {
    super();
    this.data = data;
    this.scroll = 0;
    this.sliderProgress = 0;
    this.ctaProgress = 0;
    this.create();
  }
  create() {
    this.add(this.data.model);
    this.skin = new skin_default(this.data.anim, this.data.model);
  }
  render(t) {
    if (this.skin)
      this.skin.goToTime(this.scroll);
  }
};

// app/gl/sky.js
init_react();
var import_three21 = require("three");

// app/gl/mat/sky/index.js
init_react();
var import_three20 = require("three");
var vertexShader8 = `
#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
`;
var fragmentShader8 = `
uniform float u_time;
uniform float u_daylight;
varying vec2 v_uv;

const vec3 sky_dark = vec3(0.058823529411764705, 0.10196078431372549, 0.3568627450980392);
const vec3 sky_light = vec3(0.3215686274509804, 0.5529411764705883, 0.7725490196078432);
const vec3 col_bg = vec3(0.9176470588235294, 0.9098039215686274, 0.8705882352941177);
const vec3 col_black = vec3(0., 0., 0.);


void main() {
  float mask = distance(v_uv.y, 0.);
  mask = smoothstep(1., .5, mask);
  float finishController = smoothstep(.8, 1., u_daylight);
  float finalMask = smoothstep(0., 1., mask * u_daylight + finishController);
  
  vec3 final = mix(sky_dark, sky_light, finalMask);

  /* SUN */
  float sun = distance(v_uv, vec2(
    .5, 
    .5 + u_daylight * .05 
  ));
  sun = smoothstep(0., u_daylight * .06, sun);
  sun = smoothstep(1., 0., sun);

  /* GRADIENT */
  float y_grad = distance(v_uv.y, 0.);
  y_grad = smoothstep(.0, .8, y_grad);

  final += sun;
  final = mix(col_bg, final, y_grad);

  // final mix with black
  float final_mix = smoothstep(0., .3, u_daylight);
  vec3 mixed_final = mix(col_black, final, final_mix);

  gl_FragColor = vec4(mixed_final, 1.);
}

`;
var sky_default = class extends import_three20.ShaderMaterial {
  constructor(options) {
    super({
      vertexShader: vertexShader8,
      fragmentShader: fragmentShader8
    });
    this.uniforms = {
      u_time: { value: (options == null ? void 0 : options.u_time) || 0 },
      u_t1: { value: (options == null ? void 0 : options.u_t1) || null },
      u_daylight: { value: 0 }
    };
    this.side = import_three20.DoubleSide;
  }
  set time(t) {
    this.uniforms.u_time.value = t;
  }
  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
};

// app/gl/sky.js
var Sky = class extends import_three21.Mesh {
  constructor() {
    super();
    this.geometry = new import_three21.PlaneBufferGeometry(200, 200, 1, 1);
    this.material = new sky_default();
    this.position.z = -37;
  }
};

// app/gl/_scene.js
var scene_default = class extends import_three22.Scene {
  constructor({ camera, model, textures }) {
    super();
    this.camera = camera;
    this.textures = textures;
    this.createMaterials();
    this.model = this.loop(model);
    this.create();
  }
  create() {
    this.rig = new rig_default(this.model);
    this.add(this.rig);
    this.sky = new Sky();
    this.add(this.sky);
  }
  render(t) {
    if (this.rig)
      this.rig.render(t);
  }
  createMaterials() {
    this.cloudMat = new clouds_default({
      u_t1: this.textures.tx_clouds2,
      u_tm0: this.textures.tx_clouds4,
      u_t2: this.textures.tx_clouds9
    });
    this.beltMat = new belt_default({
      u_t1: this.textures.tx_conv
    });
    this.dragonMat = new dragon_default({
      u_t1: this.textures.tx_dragon
    });
    this.shelfMat = new shelf_default({
      u_t1: this.textures.tx_shelf
    });
    this.capMat = new dragon_default({
      u_t1: this.textures.tx_capitan
    });
    this.whMat = new worm_default({
      u_t1: this.textures.tx_wormh
    });
  }
  loop(model) {
    this.souls = {};
    this.introSouls = {};
    model.model.traverse((o) => {
      if (o.isMesh) {
        o.material = new import_three22.MeshNormalMaterial();
        o.frustumCulled = false;
        if (o.name === "m_wormh_pcs" || o.name === "m_wormh")
          o.material = this.whMat;
        if (o.name === "m_cloud" || o.name === "m_sky")
          o.material = this.cloudMat;
        if (o.name === "m_conv")
          o.material = this.beltMat;
        if (o.name === "m_dragon")
          o.material = this.dragonMat;
        if (o.name === "m_shelf")
          o.material = this.shelfMat;
        if (o.name === "Captain")
          o.material = this.capMat;
        if (o.name === "white_hole") {
          this.wormEnd = o;
          o.material = new hole_default();
        }
        if (o.name.substring(0, 3) === "The") {
          if (o.name === "The_Artisan") {
            this.souls.artisan = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_artisan_d,
              u_t2: this.textures.tx_artisan_n
            });
          }
          if (o.name === "The_Healer4-0") {
            this.souls.healer = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_healer_d,
              u_t2: this.textures.tx_healer_n
            });
            o.material.daylight = 1;
          }
          if (o.name === "The_Hermit001") {
            this.introSouls.hermit = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_hermit_d,
              u_t2: this.textures.tx_hermit_n
            });
            o.material.daylight = 1;
          }
          if (o.name === "The_Hermit") {
            this.souls.hermit = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_hermit_d,
              u_t2: this.textures.tx_hermit_n
            });
          }
          if (o.name === "The_Hunter") {
            this.souls.hunter = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_hunter_d,
              u_t2: this.textures.tx_hunter_n
            });
          }
          if (o.name === "The_Maverick") {
            this.souls.maverick = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_maverick_d,
              u_t2: this.textures.tx_maverick_n
            });
          }
          if (o.name === "The_Sage001") {
            this.souls.sage = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_sage_d,
              u_t2: this.textures.tx_sage_n
            });
          }
          if (o.name === "The_Scholar") {
            this.souls.scholar = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_scholar_d,
              u_t2: this.textures.tx_scholar_n
            });
          }
          if (o.name === "The_New_Star") {
            this.souls.newStar = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_star_d,
              u_t2: this.textures.tx_star_n
            });
          }
          if (o.name === "The_Trickster") {
            this.souls.trickster = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_trickster_d,
              u_t2: this.textures.tx_trickster_n
            });
          }
          if (o.name === "The_Wanderer") {
            this.souls.wanderer = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_wanderer_d,
              u_t2: this.textures.tx_wanderer_n
            });
          }
          if (o.name === "The_Warrior-1") {
            this.souls.warrior = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_warrior_d,
              u_t2: this.textures.tx_warrior_n
            });
          }
          if (o.name === "The_Leader001") {
            this.souls.leader = o;
            o.material = new soul_default({
              u_t1: this.textures.tx_leader_d,
              u_t2: this.textures.tx_leader_n
            });
          }
        }
      }
      if (!o.isMesh && o.name === "Camera_Orientation")
        o.add(this.camera);
    });
    return model;
  }
};

// app/gl/scroll.js
init_react();
var import_gsap7 = __toESM(require("gsap"));
var import_tiny_emitter = __toESM(require("tiny-emitter"));
var { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
var scroll_default = class extends import_tiny_emitter.default {
  constructor(scrollEl, ctaEl, sliderEl) {
    super();
    this.scrollEl = scrollEl;
    this.ctaEl = ctaEl;
    this.sliderEl = sliderEl;
    this.scroller = {
      active: false,
      step: 0,
      cta: 0,
      slider: 0,
      sliderActive: false,
      ctaActive: false
    };
    this.init();
  }
  init() {
    import_gsap7.default.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: this.scrollEl,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self2) => {
        this.scroller.step = self2.progress;
      }
    });
    ScrollTrigger.create({
      trigger: this.sliderEl,
      start: "top center",
      end: "bottom bottom",
      onToggle: (self2) => this.toggleSliderZoom(self2.isActive)
    });
    ScrollTrigger.create({
      trigger: this.ctaEl,
      start: "top bottom",
      end: "bottom bottom",
      onToggle: (self2) => this.toggleCtaZoom(self2.isActive),
      onUpdate: (self2) => {
        this.scroller.cta = self2.progress;
      }
    });
  }
  toggleSliderZoom(bool) {
    this.emit("sliderIn", bool);
  }
  toggleCtaZoom(bool) {
    this.emit("ctaIn", bool);
  }
};

// app/gl/gl.js
var gl_default = class extends import_tiny_emitter2.default {
  constructor() {
    super();
    this.time = 0;
    this.isActive = false;
    this.sceneAnimation = { intro: 0 };
  }
  setup({ canvas, scrollElement, ctaElement, sliderElement }) {
    this.scrollElement = scrollElement;
    this.ctaElement = ctaElement;
    this.sliderElement = sliderElement;
    this.renderer = new import_three23.WebGLRenderer(canvas);
    this.renderer.antialias = true;
    this.vp = {
      w: window.innerWidth,
      h: window.innerHeight,
      aspect: function() {
        return this.w / this.h;
      },
      pixelRatio: Math.min(window.devicePixelRatio, 2),
      container: canvas
    };
    this.renderer.setPixelRatio(this.vp.pixelRatio);
    this.renderer.setSize(this.vp.w, this.vp.h);
    canvas.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(15395038, 1);
    this.camera = new camera_default(50, this.vp.aspect(), 1e-5, 1e3);
    this.load();
    this.paused = false;
  }
  async load() {
    console.time("loading");
    this.loaded = {};
    console.time("MODEL load");
    const [
      tx_wormh,
      tx_clouds2,
      tx_clouds4,
      tx_clouds9,
      tx_conv,
      tx_dragon,
      tx_shelf,
      tx_capitan
    ] = await Promise.all([
      loadTexture(TX.tx_wormh),
      loadTexture(TX.tx_clouds2),
      loadTexture(TX.tx_clouds4),
      loadTexture(TX.tx_clouds9),
      loadTexture(TX.tx_conv),
      loadTexture(TX.tx_dragon),
      loadTexture(TX.tx_shelf),
      loadTexture(TX.tx_capitan)
    ]);
    this.emit("loading", 30);
    const [model] = await Promise.all([model_loader_default(LIB.model)]);
    console.timeEnd("MODEL load");
    this.emit("loading", 82);
    console.time("SOULS load");
    const [
      tx_artisan_d,
      tx_artisan_n,
      tx_healer_d,
      tx_healer_n,
      tx_hermit_d,
      tx_hermit_n,
      tx_hunter_d,
      tx_hunter_n,
      tx_leader_d,
      tx_leader_n,
      tx_maverick_d,
      tx_maverick_n,
      tx_sage_d,
      tx_sage_n,
      tx_scholar_d,
      tx_scholar_n,
      tx_star_d,
      tx_star_n,
      tx_trickster_d,
      tx_trickster_n,
      tx_wanderer_d,
      tx_wanderer_n,
      tx_warrior_d,
      tx_warrior_n
    ] = await Promise.all([
      loadTexture(STX.tx_artisan_d),
      loadTexture(STX.tx_artisan_n),
      loadTexture(STX.tx_healer_d),
      loadTexture(STX.tx_healer_n),
      loadTexture(STX.tx_hermit_d),
      loadTexture(STX.tx_hermit_n),
      loadTexture(STX.tx_hunter_d),
      loadTexture(STX.tx_hunter_n),
      loadTexture(STX.tx_leader_d),
      loadTexture(STX.tx_leader_n),
      loadTexture(STX.tx_maverick_d),
      loadTexture(STX.tx_maverick_n),
      loadTexture(STX.tx_sage_d),
      loadTexture(STX.tx_sage_n),
      loadTexture(STX.tx_scholar_d),
      loadTexture(STX.tx_scholar_n),
      loadTexture(STX.tx_star_d),
      loadTexture(STX.tx_star_n),
      loadTexture(STX.tx_trickster_d),
      loadTexture(STX.tx_trickster_n),
      loadTexture(STX.tx_wanderer_d),
      loadTexture(STX.tx_wanderer_n),
      loadTexture(STX.tx_warrior_d),
      loadTexture(STX.tx_warrior_n)
    ]);
    console.timeEnd("SOULS load");
    this.emit("loading", 100);
    this.loaded.model = model;
    this.textures = {
      tx_wormh,
      tx_clouds2,
      tx_clouds4,
      tx_clouds9,
      tx_conv,
      tx_dragon,
      tx_shelf,
      tx_capitan,
      tx_artisan_d,
      tx_artisan_n,
      tx_healer_d,
      tx_healer_n,
      tx_hermit_d,
      tx_hermit_n,
      tx_hunter_d,
      tx_hunter_n,
      tx_leader_d,
      tx_leader_n,
      tx_maverick_d,
      tx_maverick_n,
      tx_sage_d,
      tx_sage_n,
      tx_scholar_d,
      tx_scholar_n,
      tx_star_d,
      tx_star_n,
      tx_trickster_d,
      tx_trickster_n,
      tx_wanderer_d,
      tx_wanderer_n,
      tx_warrior_d,
      tx_warrior_n
    };
    console.time("POST load");
    for (const tx in this.textures)
      this.textures[tx].flipY = false;
    this.camera.placements = this.findCamPlacements(this.loaded.model.model);
    this.camera.computePlacements();
    this.create();
    this.emit("loaded");
    console.timeEnd("POST load");
    console.timeEnd("loading");
    this.playIntro();
    this.isActive = true;
  }
  findCamPlacements(model) {
    const camPlacements = [];
    model.traverse((o) => {
      if (!o.isMesh && o.name.substring(0, 6) === "place_") {
        camPlacements.push(o.position);
      }
    });
    return camPlacements;
  }
  create() {
    this.scene = new scene_default({
      camera: this.camera,
      model: this.loaded.model,
      textures: this.textures
    });
    this.initEvents();
    this.render();
    this.scroll = new scroll_default(this.scrollElement, this.ctaElement, this.sliderElement);
    this.setupEvents();
    this.initPost();
  }
  initPost() {
    this.post = new Post(this.renderer, this.scene, this.camera);
  }
  render() {
    var _a;
    if (this.paused)
      return;
    this.time += 0.01;
    if (this.scene)
      this.scene.render(this.time);
    if (this.scroll) {
      this.scene.rig.scroll = this.scroll.scroller.step;
      this.scene.rig.sliderProgress = this.scroll.scroller.slider;
      this.scene.rig.ctaProgress = this.scroll.scroller.cta;
      this.scene.sky.position.y = this.scroll.scroller.step * 200;
      this.scene.wormEnd.material.open = this.scroll.scroller.step;
    }
    ((_a = this.post) == null ? void 0 : _a.isActive) ? this.post.render(this.time) : this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
  resize() {
    this.vp.w = this.vp.container.offsetWidth;
    this.vp.h = this.vp.container.offsetHeight;
    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.aspect = this.vp.w / this.vp.h;
    this.camera.updateProjectionMatrix();
    this.resizeChild();
  }
  resizeChild() {
  }
  initEvents() {
    new ResizeObserver((entry2) => this.resize(entry2[0].contentRect)).observe(this.vp.container);
    document.addEventListener("visibilitychange", () => {
      document.hidden ? this.paused = true : this.paused = false;
    });
  }
  setupEvents() {
    this.scroll.on("sliderIn", (bool) => this.camera.punchZoom(bool));
    this.scroll.on("ctaIn", (bool) => this.camera.fadeOut(bool));
  }
  playIntro() {
    import_gsap8.default.to(this.sceneAnimation, {
      intro: 1,
      duration: 6,
      delay: 2,
      ease: "power1",
      onUpdate: () => this.introTime(this.sceneAnimation.intro),
      onComplete: () => this.emit("canScroll")
    });
  }
  introTime(t) {
    this.scene.rig.skin.time.intro = t * 7.83565614415884;
    this.scene.cloudMat.daylight = t;
    this.scene.dragonMat.daylight = t;
    this.scene.beltMat.daylight = t;
    this.scene.introSouls.hermit.material.daylight = 1 - t;
    this.scene.souls.healer.material.daylight = 1 - t;
    this.scene.sky.material.daylight = t;
  }
  soulIndexChanged({ soulIndex }) {
    this.camera.toSliderPosition(soulIndex);
  }
  soulInChanged({ soulIn }) {
    this.camera.soulIn(soulIn);
  }
};

// app/gl/Canvas.jsx
var import_react13 = require("react");
function Canvas({
  scrollRef,
  sliderRef,
  ctaRef,
  setCanScroll,
  soulIndex,
  setPreloaderOut,
  setIsLoading,
  soulIn
}) {
  const ref = (0, import_react13.useRef)(null);
  const gl = (0, import_react13.useMemo)(() => new gl_default(), []);
  (0, import_react13.useEffect)(() => {
    if (gl)
      gl.once("loaded", () => {
        setPreloaderOut(true);
      });
    gl.once("canScroll", () => {
      setCanScroll(true);
    });
    gl.on("loading", (progress) => {
      setIsLoading(progress);
    });
  }, [gl]);
  (0, import_react13.useEffect)(() => {
    if (gl)
      gl.setup({
        canvas: ref.current,
        scrollElement: scrollRef.current,
        ctaElement: ctaRef.current,
        sliderElement: sliderRef.current
      });
  }, [gl, ref, scrollRef]);
  (0, import_react13.useEffect)(() => {
    if (gl && gl.isActive) {
      gl.soulIndexChanged(soulIndex);
    }
  }, [soulIndex, gl]);
  (0, import_react13.useEffect)(() => {
    if (gl && gl.isActive) {
      gl.soulInChanged(soulIn);
    }
  }, [soulIn, gl]);
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    className: "Canvas"
  });
}

// app/c/Sound.jsx
init_react();
var import_react14 = require("react");
var import_howler = require("howler");

// app/src/vox-song-0.mp3
var vox_song_0_default = "/build/_assets/vox-song-0-B377KFZE.mp3";

// app/c/Sound.jsx
function Sound() {
  const [isPlaying, setIsPlaying] = (0, import_react14.useState)(false);
  const soundBars = (0, import_react14.useRef)(null);
  const soundLoop = (0, import_react14.useMemo)(() => new import_howler.Howl({
    src: [vox_song_0_default],
    loop: 1,
    volume: 0.3
  }), []);
  (0, import_react14.useEffect)(() => {
    if (isPlaying) {
      soundLoop.play();
    } else {
      soundLoop.pause();
    }
  }, [isPlaying, soundLoop]);
  return /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsPlaying(!isPlaying),
    className: "UiCtrl fixed right-2 bottom-2 opacity-70"
  }, /* @__PURE__ */ React.createElement(SoundIcon, {
    isPlaying,
    childRef: soundBars,
    className: "md:w-[40px] w-[40px]"
  }));
}
function SoundIcon({ className, isPlaying }) {
  return /* @__PURE__ */ React.createElement(Svg, {
    className: `Icon fill-white bg-black rounded-full p-2 Sound ${className}`
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 28.5 28.5",
    xmlSpace: "preserve"
  }, /* @__PURE__ */ React.createElement("g", {
    id: "Group_445",
    transform: "translate(-6543.762 15810.522)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6558.5-15803.7c-.6-.3-1.4-.2-1.9.3l-3.5 3c-.1.1-.3.2-.4.2h-3.2c-1 0-1.8.8-1.8 1.8v4.6c0 1 .8 1.8 1.8 1.8h3.2c.2 0 .3.1.4.2l3.5 3c.3.3.7.4 1.1.4.3 0 .5-.1.7-.2.6-.3 1-.9 1-1.6v-11.7c.1-.9-.3-1.6-.9-1.8z"
  }), /* @__PURE__ */ React.createElement("g", {
    className: isPlaying ? " scale-y-100 transition-transform" : "scale-y-0 transition-transform"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6561.6-15799.3c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1c1.1 1.1 1.1 2.9 0 4-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 1.7-1.8 1.7-4.5 0-6.2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6567.6-15800c-.5-1.2-1.2-2.3-2.1-3.2-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1c3.2 3.2 3.2 8.4 0 11.7-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.7-2.9 3.5-7 2.1-10.7z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6563.5-15801.3c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1c2.2 2.2 2.2 5.7 0 7.8-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.8-2.8 2.8-7.2 0-10z"
  })))));
}

// app/c/sh/HeroText.jsx
init_react();
var import_react15 = require("react");
var import_gsap9 = __toESM(require("gsap"));
function HeroText({ isIn }) {
  const textRef = (0, import_react15.useRef)(null);
  const secTextRef = (0, import_react15.useRef)(null);
  const thirdTextRef = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => {
    import_gsap9.default.set(textRef.current.children, {
      y: "300%",
      autoAlpha: 0
    });
    import_gsap9.default.set(secTextRef.current.children, {
      y: "300%",
      autoAlpha: 0
    });
    import_gsap9.default.set(thirdTextRef.current, {
      autoAlpha: 0
    });
  }, []);
  (0, import_react15.useEffect)(() => {
    import_gsap9.default.to(textRef.current.children, {
      y: "0%",
      autoAlpha: 1,
      delay: 7,
      duration: 1.2,
      ease: "expo.out",
      stagger: {
        each: 0.1
      }
    });
    import_gsap9.default.to(secTextRef.current.children, {
      y: "0%",
      autoAlpha: 1,
      delay: 7.5,
      duration: 1.2,
      ease: "expo.out",
      stagger: {
        each: 0.1
      }
    });
    import_gsap9.default.to(thirdTextRef.current, {
      autoAlpha: 1,
      delay: 8,
      duration: 1.2
    });
  }, [isIn]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-center flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-center font-display md:mt-0 mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    ref: secTextRef,
    className: "block overflow-hidden xl:text-[3vw] leading-[1.1em]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "INTRODUCING")), /* @__PURE__ */ React.createElement("div", {
    ref: textRef,
    className: "block lg:text-[8vw] md:text-[12vw] text-5xl overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "V"), /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "O"), /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "X"), " ", /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "S"), /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "O"), /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "U"), /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "L"), /* @__PURE__ */ React.createElement("div", {
    className: "inline-block relative"
  }, "S"))), /* @__PURE__ */ React.createElement("p", {
    ref: thirdTextRef,
    className: "font-sans lg:text-xl text-base max-w-[60ch] text-red font-light"
  }, "Breathe life into Avatars that DeFi, with Souls that change your stat gain and impact your adventures in-game."));
}

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/routes/index.jsx
var import_newsletter_signup2 = __toESM(require_newsletter_signup());
var links3 = () => [{ rel: "stylesheet", href: styles_default }];
async function action2({ request }) {
  const formData = await request.formData();
  let email = formData.get("email");
  const sub = await (0, import_newsletter_signup2.subscribeHandler)(email);
  console.log("SUB", sub);
  return { statusCode: sub.statusCode };
}
function Index2() {
  const formData = (0, import_react16.useActionData)();
  const [canScroll, setCanScroll] = (0, import_react17.useState)(false);
  const [preloaderOut, setPreloaderOut] = (0, import_react17.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react17.useState)(0);
  const scrollRef = (0, import_react17.useRef)(null);
  const sliderRef = (0, import_react17.useRef)(null);
  const ctaRef = (0, import_react17.useRef)(null);
  const [soulIndex, setSoulIndex] = (0, import_react17.useState)(0);
  const TSoulIndex = (0, import_react17.useMemo)(() => ({ soulIndex, setSoulIndex }), [soulIndex, setSoulIndex]);
  const [soulIn, setSoulIn] = (0, import_react17.useState)(false);
  const TSoulIn = (0, import_react17.useMemo)(() => ({ soulIn }), [soulIn]);
  const [heroIn, setHeroIn] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => {
    if (preloaderOut) {
      setHeroIn(true);
    }
  }, [preloaderOut]);
  const [buttonIn, setButtonIn] = (0, import_react17.useState)(true);
  (0, import_react17.useEffect)(() => {
    const { ScrollTrigger: ScrollTrigger2 } = require("gsap/dist/ScrollTrigger");
    import_gsap10.default.registerPlugin(ScrollTrigger2);
    ScrollTrigger2.create({
      trigger: scrollRef.current,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self2) => {
        setButtonIn(!self2.isActive);
      }
    });
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Canvas, {
    scrollRef,
    sliderRef,
    ctaRef,
    setCanScroll,
    soulIndex: TSoulIndex,
    setPreloaderOut,
    setIsLoading,
    soulIn: TSoulIn
  }), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Nav, {
    isIn: heroIn
  }), /* @__PURE__ */ React.createElement(Main, {
    canScroll
  }, /* @__PURE__ */ React.createElement(Section, {
    className: "Hero h-screen flex flex-col justify-between content-center"
  }, /* @__PURE__ */ React.createElement(Cont, {
    isIn: heroIn,
    className: "pt-8"
  }, /* @__PURE__ */ React.createElement(HeroText, {
    isIn: heroIn
  })), /* @__PURE__ */ React.createElement(Cont, {
    isIn: heroIn,
    className: "flex justify-center content-center"
  }, /* @__PURE__ */ React.createElement(AMintButton, {
    isIn: buttonIn
  }))), /* @__PURE__ */ React.createElement(Section, {
    className: "Scroll",
    childRef: scrollRef
  }, /* @__PURE__ */ React.createElement(Cont, {
    className: "md:min-h-[200vh] min-h-[400vh] pb-[50vh]"
  }, /* @__PURE__ */ React.createElement(TextBoxes, null))), /* @__PURE__ */ React.createElement(Section, {
    childRef: sliderRef,
    className: "Slider relative h-[300vh]"
  }, /* @__PURE__ */ React.createElement(Slider, {
    id: "slider",
    soulIndex,
    setSoulIndex,
    setSoulIn
  })), /* @__PURE__ */ React.createElement("div", {
    ref: ctaRef
  }, /* @__PURE__ */ React.createElement(Section, {
    id: "info",
    className: "Info bg-gradient-to-t from-white to-transparent via-white py-[10vh]"
  }, /* @__PURE__ */ React.createElement(Cont, null, /* @__PURE__ */ React.createElement(LaunchCta, null, /* @__PURE__ */ React.createElement(MintButton, null))), /* @__PURE__ */ React.createElement(HomeAdditionalCta, {
    className: "mt-[5vh]"
  })), /* @__PURE__ */ React.createElement(Footer, {
    formData
  }))), /* @__PURE__ */ React.createElement(Sound, null)), /* @__PURE__ */ React.createElement(Preloader, {
    isFinished: preloaderOut,
    isLoading
  }));
}

// route:/Users/federicovalla/Documents/Work/fooo/WIP/voxsouls/06dev/f/f0v/app/routes/mint.jsx
var mint_exports = {};
__export(mint_exports, {
  MintUi: () => MintUi,
  default: () => Mint,
  links: () => links4
});
init_react();
var import_react18 = require("react");
var links4 = () => [{ rel: "stylesheet", href: styles_default }];
function Mint() {
  const mintRef = (0, import_react18.useRef)(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MintUi, {
    childRef: mintRef
  }), /* @__PURE__ */ React.createElement(Nav, {
    isMint: true,
    isAbout: true
  }), /* @__PURE__ */ React.createElement(Main, {
    canScroll: true
  }));
}
function MintUi({ childRef }) {
  const [nfts, setNfts] = (0, import_react18.useState)([]);
  const [walletAddress, setWalletAddress] = (0, import_react18.useState)("");
  const [showLoading, setShowLoading] = (0, import_react18.useState)(true);
  const [showConfirmDialog, setShowConfirmDialog] = (0, import_react18.useState)(false);
  const [showWalletNotConnected, setShowWalletNotConnected] = (0, import_react18.useState)(false);
  const [timeoutHandle, setTimeoutHandle] = (0, import_react18.useState)(void 0);
  const selectAll = () => {
    setNfts(nfts.map((v) => {
      var _a;
      return __spreadProps(__spreadValues({}, v), {
        selected: !((_a = v.soul) == null ? void 0 : _a.name) && !v.pending
      });
    }));
  };
  (0, import_react18.useEffect)(() => {
    async function getNfts() {
      try {
        const { address, nfts: nfts2 } = await getCollection();
        console.log("nfts", nfts2);
        setNfts(nfts2);
        setWalletAddress(address);
        setTimeoutHandle(setupPendingPolling(nfts2, (nfts3) => {
          setNfts(nfts3);
        }));
      } catch (e) {
        watchForWallet((nfts2) => {
          setShowWalletNotConnected(false);
          setNfts(nfts2);
        });
        setShowWalletNotConnected(true);
        console.log(e);
      }
      setShowLoading(false);
    }
    getNfts();
    return () => {
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
    };
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Section, {
    childRef,
    className: "MintUi fixed top-0 left-0 w-full h-full py-2 pb-[5vh] pt-[15vh]"
  }, !showWalletNotConnected ? /* @__PURE__ */ React.createElement(Cont, {
    className: "h-full md:w-[90vw] bg-black text-white rounded-xl md:px-12 px-4 pb-12 text-center flex flex-col "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-[55ch]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-red md:text-5xl text-3xl mb-4"
  }, "Select the VOX you want to mint a Soul for."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-between grow"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end border-b mt-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "text-xs uppercase p-4",
    onClick: () => selectAll()
  }, "Select All")), /* @__PURE__ */ React.createElement("div", {
    className: "h-[40vh] overflow-y-scroll mb-8 p-4 flex flex-wrap w-full"
  }, nfts.map((it, i) => /* @__PURE__ */ React.createElement(SoulUi, {
    key: i,
    index: i,
    content: it,
    onSelectionChange: (selected) => {
      var _a;
      it.selected = !((_a = it.soul) == null ? void 0 : _a.name) && !it.pending && selected;
      setNfts(nfts.map((v) => __spreadValues({}, v)));
    }
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ConfirmMintButton, {
    text: "Mint Selected",
    onClick: async () => {
      const selected = nfts.filter((n) => n.selected);
      await mint(selected, walletAddress);
      await setPending(selected, walletAddress);
      setShowConfirmDialog(true);
      setTimeoutHandle(setupPendingPolling(nfts, (nfts2) => {
        setNfts(nfts2);
      }));
    }
  })))) : /* @__PURE__ */ React.createElement(Cont, {
    className: "h-full md:w-[90vw] bg-black text-white rounded-xl md:px-12 px-4 pb-12 text-center flex flex-col grid justify-center place-content-center "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl"
  }, "Please Connect Your Wallet"))), showLoading ? /* @__PURE__ */ React.createElement("div", {
    className: "h-screen w-screen backdrop-brightness-50 fixed left-0 top-0 grid justify-center place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white p-12 uppercase rounded-2xl font-display drop-shadow-md grid justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl"
  }, "Loading..."))) : null, showConfirmDialog ? /* @__PURE__ */ React.createElement("div", {
    className: "h-screen w-screen backdrop-brightness-50 fixed left-0 top-0 grid justify-center place-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white p-12 rounded-2xl drop-shadow-md grid justify-center max-w-xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl text-center font-display  uppercase"
  }, "mint request successful"), /* @__PURE__ */ React.createElement("h4", {
    className: "mt-4"
  }, "Pending indicators will only be visible in this browser. When minting is complete they will disappear."), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "bg-red text-white pt-4 pb-3 md:px-14 mt-8 px-8 sm:px-2 rounded-lg tx-display uppercase font-display md:text-[1.2em] sm:text-[1em] text-[.8em] leading-[.8em]",
    onClick: () => setShowConfirmDialog(false)
  }, "ok"))) : null);
}
function SoulUi({ content, onSelectionChange }) {
  var _a;
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => {
      onSelectionChange(!content.selected);
    },
    className: `relative h-[250px] w-[220px] mb-8 mx-2 ${content.selected || content.pending ? "bg-red" : ""} flex flex-col justify-between flex-row p-6`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-xs mt-1 text-red ${content.selected || content.pending ? "text-light" : ""}`
  }, "#", content.tokenId)), ((_a = content == null ? void 0 : content.soul) == null ? void 0 : _a.name) ? /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-[40px] left-8 grid grid-flow-col items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-12 w-12",
    src: content.soul.image,
    alt: ""
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-black text-[.8em]"
  }, content.soul.name)) : null, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-2xl overflow-hidden"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "",
    src: content.image,
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-xs mt-1 text-red ${content.selected || content.pending ? "text-light" : ""}`
  }, content.name), content.pending ? /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 left-0 h-full w-full backdrop-brightness-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-28 left-10 mx-4 bg-white text-black p-8 h-8 uppercase rounded-2xl font-display drop-shadow-md grid place-content-center"
  }, "pending")) : null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "1582c5c4", "entry": { "module": "/build/entry.client-JLN3OO73.js", "imports": ["/build/_shared/chunk-RRJHIRKI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OKCN27JY.js", "imports": ["/build/_shared/chunk-QP5OPQFV.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-HKYMOV4Y.js", "imports": ["/build/_shared/chunk-I77BM2VD.js", "/build/_shared/chunk-5JL6BMIQ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-TSSPDDW2.js", "imports": ["/build/_shared/chunk-I77BM2VD.js", "/build/_shared/chunk-5JL6BMIQ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/mint": { "id": "routes/mint", "parentId": "root", "path": "mint", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/mint-J3ZKHDBF.js", "imports": ["/build/_shared/chunk-5JL6BMIQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1582C5C4.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/mint": {
    id: "routes/mint",
    parentId: "root",
    path: "mint",
    index: void 0,
    caseSensitive: void 0,
    module: mint_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map

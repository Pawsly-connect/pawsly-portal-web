const keyPem = `-----BEGIN PUBLIC KEY-----
MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAp4uvRaSbiBmB+QYyCHc8
XCsWEqzRICE15w+ljsgdaoGukwHknTn8r9y8iEJiN80ugt8gTTZB/viKpBGV8qCC
OAcgM+uasUJbJYCz0mzB5AUYauFXT66RfbUP9VDJiB/fUPx1drpuam4/4DBupKxE
0XU0HP92RI+aaAJ+NalWb7CnOGK1y+2Yy1EImPFQttsWjkFW3xx7jlifCXEYAAzb
N7/wadCBMmhlkxLrhZ98l2vlLWrfJqAazRp034NgIfm4D3nNNpZ8BnDc3sVizj20
nIz76fZqcnLX51u5uqRBZ1ORSGslLYfqw+53Adqv36a0LmfamVDiYEbsSSVu1AWv
v4cT7gdqXm4Yt53kD3OKjVSPpcr5NnriE+FMbtD36aed6FJkoMhAGZQX/5nr1NyV
FcpqraWtTx8k20GNsss0YSgXoRjUY8L0mgB7PETACv1x6Rug2b7JTaedonm5c4nR
P9mNXfLgB+GXrUMy9/bO2FcINScFt+ojF/l10K+kh03HAgMBAAE=
-----END PUBLIC KEY-----`;

async function hash(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function importPublicKey(pem) {
    const pemHeader = "-----BEGIN PUBLIC KEY-----";
    const pemFooter = "-----END PUBLIC KEY-----";
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    const binaryDerString = atob(pemContents);
    const binaryDer = str2ab(binaryDerString);
    return crypto.subtle.importKey(
        "spki",
        binaryDer,
        {
            name: "RSA-OAEP",
            hash: "SHA-256"
        },
        true,
        ["encrypt"]
    );
}

async function encrypt(message) {
    const publicKey = await importPublicKey(keyPem);
    const msgUint8 = new TextEncoder().encode(JSON.stringify(message));
    const ciphertext = await crypto.subtle.encrypt(
        {
            name: "RSA-OAEP"
        },
        publicKey,
        msgUint8
    );
    return btoa(new Uint8Array(ciphertext));
}

const ciphers = { hash, encrypt }

export default ciphers;

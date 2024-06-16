const keyPem = process.env.REACT_APP_PUBLIC_KEY;

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
  const binaryDerString = atob(pem);
  const binaryDer = str2ab(binaryDerString);
  return crypto.subtle.importKey(
    "spki",
    binaryDer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"],
  );
}

async function encrypt(message) {
  const publicKey = await importPublicKey(keyPem);
  const msgUint8 = new TextEncoder().encode(JSON.stringify(message));
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    msgUint8,
  );
  return btoa(new Uint8Array(ciphertext));
}

const ciphers = { hash, encrypt };

export default ciphers;

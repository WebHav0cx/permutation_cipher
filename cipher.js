function encrypt() {
  const keyInput = document.getElementById("key").value;
  if (!isValidKey(keyInput)) {
    alert(
      "Invalid key. Please enter a valid sequence of digits without repetition."
    );
    return;
  }
  const key = keyInput.split("").map(Number);
  const plaintext = document.getElementById("plaintext").value;

  const blockSize = key.length;
  const ciphertextArray = [];

  for (let i = 0; i < plaintext.length; i += blockSize) {
    const block = plaintext.slice(i, i + blockSize);
    const permutedBlock = new Array(blockSize);

    for (let j = 0; j < block.length; j++) {
      const targetIndex = key[j] - 1; // Adjust for zero-based indexing
      permutedBlock[targetIndex] = block[j];
    }

    ciphertextArray.push(permutedBlock.join(""));
  }

  const ciphertext = ciphertextArray.join("");
  document.getElementById("ciphertext").value = ciphertext;
}

function decrypt() {
  const keyInput = document.getElementById("key").value;
  if (!isValidKey(keyInput)) {
    alert(
      "Invalid key. Please enter a valid sequence of digits without repetition."
    );
    return;
  }
  const key = keyInput.split("").map(Number);
  const ciphertext = document.getElementById("ciphertext").value;

  const blockSize = key.length;
  const plaintextArray = [];
  const inverseKey = new Array(blockSize);

  for (let i = 0; i < blockSize; i++) {
    inverseKey[key[i] - 1] = i;
  }

  for (let i = 0; i < ciphertext.length; i += blockSize) {
    const block = ciphertext.slice(i, i + blockSize);
    const permutedBlock = new Array(blockSize);

    for (let j = 0; j < block.length; j++) {
      const targetIndex = inverseKey[j];
      permutedBlock[targetIndex] = block[j];
    }

    plaintextArray.push(permutedBlock.join(""));
  }

  const plaintext = plaintextArray.join("");
  document.getElementById("plaintext").value = plaintext;
}

function isValidKey(key) {
  const digits = key.split("");
  const uniqueDigits = new Set(digits);
  return (
    digits.length === uniqueDigits.size &&
    digits.every((digit) => !isNaN(digit))
  );
}

# Permutation Cipher Web Application

This is a simple web application that allows users to encrypt and decrypt text using a permutation cipher. Users can specify their own permutation key and input text to see the encrypted or decrypted result.

## Features

- **Encryption**: Encrypts plaintext using a user-defined permutation key.
- **Decryption**: Decrypts ciphertext using the same permutation key.
- **Validation**: Ensures the permutation key is valid (contains unique digits and no non-numeric characters).

## How It Works

A permutation cipher rearranges the characters of the plaintext based on a specified permutation key. For example, if the key is `3142`, the third character in the block will be moved to the first position, the first character will be moved to the second position, and so on.

### Example

- **Plaintext**: `HELLO BOB`
- **Key**: `3142`

**Encryption**:

- First Block: `HELL` -> `LHE`
- Second Block: `O BO` -> `BOO `
- Result: `LHELB BOOB`

**Decryption**:

- First Block: `LHE` -> `HELL`
- Second Block: `BOO ` -> `O BO`
- Result: `HELLO BOB`

## Getting Started

### Prerequisites

To use this web application, you only need a modern web browser.

### Installation

1. Download or clone the repository to your local machine.

```sh
git clone https://github.com/WebHav0cx/permutation_cipher.git
```

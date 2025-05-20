# Nostash

This is a [NIP-07][nip07] compatible extension for signing [Nostr][Nostr] events.

## Features

- Login with Nostr (`getPublicKey`).
- Post Nostr event (`signEvent`).
- Encrypted direct messages (`nip04.encrypt` and `nip04.decrypt`).
- Multiple profiles.

## Installation

Available on [TestFlight](https://testflight.apple.com/join/8TFMZbMs).

<p align="center">
  <a href="https://testflight.apple.com/join/8TFMZbMs">
    <img src="/extras/app-store-badge-small.svg" alt="TestFlight Download" />
  </a>
</p>

## Usage

Click the Nostash extension icon in the Safari toolbar, there should be a default profile with a new, random private key.

Feel free to change the name and edit the key with your personal Nostr key. Create additional profiles as desired. Whichever key profile is selected under Profile is the currently "active" profile for Nostr events.

## Acknowledgements

Thanks to [ursuscamp][ursuscamp] for creating [Nostore][Nostore], which this project was forked by [tyiu][tyiu] at version `1.2.0` (`c8458140e69dd30b35a31043daedcb88872a270e`) and has since been archived.

Thanks to [fiatjaf][fiatjaf] for envisioning Nostr, but also for creating [nostr-tools][nostr-tools] and the [nos2x][nos2x] extension, which was referenced liberally when stumped during development of this extension.

## Privacy

This extension does not collect any user data, or transmit any data over a network connection. All private key data is sequestered in the extension's separate browser storage.

## Development

1. Open the project in Xcode.
2. Open project folder in terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm run watch` to watch and build the necessary extension files.
5. Run `npm run watch-tailwind` to watch and build the pages with tailwinds CSS.
6. After every rebuild, execute Run in Xcode to deploy the latest changes to Safari.

If you do not see the Nostash extension in your Safari toolbar, you need to activate unsigned extensions and Nostash:

1. Safari menu -> Settings -> Advanced -> Show features for web developers.
2. Click the Developer tab in Settings, select Allow unsigned extensions.
3. Click the Extensions tab in Settings, activate Nostash.

[Nostr]: https://github.com/nostr-protocol
[ursuscamp]: https://github.com/ursuscamp
[nostore]: https://github.com/ursuscamp/nostore
[tyiu]: https://github.com/tyiu
[fiatjaf]: https://github.com/fiatjaf
[nip07]: https://github.com/nostr-protocol/nips/blob/master/07.md
[nostr-tools]: https://github.com/nbd-wtf/nostr-tools
[nos2x]: https://github.com/fiatjaf/nos2x

[![wakatime](https://wakatime.com/badge/github/greifmatthias/Mnemosyne.svg?style=flat-square)](https://wakatime.com/badge/github/greifmatthias/Mnemosyne)

# Mnemosyne
>After the Greek goddes of memory.

This is a work in progress SMB mobile client made in react-native (for Android only for now) and Typescript. I made it so I can manage my TrueNas server from my mobile device. I also want to be able to automatically backup files in the future.

## Setup
> Developing on Node18

> `npm i` for installing packages.

> `npm run android` to start dev, I personally test this on a real device because I don't want to figure out how to bridge my machine network with an emulator.

### Other scripts
> `npm run update` for updating all packages to the latest version.

## Roadmap
> Firstly I need to get this app up and running for doing the basic needs.
* Discover services in LAN.
* Save services for quick access. (store/update/delete)
* SMB connect to a service. (sharedfolders, auth, ..)
* Read directory and files.
* Manage directory and files. (move/rename/delete/add folder)
* Download files to device.
* Upload files to service.
* Adding tests *urgh kill me already*

> Later on
* Save services for specific networks?
* Theming. (dark/light/accent colors)
* Add support for other types of network storage?
* Background backup?
* Widget for monitoring?
* Notifications for monitoring?
# EMS DTSU666 ESP32 firmware

Android installer reads `manifest.json` from this folder and downloads the matching ESP32 flash package.

The CI workflow in `ponkuz/emsolis-ai-manager` publishes these binaries after a successful firmware build:

- `bootloader.bin` at `0x1000`
- `partitions.bin` at `0x8000`
- `firmware.bin` at `0x10000`

Recommended board: LilyGO T-CAN485 / TTGO with built-in RS485.

If this folder currently shows only text files, run the `Firmware PlatformIO Build` workflow in the private repository. The workflow will upload the binary files here.

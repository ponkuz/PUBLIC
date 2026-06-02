# EMS DTSU666 ESP32 firmware

Android installer and flashing tools should start from `manifest.json` in this folder. It lists every supported board/inverter package and the exact ESP32 flash offsets.

Recommended first choice: `lilygo_t_can485_foxess` for FoxESS or `lilygo_t_can485_sungrow` for the current Sungrow shadow-mode field test on LilyGO T-CAN485 / TTGO style boards with built-in RS485.

`lilygo_t_can485_sungrow` and `lilygo_t_can485_sungrow_shadow` are passive Sungrow/DTSU666 validation firmware packages. They listen on RS485, simulate what the bridge would answer, compare that with the real meter response, and never drive RS485 TX.

`lilygo_t_can485_sungrow_rx_callback` is a diagnostic Sungrow package for LilyGO boards whose RS485 callback gate behaves inverted. Use it if the normal LilyGO Sungrow package shows zero raw RS485 bytes.

Generic ESP32 DevKit builds require an external RS485 transceiver such as MAX485/ADM2483. Default wiring: TX GPIO17 to DI, RX GPIO16 to RO, GPIO4 to DE/RE, GND to GND.

Full first-time flashing needs all three files:

- `bootloader.bin` at `0x1000`
- `partitions.bin` at `0x8000`
- `firmware.bin` at `0x10000`

If a board was already flashed with the same bootloader and partition table, updating only `firmware.bin` at `0x10000` can be enough, but first install from Android/PC should use the full package.

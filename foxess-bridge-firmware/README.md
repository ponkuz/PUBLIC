# EMS DTSU666 ESP32 firmware

Android installer and flashing tools should start from `manifest.json` in this folder. It lists every supported board/inverter package and the exact ESP32 flash offsets.

Recommended first choice: `lilygo_t_can485_foxess` or `lilygo_t_can485_sungrow` for LilyGO T-CAN485 / TTGO style boards with built-in RS485.

Generic ESP32 DevKit builds require an external RS485 transceiver such as MAX485/ADM2483. Default wiring: TX GPIO17 to DI, RX GPIO16 to RO, GPIO4 to DE/RE, GND to GND.

Full first-time flashing needs all three files:

- `bootloader.bin` at `0x1000`
- `partitions.bin` at `0x8000`
- `firmware.bin` at `0x10000`

If a board was already flashed with the same bootloader and partition table, updating only `firmware.bin` at `0x10000` can be enough, but first install from Android/PC should use the full package.

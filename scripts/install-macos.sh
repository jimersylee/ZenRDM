#!/usr/bin/env bash
set -euo pipefail

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "install-macos only supports macOS." >&2
  exit 1
fi

APP_NAME="${APP_NAME:-ZenRDM}"
DEST_DIR="${DEST_DIR:-/Applications}"
APP_BUNDLE="build/bin/${APP_NAME}.app"
DEST_APP="${DEST_DIR}/${APP_NAME}.app"

wails build "$@"

if [[ ! -d "${APP_BUNDLE}" ]]; then
  echo "Build succeeded, but ${APP_BUNDLE} was not found." >&2
  exit 1
fi

mkdir -p "${DEST_DIR}"
rm -rf "${DEST_APP}"
ditto "${APP_BUNDLE}" "${DEST_APP}"
xattr -dr com.apple.quarantine "${DEST_APP}" 2>/dev/null || true

echo "Installed ${APP_NAME} to ${DEST_APP}"

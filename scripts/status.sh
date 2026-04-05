#!/bin/bash
# Gemini CLI Status Line for Cli-flow

C_CYAN='\033[0;36m'
C_GREEN='\033[0;32m'
C_BLUE='\033[1;34m'
C_RESET='\033[0m'

DIR=$(basename "$(pwd)")
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "no-git")

echo -e "${C_GREEN}Gemini-CLI${C_RESET} | ${C_CYAN}${DIR}${C_RESET} | ${C_BLUE}git:(${BRANCH})${C_RESET} | $(date +%H:%M:%S)"

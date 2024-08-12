#!/bin/bash

pnpm run build 2>&1 | tee build.log

# Check for specific error message
if grep -q "Cannot read properties of undefined (reading 'info')" build.log; then
    echo "astro-pagefind error encountered"
    pnpm run postbuild
fi
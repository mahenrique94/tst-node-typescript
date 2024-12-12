# tst-node-typescript
Playing around Node.js TypeScript integration.

## Running
You can run TypeScript natively in Node.js using the `--experimental-strip-types` flag.

```sh
node --experimental-strip-types ./index.ts
```

### Enum and namespace support
In `v22.7.0` Node support `Enum` and `namespace` using the `--experimental-transform-types` flag.

```sh
node --experimental-strip-types --experimental-transform-types ./index.ts
```

### Caveats
Not will not perform type checks as the regular `tsc` compiler does.

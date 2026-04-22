# TanStack Start - Selective SSG Bug Reproduction

Reproduces: Route-level `ssr: true` is ignored when `defaultSsr: false`.

| Project | `defaultSsr` | Result |
|---------|-------------|--------|
| `ssg-working/` | `true` | Works |
| `ssg-not-working/` | `false` | Broken |

## Quick Test

```bash
# Working version
cd ssg-working && npm run build && PORT=3010 npm run start
# → Open http://localhost:3010/ssg-page → Page loads with data

# Broken version
cd ssg-not-working && npm run build && PORT=3011 npm run start
# → Open http://localhost:3011/ssg-page → "Something went wrong!"
#   Console shows:
#   - Failed to load resource: the server responded with a status of 404 (Not Found)
#     __tsr/staticServerFnCache/xxx.json
#   - SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

## Bug

When `defaultSsr: false`, route-level `ssr: true` is ignored:
- `staticServerFnCache/*.json` is **not** generated
- Browser gets 404 + `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

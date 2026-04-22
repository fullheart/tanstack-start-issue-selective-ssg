# SSG Not Working

Broken because `defaultSsr: false` in `start.ts`.

## Test

```bash
npm run build && PORT=3011 npm run start
```

* **Browser:** Open http://localhost:3011/ssg-page → "Something went wrong!"
  Console errors:
  ```
  Failed to load resource: the server responded with a status of 404 (Not Found)
    __tsr/staticServerFnCache/xxx.json

  SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  ```
* **Curl:**
  ```bash
  curl -s http://localhost:3011/ssg-page | grep -o 'ssr:[^,]*'
  # → ssr:!1 (BUG: route-level ssr:true ignored)
  ```

## Bug

Route-level `ssr: true` is ignored when `defaultSsr: false`.

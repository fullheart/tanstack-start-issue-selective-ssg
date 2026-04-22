# SSG Working

Works because `defaultSsr: true` in `start.ts`.

## Test

```bash
npm run build && PORT=3010 npm run start
```

* **Browser:** Open http://localhost:3010/ssg-page → Page shows data
* **Curl:**
  ```bash
  curl -s http://localhost:3010/ssg-page | grep -o 'ssr:[^,]*'
  # → ssr:!0
  ```

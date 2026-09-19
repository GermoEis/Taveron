# Taveron

Taveron on ettevõtte veebileht, mis tutvustab praktilisi digilahendusi, tööprotsesside automatiseerimist, andmelahendusi ja sisemisi tööriistu.

## Käivitamine

Vajalik on Node.js 20.19 või uuem (või 22.12+).

```powershell
npm.cmd install
npm.cmd run dev
```

Vite näitab terminalis lokaalse aadressi, tavaliselt `http://localhost:5173`.

## Tootmisversiooni ehitamine

```powershell
npm.cmd run build
npm.cmd run preview
```

Valmis ehitus luuakse kausta `dist`.

## Sisu muutmine

- Lehe struktuur ja vaated: `src/App.jsx`
- Jagatud eestikeelne sisu: `src/data/content.js`
- Projektinäited ja teenuste kirjeldused: `src/data/projects.js`
- Kujundus: `src/styles.css`
- Avalikud failid ja staatilised varad: `public`

## GitHub Pages

`main` harusse push'imisel ehitab ja avaldab `.github/workflows/deploy-pages.yml` Taveroni veebilehe GitHub Pagesi aadressile:

`https://germoeis.github.io/Taveron/`

GitHubi hoidla seadetes peab **Settings → Pages → Source** väärtus olema **GitHub Actions**. Workflow määrab Vite'i baasrajaks `/Taveron/` ning lisab Formspree endpointi build-keskkonna kaudu.

Lehel kasutatavad pildid ja failid arvestavad Vite'i `BASE_URL` väärtusega. Seetõttu töötavad lingid nii custom domeenil kui ka GitHub Pagesi repo alamteel.

## Turvapäised

Leht kasutab HTML-is CSP-d ja ranget referrer-poliitikat. GitHub Pages ei võimalda repo kaudu määrata kõiki HTTP vastusepäiseid, seega peab hoidla seadetes olema sisse lülitatud **Enforce HTTPS**.

Kui leht liigub pöördproksi või muu päiseid toetava majutuse taha, määra seal lisaks järgmised HTTP vastusepäised:

```text
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://formspree.io; form-action 'none'; frame-src 'none'; frame-ancestors 'none'; worker-src 'none'; manifest-src 'self'; media-src 'self'; upgrade-insecure-requests
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```

`frame-ancestors`, HSTS, `X-Content-Type-Options`, `X-Frame-Options` ja `Permissions-Policy` vajavad HTTP vastusepäist ning neid ei saa GitHub Pagesis `<meta>` elemendiga usaldusväärselt asendada.

## Enne avaldamist

Kontrolli, et GitHub Actionsi build kasutab õiget Formspree endpointi.

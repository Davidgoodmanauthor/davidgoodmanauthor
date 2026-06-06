# David Goodman Author — Static Website (portable, free-host ready)

This is a **100% static** version of DavidGoodmanAuthor.com. It needs **no backend, no
database, no login, and no paid hosting**. It's just HTML, CSS, JavaScript, and images,
so you can host it free on GitHub Pages, Netlify, or Vercel.

---

## 1. Which folder to download / upload

Download and upload **this entire folder**:

```
DavidGoodmanAuthor-static-site/
```

It contains everything the site needs:

```
DavidGoodmanAuthor-static-site/
├─ index.html                 (Home)
├─ about.html
├─ books.html
├─ works-in-progress.html
├─ the-whisperer.html
├─ media.html
├─ news.html
├─ contact.html
├─ README.md                  (this file)
└─ assets/
   ├─ css/styles.css          (all design / colors / fonts)
   ├─ js/data.js              (⭐ ALL your editable text, links, statuses, image paths)
   ├─ js/site.js              (page rendering — normally no need to touch)
   └─ images/                 (put your photos here)
```

When a host asks for the folder to publish, point it at this folder. The home page **must
be named `index.html`** (it already is).

---

## 2. How to preview the site locally (before uploading)

**Easiest:** double-click `index.html` — it opens in your browser. (Navigation between
pages works fine this way.)

**If images or fonts act up when double-clicking**, run a tiny local server instead:

- If you have Python installed, open a terminal in this folder and run:
  ```
  python3 -m http.server 8000
  ```
  Then visit **http://localhost:8000** in your browser.

---

## 3. How to update TEXT later

Open **`assets/js/data.js`** in any text editor (Notepad, TextEdit, VS Code).
Edit the words between the quotation marks `" "`, save the file, and refresh the page.

Example — change the homepage tagline:
```js
hero_tagline: "Your new tagline here.",
```

That one file controls every page's text.

---

## 4. How to REPLACE / ADD images later

1. Put the image file into **`assets/images/`** (jpg or png, lowercase name, no spaces).
2. In **`assets/js/data.js`**, set the matching path. Examples:
   ```js
   // Author photo (home page)
   author_photo: "assets/images/david.jpg",

   // Book cover
   cover: "assets/images/echoes-cover.jpg",

   // A gallery (several images)
   gallery: ["assets/images/echoes1.jpg", "assets/images/echoes2.jpg"],
   ```
Leave a path empty (`""`) to show a neutral placeholder instead.

---

## 5. How to ADD purchase links / buttons later

In **`assets/js/data.js`**, find the book's `purchase_links` and paste your URL:
```js
purchase_links: [
  { label: "Amazon Paperback", url: "https://www.amazon.com/your-paperback" },
  { label: "Amazon Hardcover", url: "" },   // empty = button hidden
  { label: "Kindle", url: "https://www.amazon.com/your-kindle" }
],
audiobook_link: "https://...",   // shows an "Audiobook" button when filled
trailer_link:   "https://...",   // shows a "Watch Trailer" button when filled
```
A button only appears when its `url` is not empty (so you never show a dead link).

To add a **new book**, copy an entire `{ ... }` block inside `books: [ ]` and edit it.
Valid **status labels**: `Published`, `Available Now`, `In Progress`, `Querying Agents`,
`Drafting`, `Revising`, `Coming Soon`, `On Hold`.

---

## 6. Host it FREE — pick ONE option

### Option A — Netlify (easiest, drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the **DavidGoodmanAuthor-static-site** folder onto the page.
3. It publishes instantly at a temporary `*.netlify.app` address.
4. Add your domain in **Site settings → Domain management** (see section 7).

### Option B — Vercel
1. Create a free account at https://vercel.com
2. "Add New → Project". You can drag-drop or connect a GitHub repo.
3. Framework preset: **Other** (no build command, output = the folder root).
4. Deploy, then add your domain under **Settings → Domains**.

### Option C — GitHub Pages
1. Create a free GitHub account, make a new repository (e.g. `davidgoodman-site`).
2. Upload the **contents** of this folder to the repo (so `index.html` is at the repo root).
3. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` branch and `/ (root)`, save.
4. Your site appears at `https://<username>.github.io/<repo>/`.
5. To use your custom domain, add a file named **`CNAME`** (no extension) at the repo root
   containing one line: `DavidGoodmanAuthor.com` — then follow section 7.

---

## 7. Connect your Porkbun domain (DavidGoodmanAuthor.com)

First publish with one host above. Each host shows you the exact DNS target to use—
**always use the values your host gives you**; the ones below are typical examples.

### At Porkbun
1. Log in at porkbun.com → **Account → Domain Management**.
2. Click **Details** next to `DavidGoodmanAuthor.com` → open **DNS Records**.
3. Delete any default "parking" A/ALIAS records on the root.
4. Add the records your host provides. Typical setups:

**Netlify**
| Type  | Host / Name | Value / Target                  |
|-------|-------------|---------------------------------|
| A     | `@` (root)  | `75.2.60.5`                     |
| CNAME | `www`       | `<your-site>.netlify.app`       |

**Vercel**
| Type  | Host / Name | Value / Target                  |
|-------|-------------|---------------------------------|
| A     | `@` (root)  | `76.76.21.21`                   |
| CNAME | `www`       | `cname.vercel-dns.com`          |

**GitHub Pages**
| Type  | Host / Name | Value / Target                  |
|-------|-------------|---------------------------------|
| A     | `@` (root)  | `185.199.108.153`               |
| A     | `@` (root)  | `185.199.109.153`               |
| A     | `@` (root)  | `185.199.110.153`               |
| A     | `@` (root)  | `185.199.111.153`               |
| CNAME | `www`       | `<username>.github.io`          |

5. Save. DNS can take a few minutes up to ~24 hours to take effect.
6. Back in your host's dashboard, add `DavidGoodmanAuthor.com` (and `www.`) as a custom
   domain so it knows to serve your site for that name.

---

## 8. HTTPS / SSL

You do **not** need to buy or configure SSL manually. Netlify, Vercel, and GitHub Pages
all issue a **free automatic SSL certificate** once your domain's DNS is pointing
correctly (look for an "HTTPS / Enable SSL" toggle — it's usually automatic). After it's
active, your site loads on `https://DavidGoodmanAuthor.com` and redirects http → https.

---

## 9. Admin panel (Decap CMS) — edit your site with a password, no coding

Your site includes a free, password-protected admin panel at **`/admin/`** powered by
**Decap CMS**. You log in, click a section, type text or upload images, hit Publish, and
the changes save back into your site automatically. It works on free Netlify hosting
because it saves edits to your GitHub repo (no server needed).

> Important: the admin panel needs your site connected to **GitHub + Netlify** (the
> drag‑and‑drop deploy in section 6 does NOT support the login). Use these steps instead.

### A. Put the site on GitHub
1. Create a free GitHub account and a new repository (e.g. `davidgoodman-site`).
2. Upload the **contents** of this folder so that `index.html`, `admin/`, `data/`, and
   `assets/` are at the **root** of the repo.
   - Easiest: GitHub → your repo → **Add file → Upload files** → drag everything in.
3. Note your repo's default branch name (`main` or `master`). The file
   `admin/config.yml` is set to `main` — if yours is `master`, change that one line.

### B. Deploy on Netlify FROM GitHub
1. Netlify → **Add new site → Import an existing project → GitHub** → pick your repo.
2. Build command: leave **empty**. Publish directory: **`.`** (the root). Click **Deploy**.

### C. Turn on login (Netlify Identity + Git Gateway)
1. In your Netlify site: **Site configuration → Identity → Enable Identity.**
2. **Identity → Registration** → set to **Invite only** (so only you can log in).
3. **Identity → Services → Git Gateway → Enable Git Gateway.**
4. **Identity → Invite users** → enter **davidgoodmanauthor@gmail.com** → send.
5. Check that email → click the invite link → set a password. (If the link lands on the
   homepage, the site will open the signup automatically.)

### D. Use it
- Go to **https://YOUR-SITE.netlify.app/admin/** (or **https://DavidGoodmanAuthor.com/admin/**).
- Log in with the email + password you just set.
- You'll see sections: **Pages & Settings, Books, Projects, News**. Click one, edit text,
  upload images, and press **Publish**. Your live site updates in about a minute.
- Uploaded images are stored automatically in `assets/images/uploads/`.

### Notes about the admin panel
- Edits made in `/admin` are saved to the JSON files in the `data/` folder in your repo.
- The website reads those JSON files, so what you publish is what visitors see.
- The `assets/js/data.js` file is now only a **fallback** for local double‑click preview;
  once you're on Netlify, always edit through `/admin` (or the `data/*.json` files).
- To preview locally with live data, run a local server (section 2) — opening files
  directly from disk uses the fallback defaults instead of the JSON.

---

## 10. Notes

- The **Contact** page uses a simple `mailto:` link — clicking it opens the visitor's own
  email app addressed to **davidgoodmanauthor@gmail.com**. No server processing needed.
- Nothing here is fabricated — no fake awards, reviews, agents, or sales. Statuses like
  "Querying Agents" are editable in `data.js`.
- This static folder is fully separate from the original app; you can host it anywhere.

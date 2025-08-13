# CI Dashboard - File Structure

```
CI Dashboard/
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── ci-dashboard-demo/
    ├── .git/
    │   ├── hooks/
    │   │   ├── applypatch-msg.sample
    │   │   ├── commit-msg.sample
    │   │   ├── fsmonitor-watchman.sample
    │   │   ├── post-update.sample
    │   │   ├── pre-applypatch.sample
    │   │   ├── pre-commit.sample
    │   │   ├── pre-merge-commit.sample
    │   │   ├── pre-push.sample
    │   │   ├── pre-rebase.sample
    │   │   ├── pre-receive.sample
    │   │   ├── prepare-commit-msg.sample
    │   │   ├── push-to-checkout.sample
    │   │   ├── sendemail-validate.sample
    │   │   └── update.sample
    │   ├── info/
    │   │   └── exclude
    │   ├── logs/
    │   │   ├── refs/
    │   │   │   ├── heads/
    │   │   │   │   └── main
    │   │   │   └── remotes/
    │   │   │       └── origin/
    │   │   │           └── HEAD
    │   │   └── HEAD
    │   ├── objects/
    │   │   ├── info/
    │   │   └── pack/
    │   │       ├── pack-f74f00a21c56a290e7bfcbce7f952e6f9f210252.idx
    │   │       ├── pack-f74f00a21c56a290e7bfcbce7f952e6f9f210252.pack
    │   │       └── pack-f74f00a21c56a290e7bfcbce7f952e6f9f210252.rev
    │   ├── refs/
    │   │   ├── heads/
    │   │   │   └── main
    │   │   ├── remotes/
    │   │   │   └── origin/
    │   │   │       └── HEAD
    │   │   └── tags/
    │   ├── config
    │   ├── description
    │   ├── HEAD
    │   ├── index
    │   └── packed-refs
    └── README.md
```

## Project Overview

This appears to be a **Next.js** project with the following key characteristics:

### Main Project Files
- **Next.js Configuration**: `next.config.js`
- **Package Management**: `package.json`, `package-lock.json`
- **Styling**: `tailwind.config.js`, `postcss.config.js`
- **App Directory**: Contains the main application files (`layout.js`, `page.js`, `globals.css`)

### Subdirectory
- **ci-dashboard-demo/**: A Git repository subdirectory containing only a README.md file and Git metadata

### Technologies Identified
- **Next.js** (React framework)
- **Tailwind CSS** (utility-first CSS framework)
- **PostCSS** (CSS processing tool)

The project structure follows Next.js 13+ App Router conventions with the `app/` directory containing the main application components.

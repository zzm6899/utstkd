# UTS Taekwondo — Deployment Guide

## Architecture Overview

```
GitHub Push → GitHub Actions → Docker Image (GHCR) → TrueNAS SSH Deploy
```

## Local Development

```bash
npm install
npm run dev           # http://localhost:3000
# Edit site content at http://localhost:3000/admin
```

## Production Build

```bash
npm run build         # outputs to ./dist
npm run preview       # preview production build at :4173
```

## Docker — Local Build & Run

```bash
# Build and run locally
docker compose -f docker-compose.build.yml up --build -d

# View logs
docker compose -f docker-compose.build.yml logs -f

# Stop
docker compose -f docker-compose.build.yml down
```

---

## GitHub Actions CI/CD Setup

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: UTS Taekwondo website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/utstkd.git
git push -u origin main
```

### 2. Configure GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|--------|-------|
| `TRUENAS_HOST` | IP or hostname of your TrueNAS server (e.g. `192.168.1.100`) |
| `TRUENAS_USER` | SSH username on TrueNAS |
| `TRUENAS_SSH_KEY` | Private SSH key (generate with `ssh-keygen -t ed25519`) |
| `TRUENAS_PORT` | SSH port (default: `22`) |
| `DEPLOY_PATH` | Path to docker-compose.yml on TrueNAS (e.g. `/mnt/tank/docker/utstkd`) |

Add as **Variables** (not secrets):

| Variable | Value |
|----------|-------|
| `SITE_URL` | Your site URL (e.g. `https://utstkd.yourdomain.com`) |

### 3. Enable GitHub Packages (GHCR)

The Docker image is pushed to GitHub Container Registry (`ghcr.io`).
- The `GITHUB_TOKEN` is automatically available — no extra setup needed.
- Make the package **public** in repo → Packages settings if desired.

---

## TrueNAS Deployment Setup

### 1. SSH Access

On TrueNAS, enable SSH in **System → Services → SSH**.

Generate an SSH key pair on your local machine:
```bash
ssh-keygen -t ed25519 -C "github-actions@utstkd"
```

Add the **public key** to `/root/.ssh/authorized_keys` (or the deploy user's `~/.ssh/authorized_keys`) on TrueNAS.

Add the **private key** as the `TRUENAS_SSH_KEY` GitHub secret.

### 2. Create Deploy Directory on TrueNAS

```bash
mkdir -p /mnt/tank/docker/utstkd
```

Copy `docker-compose.yml` to that directory:
```bash
scp docker-compose.yml truenas:/mnt/tank/docker/utstkd/
```

### 3. Set Environment Variables on TrueNAS

Create `/mnt/tank/docker/utstkd/.env`:
```bash
PORT=80
# Or a different port if 80 is taken
```

### 4. Pull and Run Manually (First Time)

```bash
# On TrueNAS, log into GHCR
echo $GITHUB_PAT | docker login ghcr.io -u YOURUSERNAME --password-stdin

# Pull and start
docker compose -f /mnt/tank/docker/utstkd/docker-compose.yml pull
docker compose -f /mnt/tank/docker/utstkd/docker-compose.yml up -d
```

### 5. TrueNAS Custom App (Alternative to SSH deploy)

In TrueNAS Scale, you can also use **Apps → Custom App**:
- Image: `ghcr.io/YOURUSERNAME/utstkd:latest`
- Port mapping: `80:80`
- Restart policy: `Unless stopped`

---

## Editing Website Content (No Coding Required)

Visit `http://YOUR-SERVER-IP/admin` to open the visual website editor.

- Change text, schedules, pricing, and committee info
- Changes are saved in the browser's storage
- Click **Save Changes** to persist

> **Note:** Content saved via the admin panel is stored locally in the browser. For production sites, consider upgrading to a backend/database solution.

---

## Workflow Summary

Every `git push` to `main`:
1. TypeScript check + lint
2. Vite production build
3. Docker multi-arch image built and pushed to GHCR
4. SSH into TrueNAS, pull new image, restart container

Pull requests only run steps 1-2 (no deployment).

# Vercel Deployment

This project is configured for deployment on Vercel.

## Deployment Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```

3. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Import the repository on [vercel.com](https://vercel.com)
   - Vercel will automatically detect Next.js and configure the build

## Environment Variables

If you have any environment variables, add them in the Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any `.env` variables needed for production

## Build Configuration

The project uses the following build settings:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Auto-Deployment

Once connected to GitHub, Vercel will:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Automatically invalidate cache when needed

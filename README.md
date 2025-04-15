# Next.js Cloudflare Template

A template for deploying Next.js applications to Cloudflare Pages with GitHub Actions CI/CD.

## Features

- Next.js with App Router
- TypeScript
- Tailwind CSS
- API Routes
- Cloudflare Pages deployment
- GitHub Actions CI/CD

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This template is configured to deploy to Cloudflare Pages using GitHub Actions.

### Required Secrets

To deploy to Cloudflare Pages, you need to add the following secrets to your GitHub repository:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### How to obtain Cloudflare credentials

#### Cloudflare API Token

1. Log in to your Cloudflare dashboard
2. Go to "My Profile" > "API Tokens"
3. Click "Create Token"
4. Select "Edit Cloudflare Workers" template
5. Under "Account Resources", select your account and set permissions to "Edit"
6. Under "Zone Resources", select "All zones" and set permissions to "Edit"
7. Click "Continue to summary" and then "Create Token"
8. Copy the token and add it as a secret in your GitHub repository

#### Cloudflare Account ID

1. Log in to your Cloudflare dashboard
2. Go to "Workers & Pages"
3. Your Account ID is displayed in the right sidebar or in the URL (e.g., `https://dash.cloudflare.com/<account-id>/workers`)
4. Copy the Account ID and add it as a secret in your GitHub repository

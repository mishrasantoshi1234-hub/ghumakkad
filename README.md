# GHUMAKKAD — Your Intelligent Travel Companion

This is the updated full-stack project. It keeps the existing React website and adds secure server-side Gemini AI endpoints for the travel chatbot and itinerary generator.

## What is included

- Existing GHUMAKKAD website and destination content
- AI chat endpoint: `POST /api/chat`
- AI itinerary endpoint: `POST /api/plan-trip`
- Netlify Functions for both endpoints
- Netlify redirects so the existing frontend API calls continue to work
- API-key handling on the server only (the key is not placed in browser code)

## Important: one-time publishing setup is still required

I can prepare and check the project files, but I cannot sign in to your Netlify or Google account or publish to your personal Netlify site from this chat. A person with access to those accounts must complete the steps below. Do not share passwords or API keys in chat.

### Publish on Netlify

1. Extract this ZIP on your computer.
2. Create a private GitHub repository and upload the extracted project files to it. Keep `.env` files and API keys out of the repository.
3. In Netlify, choose **Add new site → Import an existing project** and connect that GitHub repository.
4. Netlify should read the included `netlify.toml`. Confirm these settings if asked:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
5. Create a Gemini API key using Google's official AI Studio account flow.
6. In Netlify, open **Site configuration → Environment variables** and add:
   - Name: `GEMINI_API_KEY`
   - Value: your Gemini API key
   Make sure it is available to Functions. Never put this key in `src/`, HTML, or frontend JavaScript.
7. Trigger a fresh deploy after adding the environment variable.
8. Test the AI chatbot and itinerary generator on the deployed website.

## Run locally (optional)

Prerequisite: Node.js 20.19+ (Node 22 recommended).

```bash
npm install
```

Create a local `.env` file containing:

```env
GEMINI_API_KEY=your_private_key_here
```

Then run:

```bash
npm run dev
```

Do not upload `.env` to GitHub or share its contents.

## Troubleshooting

- If the site loads but AI buttons fail, check the Netlify deploy log and the Functions tab.
- If the function says the AI service is not configured, check that `GEMINI_API_KEY` exists in Netlify's environment variables and is available to Functions; then redeploy.
- If the model request fails, check that the API key is active and the Google AI service is available to the account.

## AI model

The server functions use Google's stable Gemini 3.8 Flash model (`gemini-3.8-flash`).

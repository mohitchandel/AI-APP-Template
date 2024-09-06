# AI APP Template
This project is a comprehensive AI application template featuring a landing page and a dashboard with various AI-powered services. It's built using Next.js and tRPC, with Supabase for database management and Clerk for authentication.

## Features

- Landing Page: Introduces users to the AI services offered.

- Dashboard: A central hub for accessing various AI tools.
  
  ### - AI Services:

    - Text-to-Speech
    - Voice Cloning
    - Music Generation
    - Story Generation


- Authentication: Powered by Clerk
- Database: Managed by Supabase

## Prerequisites
Before you begin, ensure you have the following installed:

Node.js (LTS version recommended)

npm or yarn

### Setup

#### 1. Clone the repository:
```bash
git clone https://github.com/mohitchandel/ai-app-template.git
cd ai-template-project
```

#### 2. Install dependencies:

`npm install or yarn install`

#### 3. Set up environment variables:

Create a .env.local file in the root directory and add the following variables:
```plaintext
# Supabase keys
SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

# Clerk variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

Replace your_* with your actual Supabase and Clerk credentials.

#### 4. Run the development server:

`npm run dev or yarn dev`

Open http://localhost:3000 in your browser to see the application.

### Project Structure

- /pages: Contains the main pages of the application
- /components: Reusable React components
- /server: API routes for tRPC
- /supabase: Supabase client


#### Contributing
Contributions are welcome! Please feel free to submit a Pull Request.


#### credits
- UI : [Shadcn UI](https://ui.shadcn.com/)
- Components : [shadcnblocks](https://www.shadcnblocks.com/)
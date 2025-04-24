<script>
  import "../app.css";
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  export let title = 'Break the glass ceiling';

  injectAnalytics({ mode: dev ? 'development' : 'production' });
  injectSpeedInsights();
</script>

<div>
  <Navbar />
  <slot/>
  <Footer />
</div>

<head>
  <title>{title}</title>
  
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
</head>
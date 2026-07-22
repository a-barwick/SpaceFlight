<script lang="ts">
  import { page } from '$app/state';

  const links = [
    { href: '/companies/spacex', label: 'Company' },
    { href: '/vehicles/starship', label: 'Vehicle' },
    { href: '/missions/starship-flight-5', label: 'Mission 001' }
  ];
</script>

<a class="skip-link" href="#main-content">Skip to content</a>
<header class="site-header">
  <a class="wordmark" href="/" aria-label="SpaceFlight home">
    <span>SPACE</span><span class="wordmark-outline">FLIGHT</span>
  </a>
  <nav aria-label="Primary navigation">
    {#each links as link}
      <a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
        {link.label}
      </a>
    {/each}
  </nav>
</header>

<script lang="ts">
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.company.name} — SpaceFlight</title>
  <meta name="description" content={data.company.synopsis} />
  <link rel="canonical" href="https://starships.blog/companies/spacex/" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="SpaceFlight" />
  <meta property="og:title" content={`${data.company.name} — SpaceFlight`} />
  <meta property="og:description" content={data.company.synopsis} />
  <meta property="og:url" content="https://starships.blog/companies/spacex/" />
  <meta property="og:image" content="https://starships.blog/media/flight-5-catch.webp" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="context-page">
  <Breadcrumbs items={[{ label: 'Index', href: '/' }, { label: data.company.name }]} />
  <header class="context-hero">
    <div>
      <p class="eyebrow">Company · Founded {data.company.founded}</p>
      <h1>{data.company.name}</h1>
    </div>
    <p class="context-dek">{data.company.synopsis}</p>
  </header>
  <section class="context-significance">
    <p class="eyebrow">Why it matters</p>
    <p>{data.company.significance}</p>
  </section>
  <section class="record-list" aria-labelledby="vehicles-title">
    <div class="record-list-heading">
      <p class="eyebrow">Archive index</p>
      <h2 id="vehicles-title">Vehicles</h2>
    </div>
    {#each data.vehicles as vehicle, index}
      <a href={`/vehicles/${vehicle.slug}`} class="record-row">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <strong>{vehicle.name}</strong>
        <span>{vehicle.publicType}</span>
        <span>View record →</span>
      </a>
    {/each}
  </section>
</div>

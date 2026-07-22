<script lang="ts">
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.vehicle.name} — SpaceFlight</title>
  <meta name="description" content={data.vehicle.synopsis} />
</svelte:head>

<div class="context-page vehicle-page">
  <Breadcrumbs
    items={[
      { label: 'Index', href: '/' },
      { label: data.company.name, href: `/companies/${data.company.slug}` },
      { label: data.vehicle.name }
    ]}
  />
  <header class="context-hero">
    <div>
      <p class="eyebrow">{data.vehicle.publicType} · {data.vehicle.status}</p>
      <h1>{data.vehicle.name}</h1>
    </div>
    <p class="context-dek">{data.vehicle.synopsis}</p>
  </header>
  <div class="vehicle-schematic" aria-hidden="true">
    <span>STAGE 02</span><i></i><span>STAGE 01</span>
  </div>
  <section class="context-significance">
    <p class="eyebrow">Why it matters</p>
    <p>{data.vehicle.significance}</p>
  </section>
  <section class="record-list" aria-labelledby="missions-title">
    <div class="record-list-heading">
      <p class="eyebrow">Flight record</p>
      <h2 id="missions-title">Selected missions</h2>
    </div>
    {#each data.missions as mission}
      <a href={`/missions/${mission.slug}`} class="record-row">
        <span>{String(mission.sequence).padStart(2, '0')}</span>
        <strong>{mission.name}</strong>
        <span>{mission.date}</span>
        <span>Open record →</span>
      </a>
    {/each}
  </section>
</div>

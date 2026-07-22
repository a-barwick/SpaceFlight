<script lang="ts">
  import type { Media } from '$lib/content';

  export let media: Media;
  export let hero = false;
  export let index = 1;
</script>

<figure class:media-hero={hero} class="media-frame">
  <div class="media-visual" class:media-placeholder={media.treatment === 'placeholder'}>
    <span class="media-index">SF—{String(index).padStart(3, '0')}</span>
    {#if media.treatment === 'asset' && media.src}
      <img
        src={media.src}
        alt={media.alt}
        loading={hero ? 'eager' : 'lazy'}
        fetchpriority={hero ? 'high' : 'auto'}
        decoding="async"
      />
      <span class="media-status">Documentary record<br />13 OCT 2024</span>
    {:else}
      <div class="media-mark" aria-hidden="true"><i></i><i></i><i></i></div>
      <span class="media-status">Image pending<br />rights clearance</span>
    {/if}
  </div>
  <figcaption>
    <span>{media.caption}</span>
    {#if media.credit}
      <span class="media-credit">
        {media.credit}
        {#if media.licenseUrl}
          · <a href={media.licenseUrl} rel="license noreferrer">{media.license}</a>
        {/if}
        {#if media.sourceUrl}
          · <a href={media.sourceUrl} rel="noreferrer">Source ↗</a>
        {/if}
      </span>
    {/if}
  </figcaption>
</figure>

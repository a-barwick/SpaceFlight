<script lang="ts">
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import MediaFrame from '$lib/components/MediaFrame.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const displayDate = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${data.mission.date}T00:00:00Z`));

  function sourceNumber(sourceId: string) {
    return data.mission.sources.findIndex(({ id }) => id === sourceId) + 1;
  }
</script>

<svelte:head>
  <title>{data.mission.name} · {data.vehicle.name} — SpaceFlight</title>
  <meta name="description" content={data.mission.dek} />
</svelte:head>

<article class="mission-page">
  <div class="mission-topline">
    <Breadcrumbs
      items={[
        { label: data.company.name, href: `/companies/${data.company.slug}` },
        { label: data.vehicle.name, href: `/vehicles/${data.vehicle.slug}` },
        { label: data.mission.name }
      ]}
    />
    <span>SF / M—001</span>
  </div>

  <header class="mission-hero">
    <div class="mission-identity">
      <p class="eyebrow">{data.mission.publicType} · Record 001</p>
      <h1>Flight <span>5</span></h1>
      <p class="mission-dek">
        {data.mission.dek}{#each data.mission.dekCitations as citation}<sup
            ><a
              href={`#source-${sourceNumber(citation.sourceId)}`}
              aria-label={`Source ${sourceNumber(citation.sourceId)}`}
              >{sourceNumber(citation.sourceId)}</a
            ></sup
          >{/each}
      </p>
    </div>
    <dl class="mission-meta">
      <div>
        <dt>Date</dt>
        <dd>{displayDate}</dd>
      </div>
      <div>
        <dt>Origin</dt>
        <dd>{data.mission.location}</dd>
      </div>
      <div>
        <dt>Outcome</dt>
        <dd><span class="status-dot"></span>{data.mission.outcome.label}</dd>
      </div>
    </dl>
  </header>

  <MediaFrame media={data.mission.media[0]} hero index={1} />

  <section class="mission-significance" aria-labelledby="significance-title">
    <p class="eyebrow">Historical significance</p>
    <h2 id="significance-title">A launch tower<br />became a landing site.</h2>
    <p>
      {data.mission.significance}{#each data.mission.significanceCitations as citation}<sup
          ><a
            href={`#source-${sourceNumber(citation.sourceId)}`}
            aria-label={`Source ${sourceNumber(citation.sourceId)}`}
            >{sourceNumber(citation.sourceId)}</a
          ></sup
        >{/each}
    </p>
  </section>

  <section class="mission-section facts-section" aria-labelledby="facts-title">
    <SectionHeading number="01" eyebrow="Mission profile" title="Key facts" />
    <dl class="facts-grid">
      {#each data.mission.facts as fact}
        <div>
          <dt>{fact.label}</dt>
          <dd>
            {fact.value}{#if fact.citation}<sup
                ><a
                  href={`#source-${sourceNumber(fact.citation.sourceId)}`}
                  aria-label={`Source ${sourceNumber(fact.citation.sourceId)}`}
                  >{sourceNumber(fact.citation.sourceId)}</a
                ></sup
              >{/if}
          </dd>
        </div>
      {/each}
    </dl>
  </section>

  <section class="mission-section timeline-section" aria-labelledby="timeline-title">
    <SectionHeading number="02" eyebrow="Sequence" title="Event timeline" />
    <ol class="timeline">
      {#each data.mission.events as event, index}
        <li>
          <div class="timeline-time">
            <span>{event.time}</span><i>{String(index + 1).padStart(2, '0')}</i>
          </div>
          <div class="timeline-copy">
            <p class="evidence-label">{event.status}</p>
            <h3>{event.title}</h3>
            <p>
              {event.description}{#each event.citations as citation}<sup
                  ><a
                    href={`#source-${sourceNumber(citation.sourceId)}`}
                    aria-label={`Source ${sourceNumber(citation.sourceId)}`}
                    >{sourceNumber(citation.sourceId)}</a
                  ></sup
                >{/each}
            </p>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section class="mission-section engineering-section" aria-labelledby="engineering-title">
    <SectionHeading number="03" eyebrow="Technical reading" title="Engineering highlights" />
    <div class="highlight-list">
      {#each data.mission.highlights as highlight, index}
        <article>
          <span class="highlight-number">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <p class:claim={highlight.evidence === 'company-claim'} class="evidence-label">
              {highlight.evidence === 'company-claim' ? 'Company ambition' : 'Demonstrated outcome'}
            </p>
            <h3>{highlight.title}</h3>
            <p>
              {highlight.description}{#each highlight.citations as citation}<sup
                  ><a
                    href={`#source-${sourceNumber(citation.sourceId)}`}
                    aria-label={`Source ${sourceNumber(citation.sourceId)}`}
                    >{sourceNumber(citation.sourceId)}</a
                  ></sup
                >{/each}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="outcome-section" aria-labelledby="outcome-title">
    <div class="outcome-heading">
      <p class="eyebrow">04 / Assessment</p>
      <span class="outcome-mark" aria-hidden="true">✓</span>
    </div>
    <div class="outcome-body">
      <div>
        <p class="evidence-label">Outcome</p>
        <h2 id="outcome-title">{data.mission.outcome.label}</h2>
        <p>
          {data.mission.outcome.summary}{#each data.mission.outcome.citations as citation}<sup
              ><a
                href={`#source-${sourceNumber(citation.sourceId)}`}
                aria-label={`Source ${sourceNumber(citation.sourceId)}`}
                >{sourceNumber(citation.sourceId)}</a
              ></sup
            >{/each}
        </p>
      </div>
      <div>
        <p class="evidence-label">Legacy</p>
        <p>{data.mission.outcome.legacy}</p>
      </div>
    </div>
  </section>

  <section class="mission-section gallery-section" aria-labelledby="gallery-title">
    <SectionHeading number="05" eyebrow="Visual record" title="Gallery" />
    <p class="gallery-note">
      Documentary photographs by Steve Jurvetson, published under CC BY 2.0. Each frame links to its
      license and original Wikimedia Commons record.
    </p>
    <div class="gallery-grid">
      {#each data.mission.media.slice(1) as media, index}
        <MediaFrame {media} index={index + 2} />
      {/each}
    </div>
  </section>

  <section class="mission-section sources-section" aria-labelledby="sources-title">
    <SectionHeading number="06" eyebrow="Research record" title="Sources" />
    <ol class="sources-list">
      {#each data.mission.sources as source, index}
        <li id={`source-${index + 1}`}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <a href={source.url} rel="noreferrer">{source.title} ↗</a>
            <p>
              {source.publisher} · Published {source.publishedAt} · Accessed {source.accessedAt}
            </p>
          </div>
          <span>{source.kind}</span>
        </li>
      {/each}
    </ol>
    <aside class="fixture-note" aria-label="Editorial status">
      <strong>Editorial status</strong>
      <p>
        Event facts and outcomes are based on the sources above. Summaries and significance text are
        fixture editorial copy pending a full research and copy-edit pass.
      </p>
    </aside>
  </section>

  <nav class="next-record" aria-label="Archive context">
    <span>End of record 001</span>
    <a href="/vehicles/starship">Return to Starship <span>→</span></a>
  </nav>
</article>

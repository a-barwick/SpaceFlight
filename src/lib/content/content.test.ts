import { describe, expect, it } from 'vitest';
import { companies, getMissionContext, missions, sources, vehicles } from './index';

describe('content repository', () => {
  it('resolves the complete Flight 5 relationship chain', () => {
    const context = getMissionContext('starship-flight-5');

    expect(context?.company.name).toBe('SpaceX');
    expect(context?.vehicle.name).toBe('Starship');
    expect(context?.mission.name).toBe('Flight 5');
  });

  it('keeps slugs unique and all citations resolvable', () => {
    for (const collection of [companies, vehicles, missions]) {
      const slugs = collection.map(({ slug }) => slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }

    const sourceIds = new Set(sources.map(({ id }) => id));
    const citedIds = [
      ...companies.flatMap(({ citations }) => citations),
      ...vehicles.flatMap(({ citations }) => citations),
      ...missions.flatMap((mission) => [
        ...mission.dekCitations,
        ...mission.significanceCitations,
        ...mission.outcome.citations,
        ...mission.events.flatMap(({ citations }) => citations),
        ...mission.highlights.flatMap(({ citations }) => citations),
        ...mission.facts.flatMap(({ citation }) => (citation ? [citation] : [])),
        ...(mission.launch?.citations ?? []),
        ...(mission.landing?.citations ?? []),
        ...(mission.recovery?.citations ?? [])
      ])
    ].map(({ sourceId }) => sourceId);

    expect(citedIds.every((id) => sourceIds.has(id))).toBe(true);
  });

  it('requires attribution and license records for every published media asset', () => {
    for (const media of missions.flatMap(({ media }) => media)) {
      if (media.treatment !== 'asset') continue;

      expect(media.src).toMatch(/^\/media\//);
      expect(media.alt.length).toBeGreaterThan(0);
      expect(media.credit).toBeTruthy();
      expect(media.sourceUrl).toMatch(/^https:\/\//);
      expect(media.licenseUrl).toMatch(/^https:\/\//);
    }
  });
});

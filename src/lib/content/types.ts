export type Slug = string;

export interface Citation {
  sourceId: string;
  note?: string;
}

export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishedAt?: string;
  accessedAt: string;
  kind: 'primary' | 'regulatory' | 'reference';
}

export interface Media {
  id: string;
  kind: 'image' | 'video';
  treatment: 'placeholder' | 'asset' | 'embed';
  src?: string;
  alt: string;
  caption: string;
  credit?: string;
  sourceUrl?: string;
  license?: string;
  licenseUrl?: string;
  citation?: Citation;
}

export interface Company {
  slug: Slug;
  name: string;
  founded?: string;
  headquarters?: string;
  synopsis: string;
  significance: string;
  citations: Citation[];
}

export interface Vehicle {
  slug: Slug;
  companySlug: Slug;
  name: string;
  publicType: string;
  status: 'development' | 'active' | 'retired';
  synopsis: string;
  significance: string;
  citations: Citation[];
}

export interface MissionEvent {
  time: string;
  title: string;
  description: string;
  status: 'planned' | 'observed' | 'reported';
  citations: Citation[];
}

export interface TechnicalHighlight {
  title: string;
  description: string;
  evidence: 'observed' | 'company-claim';
  citations: Citation[];
}

export interface MissionOutcome {
  status: 'success' | 'partial-success' | 'failure' | 'ongoing' | 'planned';
  label: string;
  summary: string;
  legacy: string;
  citations: Citation[];
}

export interface Mission {
  slug: Slug;
  companySlug: Slug;
  vehicleSlug: Slug;
  name: string;
  publicType: string;
  sequence?: number;
  date: string;
  location: string;
  dek: string;
  dekCitations: Citation[];
  significance: string;
  significanceCitations: Citation[];
  outcome: MissionOutcome;
  facts: Array<{ label: string; value: string; citation?: Citation }>;
  events: MissionEvent[];
  highlights: TechnicalHighlight[];
  media: Media[];
  sources: Source[];
  launch?: { site: string; timeUtc?: string; citations: Citation[] };
  landing?: { mode: string; site?: string; citations: Citation[] };
  recovery?: { vehicle: string; method: string; result: string; citations: Citation[] };
  crew?: Array<{ name: string; role: string }>;
  payload?: { name: string; description?: string };
  expedition?: { destination: string; duration?: string };
}

export interface MissionContext {
  company: Company;
  vehicle: Vehicle;
  mission: Mission;
}

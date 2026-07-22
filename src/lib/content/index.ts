import { companies, missions, sources, vehicles } from './spaceflight';
import type { MissionContext, Slug } from './types';

export * from './types';
export { companies, missions, sources, vehicles };

export function getCompany(slug: Slug) {
  return companies.find((company) => company.slug === slug);
}

export function getVehicle(slug: Slug) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getMission(slug: Slug) {
  return missions.find((mission) => mission.slug === slug);
}

export function getMissionContext(slug: Slug): MissionContext | undefined {
  const mission = getMission(slug);
  if (!mission) return undefined;

  const company = getCompany(mission.companySlug);
  const vehicle = getVehicle(mission.vehicleSlug);
  if (!company || !vehicle || vehicle.companySlug !== company.slug) return undefined;

  return { company, vehicle, mission };
}

import { error } from '@sveltejs/kit';
import { getCompany, getVehicle, missions } from '$lib/content';

export function load() {
  const vehicle = getVehicle('starship');
  if (!vehicle) error(404, 'Vehicle not found');
  const company = getCompany(vehicle.companySlug);
  if (!company) error(404, 'Company not found');

  return {
    company,
    vehicle,
    missions: missions.filter(({ vehicleSlug }) => vehicleSlug === vehicle.slug)
  };
}

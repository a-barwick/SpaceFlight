import { error } from '@sveltejs/kit';
import { getCompany, vehicles } from '$lib/content';

export function load() {
  const company = getCompany('spacex');
  if (!company) error(404, 'Company not found');

  return {
    company,
    vehicles: vehicles.filter(({ companySlug }) => companySlug === company.slug)
  };
}

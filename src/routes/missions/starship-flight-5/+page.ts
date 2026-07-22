import { error } from '@sveltejs/kit';
import { getMissionContext } from '$lib/content';

export function load() {
  const context = getMissionContext('starship-flight-5');
  if (!context) error(404, 'Mission not found');
  return context;
}

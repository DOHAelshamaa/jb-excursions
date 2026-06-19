import { supabase } from '../lib/supabaseClient';

/**
 * Fetch all approved reviews, newest first.
 * @returns {{ data: Array, error: string|null }}
 */
export async function fetchApprovedReviews() {
  if (!supabase) return { data: [], error: 'Supabase not configured.' };

  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, rating, review, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[Reviews] fetch error:', error.message);
    return { data: [], error: error.message };
  }

  return { data: data ?? [], error: null };
}

/**
 * Submit a new review (approved defaults to false — pending moderation).
 * @param {{ name: string, rating: number, review: string }} payload
 * @returns {{ error: string|null }}
 */
export async function submitReview({ name, rating, review }) {
  if (!supabase) return { error: 'Supabase not configured.' };

  const { error } = await supabase
    .from('reviews')
    .insert([{ name, rating, review, approved: false }]);

  if (error) {
    console.error('[Reviews] submit error:', error.message);
    return { error: error.message };
  }

  return { error: null };
}

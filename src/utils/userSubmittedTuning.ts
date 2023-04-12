// Since the server load functions can't process #'s within the request url
// We convert all sharps to 's'
export function formatTuningNameForUrl(tuningName: string): string {
  return tuningName.replaceAll('#', 's');
}

// And vise-versa within the server
export function getTuningNameFromUrl(tuningName: string): string {
  return tuningName.replaceAll('s', '#');
}

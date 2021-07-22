import { Variables } from 'relay-runtime';
import { storage } from '../lib/storage';

export const fetchGraphQL = async (
  text: string | null | undefined,
  variables: Variables
) => {
  const AUTH_TOKEN = storage.getGithubAccessToken();

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
};

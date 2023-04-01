import { start_mongo } from '$lib/server/mongodb';

start_mongo()
  .then(() => {
    console.log('Mongo started 🟢');
  })
  .catch((e) => {
    console.error('🔴 Error starting mongo', e);
  });

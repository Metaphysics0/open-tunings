import { start_mongo } from '$lib/server/mongodb';
import { start_prisma } from '$lib/server/prisma';

start_mongo()
  .then(() => {
    console.log('Mongo started 🟢');
  })
  .catch((e) => {
    console.error('🔴 Error starting mongo', e);
  });

start_prisma()
  .then(() => {
    console.log('STARTED PRISMA!!!');
  })
  .catch((e) => {
    console.error('🔴 Error starting prisma', e);
  });

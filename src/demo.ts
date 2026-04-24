import { Wrangler } from './engine/Wrangler';
import { CoderBurro } from './engine/agents/CoderBurro';

async function main() {
  const wrangler = new Wrangler();
  
  console.log('--- Initializing Corral ---');
  const corral = await wrangler.createCorral('project-123');
  
  const alice = new CoderBurro('alice');
  corral.addBurro(alice);
  
  console.log('--- Assigning Task ---');
  const result = await wrangler.assignTask(corral.id, alice.id, {
    id: 'task-1',
    description: 'Implement a React component for the dashboard',
    status: 'pending'
  });
  
  console.log('Task Result:', result);
  console.log('Blackboard Version:', corral.blackboard.version);
}

// Only run if this is the main module (not during build)
if (process.env.RUN_DEMO === 'true') {
  main().catch(console.error);
}

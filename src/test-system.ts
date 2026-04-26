import { Wrangler } from './engine/Wrangler';
import { CoderBurro } from './engine/agents/CoderBurro';
import { ArchitectBurro } from './engine/agents/ArchitectBurro';
import { FileBlackboardStorage } from './engine/core/BlackboardStorage';
import * as fs from 'fs/promises';

async function runTest() {
  console.log('--- Burros.AI System Test ---');
  
  // 1. Setup Storage & Wrangler
  const storageDir = './.burro/test_run';
  await fs.rm(storageDir, { recursive: true, force: true });
  const storage = new FileBlackboardStorage(storageDir);
  const wrangler = new Wrangler(storage);

  // 2. Create Corral
  const corral = await wrangler.createCorral('test-project');
  console.log(`Corral created: ${corral.id}`);

  // 3. Add Burros
  const architect = new ArchitectBurro('arch-1');
  const coder = new CoderBurro('coder-1');
  corral.addBurro(architect);
  corral.addBurro(coder);

  // 4. Execute Architect Task (Standard tool usage)
  console.log('\n--- Task 1: Architecting ---');
  const archTask = {
    id: 't1',
    description: 'Design the auth system',
    status: 'pending' as const,
    context: { filePath: `${storageDir}/docs/auth.md` }
  };
  const archResult = await wrangler.assignTask(corral.id, architect.id, archTask);
  console.log('Architect Result:', archResult.success ? 'Success' : 'Failed');

  // 5. Execute Coder Task (Specific tool usage via context)
  console.log('\n--- Task 2: Coding (File Write) ---');
  const codeTask = {
    id: 't2',
    description: 'Implement login logic',
    status: 'pending' as const,
    context: { 
      tool: 'write_file', 
      path: `${storageDir}/src/login.ts`, 
      content: 'export const login = () => { console.log("Login logic"); };' 
    }
  };
  const codeResult = await wrangler.assignTask(corral.id, coder.id, codeTask);
  console.log('Coder Result:', codeResult.success ? 'Success' : 'Failed');

  // 6. Verify Persistence
  console.log('\n--- Verifying Persistence ---');
  const reloadedBlackboard = await storage.load(corral.id);
  console.log('Blackboard version:', reloadedBlackboard?.version);
  
  const events = await storage.getEvents(corral.id);
  console.log('Total events recorded:', events.length);

  const fileExists = await fs.access(`${storageDir}/src/login.ts`).then(() => true).catch(() => false);
  console.log('File login.ts created:', fileExists);

  console.log('\n--- Test Finished ---');
}

runTest().catch(console.error);

import { Logo } from './branding/Logo';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <Logo className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed">
              The modern agentic flow orchestration platform. Coordinate specialized agents to execute complex tasks with precision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">Corrals</a></li>
                <li><a href="#" className="hover:text-indigo-400">Burros</a></li>
                <li><a href="#" className="hover:text-indigo-400">Blueprints</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">About</a></li>
                <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Burros.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

'use client';

import { useState } from 'react';
import { Link, Copy, Check, ExternalLink, Loader2 } from 'lucide-react';

export default function UrlShortener() {
  const [url, setUrl] = useState('');
  const [customKey, setCustomKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ shortUrl: string; shortKey: string } | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, customKey: customKey || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to shorten URL');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="card-glass p-8 border-border">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Link className="text-accent" />
          Shorten Your Link
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="text-sm font-medium text-foreground/60">
              Original URL
            </label>
            <input
              id="url"
              type="url"
              required
              placeholder="https://very-long-url.com/some/deep/path"
              className="bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="customKey" className="text-sm font-medium text-foreground/60">
              Custom Key (Optional)
            </label>
            <div className="flex items-center gap-2">
              <span className="text-foreground/40 font-mono text-sm hidden sm:inline">
                burros.ai/
              </span>
              <input
                id="customKey"
                type="text"
                placeholder="my-cool-link"
                className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-mono"
                value={customKey}
                onChange={(e) => setCustomKey(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
                Processing...
              </>
            ) : (
              'Create Short Link'
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground/60 mb-2">Your short link is ready:</p>
              <div className="flex items-center gap-3">
                <input
                  readOnly
                  value={result.shortUrl}
                  className="flex-1 bg-surface border border-border rounded px-3 py-2 text-accent font-mono"
                />
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-surface border border-border rounded-lg hover:border-accent transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="text-green-500" /> : <Copy />}
                </button>
                <a
                  href={result.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface border border-border rounded-lg hover:border-accent transition-colors"
                  title="Open link"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

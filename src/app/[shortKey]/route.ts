import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import redisClient from '@/lib/redis';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ shortKey: string }> }
) {
  const { shortKey } = await params;

  try {
    // 1. Check Redis Cache
    let originalUrl: string | null = null;
    
    try {
      if (redisClient.isOpen) {
        originalUrl = await redisClient.get(`url:${shortKey}`);
      }
    } catch (cacheError) {
      console.error('Redis lookup error:', cacheError);
    }

    // 2. If not in cache, check DB
    if (!originalUrl) {
      const urlRecord = await prisma.url.findUnique({
        where: { shortKey },
      });

      if (!urlRecord) {
        return NextResponse.json({ error: 'URL not found' }, { status: 404 });
      }

      originalUrl = urlRecord.originalUrl;

      // Update cache
      try {
        if (redisClient.isOpen) {
          await redisClient.set(`url:${shortKey}`, originalUrl, {
            EX: 3600 * 24,
          });
        }
      } catch (cacheError) {
        console.error('Redis cache update error:', cacheError);
      }
    }

    // 3. Async Analytics (Non-blocking)
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ipAddress = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const referrer = request.headers.get('referer') || 'direct';

    // In a real prod environment, we'd push to a queue (RabbitMQ/Kafka)
    // For MVP, we do an async DB write without awaiting it for the redirect response
    prisma.url.findUnique({ where: { shortKey }, select: { id: true } })
      .then(url => {
        if (url) {
          return prisma.analytics.create({
            data: {
              urlId: url.id,
              userAgent,
              ipAddress,
              referrer,
            }
          });
        }
      })
      .catch(err => console.error('Analytics tracking error:', err));

    // 4. Redirect
    return NextResponse.redirect(originalUrl, 302);
  } catch (error) {
    console.error('Redirection error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import redisClient from '@/lib/redis';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  try {
    const { url, customKey } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const shortKey = customKey || nanoid(7);

    // Check if key already exists
    const existing = await prisma.url.findUnique({
      where: { shortKey },
    });

    if (existing) {
      return NextResponse.json({ error: 'Short key already in use' }, { status: 400 });
    }

    const newUrl = await prisma.url.create({
      data: {
        shortKey,
        originalUrl: url,
      },
    });

    // Cache it immediately
    try {
      if (redisClient.isOpen) {
        await redisClient.set(`url:${shortKey}`, url, {
          EX: 3600 * 24, // Cache for 24 hours
        });
      }
    } catch (cacheError) {
      console.error('Redis cache error:', cacheError);
    }

    return NextResponse.json({
      shortKey: newUrl.shortKey,
      originalUrl: newUrl.originalUrl,
      shortUrl: `${new URL(request.url).origin}/${newUrl.shortKey}`,
    });
  } catch (error) {
    console.error('Shorten error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

#!/usr/bin/env python3
"""Module for an asynchronous generator that yields random numbers."""

from typing import AsyncIterator
import asyncio
import random


async def async_generator() -> AsyncIterator[float]:
    """Asynchronously yields random numbers between 0 and 10 ten times."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

#!/usr/bin/env python3
"""
This module defines an asynchronous generator function.
"""
import asyncio
import random
from typing import Generator, AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    A coroutine that yields 10 random numbers between 0 and 10.

    This coroutine loops 10 times, waiting 1 second asynchronously each time,
    then yields a random float between 0 and 10.

    Returns:
        AsyncGenerator yielding random float values
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

#!/usr/bin/env python3
"""This module contains async routines for concurrent coroutines."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Execute multiple coroutines concurrently and return sorted delays.

    Args:
        n (int): Number of coroutines to execute.
        max_delay (int): Maximum delay for each coroutine.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays = []
    coroutines = [wait_random(max_delay) for _ in range(n)]
    for future in asyncio.as_completed(coroutines):
        delay = await future
        delays.append(delay)
    return delays

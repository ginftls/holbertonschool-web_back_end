#!/usr/bin/env python3
"""This module provides async routines using asyncio Tasks."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Execute multiple Tasks concurrently and return sorted delays.

    Args:
        n (int): Number of Tasks to execute.
        max_delay (int): Maximum delay for each Task.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    for future in asyncio.as_completed(tasks):
        delay = await future
        delays.append(delay)
    return delays

#!/usr/bin/env python3
"""
This module defines a coroutine to measure runtime of parallel async operations
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and measures runtime.

    This coroutine uses asyncio.gather to run four instances of
    async_comprehension concurrently and returns the total execution time.

    Returns:
        float: Total runtime in seconds
    """
    start_time = time.perf_counter()

    # Execute four instances of async_comprehension in parallel
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.perf_counter()
    return end_time - start_time

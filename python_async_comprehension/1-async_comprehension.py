#!/usr/bin/env python3
"""
This module defines an asynchronous comprehension function.
"""
from typing import List
import asyncio

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    A coroutine that collects 10 random numbers using async comprehension.

    This coroutine uses async_generator to collect 10 random float values
    using async comprehension and returns them as a list.

    Returns:
        List[float]: A list of 10 random float values
    """
    return [value async for value in async_generator()]

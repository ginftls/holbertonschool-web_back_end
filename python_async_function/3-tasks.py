#!/usr/bin/env python3
"""This module provides a function to create asyncio Tasks from coroutines."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Create an asyncio Task for the wait_random coroutine.

    Args:
        max_delay (int): Maximum delay for wait_random.

    Returns:
        asyncio.Task: Task object for the coroutine.
    """
    coroutine = wait_random(max_delay)
    return asyncio.create_task(coroutine)

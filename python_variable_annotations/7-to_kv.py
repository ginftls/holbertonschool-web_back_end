#!/usr/bin/env python3
"""Module for converting a string and number to a tuple w/ type annotations"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the string k and the square of v as a float."""
    return (k, v ** 2)

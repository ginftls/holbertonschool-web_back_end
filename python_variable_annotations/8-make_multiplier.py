#!/usr/bin/env python3
"""
This module defines the make_multiplier function that returns
a function to multiply a float by a given multiplier.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by the given multiplier."""
    def multiplier_func(value: float) -> float:
        return value * multiplier
    return multiplier_func

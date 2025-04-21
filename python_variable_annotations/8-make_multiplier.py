#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiplier_func(value: float) -> float:
        return value * multiplier
    return multiplier_func

#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple
"""
This module defines a function that takes an iterable of sequences
and returns a list of tuples, each containing the sequence and its length.
"""


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]

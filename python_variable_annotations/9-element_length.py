#!/usr/bin/env python3
"""This module contains element length computation functionality."""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Calculate length of elements in an iterable.

    Args:
        lst: An iterable containing sequence elements

    Returns:
        List of tuples containing original elements and their lengths
    """
    return [(i, len(i)) for i in lst]
